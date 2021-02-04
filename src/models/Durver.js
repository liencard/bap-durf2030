import { makeObservable, observable } from 'mobx';
import User from './User';

class Durver {
  constructor({
    timestamp,
    message,
    user,
    offers = [],
    fundingOffered,
    materialsOffered,
    servicesOffered,
  }) {
    if (!user) {
      throw new Error('A comment must have a user');
    }
    this.timestamp = timestamp;
    this.message = message;
    this.user = user;
    this.offers = offers;
    this.fundingOffered = fundingOffered;
    this.materialsOffered = materialsOffered;
    this.servicesOffered = servicesOffered;

    makeObservable(this, {
      offers: observable,
      user: observable,
      servicesOffered: observable,
      materialsOffered: observable,
      fundingOffered: observable,
    });
  }
}

const durverConverter = {
  toFirestore: function (durver) {
    return {
      user: {
        name: durver.user.name,
        userId: durver.user.id,
        email: durver.user.email,
        avatar: durver.user.avatar,
      },
      requirementsOffered: {
        funding: durver.fundingOffered,
        materials: durver.materialsOffered,
        services: durver.servicesOffered,
      },
      timestamp: durver.timestamp,
      message: durver.message,
      offers: durver.offers,
    };
  },
  fromFirestore: function (snapshot, options) {
    const data = snapshot.data(options);
    const user = new User({
      id: data.user.userId,
      name: data.user.name,
      avatar: data.user.avatar,
      email: data.user.email,
    });
    return new Durver({
      id: snapshot.id,
      timestamp: data.timestamp,
      message: data.message,
      user: user,
      offers: data.offers,
      fundingOffered: data.requirementsOffered.funding,
      materialsOffered: data.requirementsOffered.materials,
      servicesOffered: data.requirementsOffered.services,
    });
  },
};

export { durverConverter };

export default Durver;
