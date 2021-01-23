import { makeObservable, observable } from 'mobx';
import UserService from '../services/UserService';

class UserStore {
  constructor(rootStore) {
    this.rootStore = rootStore;
    this.userService = new UserService(this.rootStore.firebase);
    this.users = [];

    makeObservable(this, {
      users: observable,
    });
  }

  createUser = async (user) => {
    return await this.userService.create(user);
  };
}

export default UserStore;
