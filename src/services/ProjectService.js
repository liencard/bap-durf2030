import 'firebase/firestore';
import 'firebase/storage';
import { projectConverter } from '../models/Project';
import { firestore } from 'firebase/app';
import { values } from 'mobx';
import { userConverter } from '../models/User';

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
    const snapshot = await this.db.collection('projects').doc('formtest').collection('likes').get();
    const test = snapshot.docs.map((like) => like.data());
    console.log(test);
  };

  getProjectForUser = async (userId) => {
    await this.db.collectionGroup('owners').where('userId', '==', userId).withConverter(userConverter).get();
  };

  create = async (data) => {
    // .add(...) and .doc().set(...) are completely equivalent
    const result = await this.db
      .collection('projects')
      .doc(data.id)
      .set({
        about: data.about,
        // budget: {
        //   required: data.budgetRequirement,
        //   amount: data.budget,
        //   info: data.budgetDescription,
        // },
        categories: data.categories,
        // contact: values.contact,
        description: data.description,
        intro: data.intro,
        location: {
          isKnownPlace: data.isKnownPlace,
          city: data.city,
          street: data.street,
          number: data.number,
        },
        // materials: {},
        // services: {},
        themes: data.themes,
        title: data.title,

        userId: data.userId,
      });
    return result;
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
