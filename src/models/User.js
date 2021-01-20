import { v4 } from 'uuid';

class User {
  constructor({ id = v4(), name, store, avatar = '', email, password }) {
    this.id = id;
    this.name = name;
    this.avatar = avatar;
    if (!avatar) {
      this.avatar = `https://avatars.dicebear.com/v2/avataaars/${this.id}.svg`;
    }

    if (!store) {
      throw new Error('voorzie een store');
    }
    this.store = store;
    this.store.addUser(this);

    this.email = email;
    this.password = password;
  }
}

// const userConverter = {
//   toFirestore: function (user) {
//     return {
//       userId: user.id,
//       name: user.name,
//       avatar: user.avatar,
//       email: user.email,
//     };
//   },
//   fromFirestore: function (snapshot, options) {
//     const data = snapshot.data(options);
//     return new User({
//       name: data.name,
//       email: data.email,
//       avatar: data.avatar,
//       id: data.userId,
//     });
//   },
// };

//export { userConverter };
export default User;
