import { makeObservable, observable, action } from 'mobx';

class UserStore {
  constructor(rootStore) {
    this.rootStore = rootStore;
    this.users = [];

    makeObservable(this, {
      users: observable,
      empty: action,
      addUser: action,
    });
  }

  addUser = (user) => {
    this.users.push(user);
  };

  empty() {
    this.users = [];
  }
}

export default UserStore;
