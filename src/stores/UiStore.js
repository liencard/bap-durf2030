import { makeObservable, observable, action } from 'mobx';
import AuthService from '../services/AuthService';
import UserService from '../services/UserService';
import User from '../models/User';
import Project from '../models/Project';

class UiStore {
  constructor(rootStore) {
    this.rootStore = rootStore;
    this.currentUser = undefined;
    this.userProjects = [];
    this.authService = new AuthService(
      this.rootStore.firebase,
      this.onAuthStateChanged
    );
    this.userService = new UserService(this.rootStore.firebase);

    makeObservable(this, {
      currentUser: observable,
      setCurrentUser: action,
      onAuthStateChanged: action,
      userProjects: observable,
      getProjectsForUser: action,
      addProject: action,
    });
  }

  addProject = (project) => {
    this.userProjects.push(project);
  };

  onAuthStateChanged = (user) => {
    if (user) {
      console.log(`de user is ingelogd ${user.email}`);

      if (!this.currentUser) {
        this.setCurrentUser(user.email);
        console.log('user ophalen');
      }

      //inlezen van de projecten van de currentuser
    } else {
      console.log(`de user is uitgelogd`);
      this.currentUser = null;
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

  getProjectsForUser = async () => {
    const projectArr = await this.rootStore.projectStore.projectService.getProjectsForUser(
      this.currentUser.id
    );

    projectArr.forEach(async (projectId) => {
      const json = await this.rootStore.projectStore.projectService.getById(projectId);
      const project = await this.rootStore.projectStore.updateProjectFromServer(json);
      project.getLikes();
      project.getDurvers();
      await this.addProject(project);
    });
  };
}

export default UiStore;
