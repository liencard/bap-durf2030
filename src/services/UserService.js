import 'firebase/firestore';
//import { firestore } from 'firebase/app';
import { userConverter } from '../models/User';
import { projectConverter } from '../models/Project';

class UserService {
  constructor(firebase) {
    this.db = firebase.firestore();
  }

  create = async (user) => {
    return await this.db
      .collection('users')
      .doc(user.email)
      .withConverter(userConverter)
      .set(user);
  };

  getUserByEmail = async (email) => {
    let user = await this.db
      .collection('users')
      .doc(email)
      .withConverter(userConverter)
      .get();
    user = await user.data();
    console.log(user);
    return user;
  };

  getAllUsers = async () => {
    let snapshot = await this.db.collection('users').get();
    return snapshot.docs.map((user) => user.data());
    // return snapshot.docs.map((userFromDB) => {
    //   return { id: userFromDB.id, data: userFromDB.data() };
    // });
  };

  getAllAdmins = async () => {
    return await this.db
      .collectionGroup('users')
      .where('admin', '==', false)
      .withConverter(userConverter)
      .get();
  };

  // WEG
  getProjectsByUser = async (user) => {
    const projectsRef = this.db
      .collection('users')
      .doc(user.email)
      .collection('projects');

    const projects = await projectsRef.withConverter(projectConverter).get();
    return projects.docs.map((project) => project.data());
  };

  addAdminState = async (data) => {
    const result = await this.db
      .collection('users')
      .doc(`${data.email}`)
      .update({ admin: true });
    return result;
  };
}
export default UserService;
