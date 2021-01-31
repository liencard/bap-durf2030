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

  getProjectsForUser = async (userId) => {
    const snapshot = await this.db
      .collectionGroup('owners')
      .where('userId', '==', userId)
      .withConverter(userConverter)
      .get();

    return snapshot.docs.map((doc) => doc.ref.parent.parent.id);
  };

  create = async (project) => {
    // dummy verwijderen (doc leeg laten)
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

  // getComments = async (projectId) => {
  //   const snapshot = await this.db
  //     .collectionGroup('comments')
  //     .where('projectId', '==', projectId)
  //     .orderBy('timestamp')
  //     .withConverter(commentConverter)
  //     .get();
  //   return snapshot.docs.map((comment) => comment.data());
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
    console.log('service');
    console.log(data);
    const result = await this.db.collection('projects').doc(data.id).update({
      title: data.title,
      intro: data.intro,
    });
    return result;
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
