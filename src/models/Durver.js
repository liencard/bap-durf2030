import { v4 } from 'uuid';
import List from './List';
import User from './User';

class Durver {
  constructor({ id = v4(), amount, name, timestamp, message, user, list }) {
    if (!user) {
      throw new Error('A comment must have a user');
    }
    this.id = id;
    this.amount = amount;
    this.name = name;
    this.timestamp = timestamp;
    this.message = message;
    this.user = user;
    //this.list = list;
  }
}

const durverConverter = {
  toFirestore: function (durver) {
    console.log('test');
    console.log(durver);
    return {
      //listId: durver.list.id,
      userId: durver.user.id,
      amount: durver.amount,
      name: durver.name,
      timestamp: durver.timestamp,
      message: durver.message,
      id: durver.id,
    };
  },
  fromFirestore: function (snapshot, options) {
    const data = snapshot.data(options);
    ////const parentGroup = snapshot.ref.parent.parent;
    //const list = new List({ id: parentGroup.id });
    console.log(data);
    const user = new User({
      id: data.userId,
      name: data.name,
      avatar: data.avatar,
    });
    return new Durver({
      id: snapshot.id,
      amount: data.amount,
      name: data.name,
      timestamp: data.timestamp,
      message: data.message,
      user: user,
      //list: list,
    });
  },
};

export { durverConverter };

export default Durver;
