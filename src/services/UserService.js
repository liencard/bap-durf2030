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
}
export default UserService;
