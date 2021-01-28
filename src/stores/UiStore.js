import { makeObservable, observable, action } from 'mobx';
import AuthService from '../services/AuthService';
import UserService from '../services/UserService';
import User from '../models/User';

class UiStore {
  constructor(rootStore) {
    this.rootStore = rootStore;
    this.currentUser = undefined;
    this.authService = new AuthService(
      this.rootStore.firebase,
      this.onAuthStateChanged
    );
    this.userService = new UserService(this.rootStore.firebase);

    makeObservable(this, {
      currentUser: observable,
      setCurrentUser: action,
      onAuthStateChanged: action,
    });
  }

  onAuthStateChanged = (user) => {
    if (user) {
      console.log(`de user is ingelogd ${user.email}`);
      console.log(user);

      if (!this.currentUser) {
        this.setCurrentUser(user.email);
        console.log('user ophalen');
        //this.rootStore.projectStore.getProjectsForUser();
      }

      //inlezen van de projecten van de currentuser
    } else {
      console.log(`de user is uitgelogd`);
      this.setCurrentUser(undefined);
    }
  };

  setCurrentUser = async (email) => {
    this.currentUser = await this.userService.getUserByEmail(email);
  };

  loginUser = async (user) => {
    const result = await this.authService.login(user.email, user.password);
    return result;
  };

  logoutUser = async () => {
    const result = await this.authService.logout();
    this.currentUser = undefined;
    return result;
  };

  registerUser = async (user) => {
    const result = await this.authService.register(
      user.name,
      user.email,
      user.password,
      user.avatar
    );
    const newRegisteredUser = new User({
      id: result.uid,
      name: result.displayName,
      avatar: result.photoURL,
      store: this.rootStore.userStore,
      email: result.email,
      admin: false,
    });
    if (result) {
      //user toevoegen aan onze users collection
      this.rootStore.userStore.createUser(newRegisteredUser);
    }
    return result;
  };
}

export default UiStore;
