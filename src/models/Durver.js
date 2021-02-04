import { v4 } from 'uuid';
import List from './List';
import User from './User';

class Durver {
  constructor({ timestamp, message, user, offers = [] }) {
    if (!user) {
      throw new Error('A comment must have a user');
    }
    this.timestamp = timestamp;
    this.message = message;
    this.user = user;
    this.offers = offers;
  }
}

const durverConverter = {
  toFirestore: function (durver) {
    return {
      //userId: durver.user.id,
      //name: durver.user.name,
      user: {
        name: durver.user.name,
        userId: durver.user.id,
        email: durver.user.email,
        avatar: durver.user.avatar,
      },
      timestamp: durver.timestamp,
      message: durver.message,
      offers: durver.offers,
    };
  },
  fromFirestore: function (snapshot, options) {
    const data = snapshot.data(options);
    console.log('data');
    console.log(data);
    const user = new User({
      id: data.userId,
      name: data.name,
      avatar: data.avatar,
      email: data.email,
    });
    return new Durver({
      id: snapshot.id,
      timestamp: data.timestamp,
      message: data.message,
      user: user,
      offers: data.offers,
    });
  },
};

export { durverConverter };

export default Durver;
