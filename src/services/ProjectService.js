import 'firebase/firestore';
import 'firebase/storage';
import { firestore } from 'firebase/app';

class ProjectService {
  constructor({ firebase }) {
    this.db = firebase.firestore();
    this.storage = firebase.storage().ref();
  }

  getAll = async () => {
    const snapshot = await this.db.collection('projects').get();
    // return snapshot.docs.map((project) => project.data());
    return snapshot.docs.map((projectFromDB) => {
      return { id: projectFromDB.id, data: projectFromDB.data() };
    });
  };

  getById = async (id) => {
    const snapshot = await this.db.collection('projects').doc(id).get();
    return { id: snapshot.id, data: snapshot.data() };
  };

  create = async (data) => {
    // .add(...) and .doc().set(...) are completely equivalent
    const result = await this.db
      .collection('projects')
      .doc(data.id)
      .set({
        title: data.title,
        intro: data.intro,
        description: data.description,
        location: {
          isKnownPlace: data.isKnownPlace,
          city: data.city,
          street: data.street,
          number: data.number,
        },
        userId: data.userId,
        categories: data.categories,
        themes: data.themes,
      });
    return result;
  };

  updateState = async (data) => {
    const result = await this.db.collection('projects').doc(`${data.id}`).update({ state: data.state });
    return result;
  };

  uploadImage = (file, name, userId) => {
    let imageRef = this.storage.child(`images/${name}`);
    imageRef.put(file);
  };
}

export default ProjectService;
