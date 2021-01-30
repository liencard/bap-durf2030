import 'firebase/firestore';
import 'firebase/storage';
import { projectConverter } from '../models/Project';
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

  create = async (project) => {
    // formtest verwijderen
    const ref = await this.db.collection('projects').doc('dummy');
    ref.withConverter(projectConverter).set(project);
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
