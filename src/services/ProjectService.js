import 'firebase/firestore';
import { firestore } from 'firebase/app';

class ProjectService {
  constructor({ firebase }) {
    this.db = firebase.firestore();
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

  updateState = async (data) => {
    const result = await this.db
      .collection('projects')
      .doc(`${data.id}`)
      .update({ state: data.state });
    return result;
  };
}

export default ProjectService;
