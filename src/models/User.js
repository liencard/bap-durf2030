import { v4 } from 'uuid';

class User {
  constructor({
    id = v4(),
    name,
    avatar = '',
    email,
    password,
    admin,
    organisation,
    awards = [],
  }) {
    this.id = id;
    this.name = name;
    this.avatar = avatar;
    if (!avatar) {
      this.avatar = `https://avatars.dicebear.com/api/identicon/${this.id}.svg`;
    }

    this.email = email;
    this.password = password;
    this.admin = admin;
    this.awards = awards;
    this.organisation = organisation;
    this.comments = [];
  }

  linkComment(comment) {
    !this.comments.includes(comment) && this.comments.push(comment);
  }
}

const convertDataUser = {
  toJSON(user) {
    return {
      userId: user.id,
      name: user.name,
      avatar: user.avatar,
      email: user.email,
      admin: user.admin,
      organisation: user.organisation,
      awards: user.awards,
    };
  },

  fromJSON(user, store) {
    return new User({
      id: user.userId,
      name: user.name,
      avatar: user.avatar,
      email: user.email,
      admin: user.admin,
      organisation: user.organisation,
      awards: user.awards,
      store: store,
    });
  },
};

const userConverter = {
  toFirestore: function (user) {
    return {
      userId: user.id,
      name: user.name,
      avatar: user.avatar,
      email: user.email,
      admin: user.admin,
      organisation: user.organisation,
      awards: user.awards,
    };
  },
  fromFirestore: function (snapshot, options) {
    const data = snapshot.data(options);
    return new User({
      name: data.name,
      email: data.email,
      avatar: data.avatar,
      id: data.userId,
      admin: data.admin,
      organisation: data.organisation,
      awards: data.awards,
    });
  },
};

export { userConverter, convertDataUser };
export default User;
