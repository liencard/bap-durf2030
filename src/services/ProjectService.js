import 'firebase/firestore';
import 'firebase/storage';
import { projectConverter } from '../models/Project';
import { userConverter } from '../models/User';
import { commentConverter } from '../models/Comment';
import { firestore } from 'firebase/app';
import { values } from 'mobx';

class ProjectService {
  constructor({ firebase }) {
    this.db = firebase.firestore();
    this.storage = firebase.storage();
  }

  getAll = async () => {
    const snapshot = await this.db.collection('projects').withConverter(projectConverter).get();
    return snapshot.docs.map((project) => project.data());
  };

  // getAllIds = () => {
  //   return this.db.collection('projects').listDocuments();
  // };

  getById = async (id) => {
    const project = await this.db.collection('projects').doc(id).withConverter(projectConverter).get();
    // project = await user.project();
    return project.data();
  };

  getLikesById = async (id) => {
    const snapshot = await this.db.collection('projects').doc(id).collection('likes').get();
    return snapshot.docs.map((like) => like.data());
  };

  addLike = async (projectId, userId) => {
    this.db.collection('projects').doc(projectId).collection('likes').doc(userId).set({ userId: userId });
  };

  removeLike = async (projectId, userId) => {
    this.db.collection('projects').doc(projectId).collection('likes').doc(userId).delete();
  };

  getProjectsForUser = async (userId) => {
    const snapshot = await this.db
      .collectionGroup('owners')
      .where('userId', '==', userId)
      .withConverter(userConverter)
      .get();

    return snapshot.docs.map((doc) => doc.ref.parent.parent.id);
  };

  create = async (project) => {
    const ref = await this.db.collection('projects').doc();
    ref.withConverter(projectConverter).set(project);
    project.owners.forEach((owner) => {
      ref.collection('owners').doc(owner.id).set({
        userId: owner.id,
        avatar: owner.avatar,
        name: owner.name,
      });
    });

    return ref.id;
  };

  createComment = async (comment) => {
    return await this.db
      .collection('projects')
      .doc(comment.project.id)
      .collection('comments')
      .doc()
      .withConverter(commentConverter)
      .set(comment);
  };

  createOwner = async (owner, projectId) => {
    return await this.db
      .collection('projects')
      .doc(projectId)
      .collection('owners')
      .doc()
      .set({ userId: owner.id, avatar: owner.avatar, name: owner.name });
  };

  removeOwner = async (ownerId, projectId) => {
    this.db.collection('projects').doc(projectId).collection('owners').doc(ownerId).delete();
  };

  getOwners = async (projectId) => {
    const snapshot = await this.db
      .collection('projects')
      .doc(projectId)
      .collection('owners')
      .withConverter(userConverter)
      .get();
    const result = snapshot.docs.map((user) => user.data());
    return result;
  };

  // getOwners = async (projectId) => {
  //   console.log(projectId);
  //   const snapshot = await this.db
  //     .collectionGroup('owners')
  //     .where('projectId', '==', projectId)
  //     .orderBy('name')
  //     .withConverter(userConverter)
  //     .get();
  //   //console.log(snapshot);
  //   const result = snapshot.docs.map((user) => user.data());
  //   console.log(result);
  //   //return result;
  // };

  getComments = async (projectId, onChange) => {
    await this.db
      .collectionGroup('comments')
      .where('projectId', '==', projectId)
      .orderBy('timestamp')
      .withConverter(commentConverter)
      .onSnapshot(async (snapshot) => {
        snapshot.docChanges().forEach(async (change) => {
          if (change.type === 'added') {
            const commentObj = change.doc.data();
            onChange(commentObj);
          }
        });
      });
  };

  updateProject = async (data) => {
    await this.db
      .collection('projects')
      .doc(data.id)
      .update({
        title: data.title,
        intro: data.intro,
        description: data.description,
        location: {
          isKnownPlace: data.isKnownPlace,
          city: data.city,
          street: data.street,
          number: data.number,
        },
        themes: data.themes,
        categories: data.categories,
      });
  };

  updateState = async (data) => {
    const result = await this.db.collection('projects').doc(`${data.id}`).update({ state: data.state });
    return result;
  };

  uploadImage = (file, name, userId) => {
    let imageRef = this.storage.ref().child(`images/${name}`);
    imageRef.put(file);
  };
}

export default ProjectService;
