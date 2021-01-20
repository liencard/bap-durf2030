import 'firebase/firestore';
import { firestore } from 'firebase/app';

class ProjectService {
  constructor({ firebase }) {
    this.db = firebase.firestore();
  }

  getAll = async () => {
    const snapshot = await this.db.collection('projects').get();
    return snapshot.docs.map((project) => project.data());
  };

  getById = async (id) => {
    return (await this.db.collection('projects').doc(id).get()).data();
  };
}

export default ProjectService;
