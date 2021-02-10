import { makeObservable, observable, action } from 'mobx';
import UserService from '../services/UserService';
import User from '../models/User';

class UserStore {
  constructor(rootStore) {
    this.rootStore = rootStore;
    this.users = [];
    this.userService = new UserService(this.rootStore.firebase);

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

  validateUser = (user) => {
    this.loadAllUsers();
    let checkUser = this.users.find(
      (existingUser) => existingUser.email === user.email
    );
    if (!checkUser) {
      console.log('user bestaat niet');
    }
    console.log(user);
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
    let user = this.users.find((user) => user.email === json.email);
    if (!user) {
      user = new User({
        id: json.userId,
        name: json.name,
        email: json.email,
        avatar: json.avatar,
        admin: json.admin,
        awards: json.awards,
        organisation: json.organisation,
        store: this.rootStore.userStore,
      });
    }
    this.addUser(user);
  }
}

export default UserStore;
