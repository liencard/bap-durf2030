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
    return user;
  };

  getAllUsers = async () => {
    let snapshot = await this.db.collection('users').get();
    return snapshot.docs.map((user) => user.data());
  };

  updateAdmin = (adminState, user) => {
    this.db
      .collection('users')
      .doc(`${user.email}`)
      .update({ admin: adminState });
  };
}
export default UserService;
