import 'firebase/firestore';
import 'firebase/storage';
import { projectConverter } from '../models/Project';
import { userConverter } from '../models/User';
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

    // const result = await snapshot.docs.map(async (doc) => {
    //   const projectId = doc.ref.parent.parent.id;
    //   const project = await this.getById(projectId);
    //   console.log(project);
    //   return project;
    // });
    // console.log(result);
    // return result;

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
