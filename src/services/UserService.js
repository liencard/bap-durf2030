import 'firebase/firestore';
import { userConverter } from '../models/User';

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
}
export default UserService;
