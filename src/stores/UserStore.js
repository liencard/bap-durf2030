import { makeObservable, observable, action } from 'mobx';
import UserService from '../services/UserService';
import User from '../models/User';

class UserStore {
  constructor(rootStore) {
    this.rootStore = rootStore;
    this.users = [];
    this.userService = new UserService(this.rootStore.firebase);

    this.loadAllUsers();

    makeObservable(this, {
      loadAllUsers: action,
      users: observable,
    });
  }

  addUser = (user) => {
    this.users.push(user);
  };

  createUser = async (user) => {
    return await this.userService.create(user);
  };

  loadAllUsers = async () => {
    const jsonUsers = await this.userService.getAllUsers();
    jsonUsers.forEach((json) => this.updateUserFromServer(json));
  };

  loadAdmins = async () => {
    const jsonUsers = await this.userService.getAllUsers();
    this.updateUserFromServer(jsonUsers);
    return this.findAdmins(jsonUsers);
  };

  findAdmins = (users) => this.users.find((user) => user.admin === false);

  updateUserFromServer(json) {
    // console.log(json);
    let user = this.users.find((user) => user.email === json.email);
    if (!user) {
      user = new User({
        id: json.userId,
        name: json.name,
        email: json.email,
        avatar: json.avatar,
        admin: json.admin,
        store: this.rootStore.userStore,
      });
    }
    // console.log('user');
    // console.log(user);
    this.addUser(user);
  }
}

export default UserStore;
