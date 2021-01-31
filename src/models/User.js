import { v4 } from 'uuid';

class User {
  constructor({
    id = v4(),
    name,
    lastname,
    avatar = '',
    email,
    password,
    admin,
  }) {
    this.id = id;
    this.name = name;
    //this.lastname = lastname;
    this.avatar = avatar;
    if (!avatar) {
      this.avatar = `https://avatars.dicebear.com/v2/avataaars/${this.id}.svg`;
    }

    this.email = email;
    this.password = password;
    this.admin = admin;
    this.comments = [];
  }

  linkComment(comment) {
    !this.comments.includes(comment) && this.comments.push(comment);
  }
}

const userConverter = {
  toFirestore: function (user) {
    return {
      userId: user.id,
      name: user.name,
      avatar: user.avatar,
      email: user.email,
      admin: user.admin,
      //lastname: user.lastname,
    };
  },
  fromFirestore: function (snapshot, options) {
    const data = snapshot.data(options);
    return new User({
      name: data.name,
      //lastname: data.lastname,
      email: data.email,
      avatar: data.avatar,
      id: data.userId, // userId naamgeving server, id naamgeving model
      admin: data.admin,
    });
  },
};

export { userConverter };
export default User;
