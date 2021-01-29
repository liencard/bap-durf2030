import 'firebase/firestore';
import 'firebase/storage';
import { firestore } from 'firebase/app';
import { values } from 'mobx';

class ProjectService {
  constructor({ firebase }) {
    this.db = firebase.firestore();
    this.storage = firebase.storage();
  }

  getAll = async () => {
    const snapshot = await this.db.collection('projects').get();
    // return snapshot.docs.map((project) => project.data());
    return snapshot.docs.map((projectFromDB) => {
      return { id: projectFromDB.id, data: projectFromDB.data() };
    });
  };

  // getAllIds = () => {
  //   return this.db.collection('projects').listDocuments();
  // };

  getById = async (id) => {
    const snapshot = await this.db.collection('projects').doc(id).get();
    return { id: snapshot.id, data: snapshot.data() };
  };

  getLikesById = async (id) => {
    const snapshot = await this.db.collection('projects').doc('formtest').collection('likes').get();
    const test = snapshot.docs.map((like) => like.data());
    console.log(test);
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
