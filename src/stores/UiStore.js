import { makeObservable, observable, action } from 'mobx';
import AuthService from '../services/AuthService';
import UserService from '../services/UserService';
import User from '../models/User';
import { getReadableDate } from './';

class UiStore {
  constructor(rootStore) {
    this.rootStore = rootStore;
    this.currentUser = undefined;
    this.userProjects = [];
    this.notifications = [];

    // {
    //   type: 'badge',
    //   timestamp: '09:11',
    //   read: false,
    //   info: {
    //     badge: 'liker',
    //     image: '/badges-awards/l1.png',
    //     level: 2,
    //     tag: 'Dank je wel om actief andere projecten te steunen.',
    //   },
    // },

    this.userLikedProjects = [];
    this.authService = new AuthService(this.rootStore.firebase, this.onAuthStateChanged);
    this.userService = new UserService(this.rootStore.firebase);

    makeObservable(this, {
      currentUser: observable,
      setCurrentUser: action,
      onAuthStateChanged: action,
      userProjects: observable,
      userLikedProjects: observable,
      getProjectsForUser: action,
      getLikedProjectsByUser: action,
      addProject: action,
      addLikedProject: action,
      notifications: observable,
      setNotificationsAsRead: action,
    });
  }

  addProject = (project) => {
    this.userProjects.push(project);
  };

  addLikedProject = (project) => {
    project.timestamp = '';
    this.userLikedProjects.push(project);

    // Create liker badges
    // if (this.userLikedProjects.length > 4) {
    //   let badges = [...this.currentUser.badges];
    //   badges.push({ img: 'img url hier', name: 'Liker', level: 2 });
    //   this.rootStore.userStore.updateBadges(badges, this.currentUser.email);
    // } else if (this.userLikedProjects.length > 0) {
    //   let badges = [...this.currentUser.badges];
    //   badges.push({ img: 'img url hier', name: 'Liker', level: 1 });
    //   this.rootStore.userStore.updateBadges(badges, this.currentUser.email);
    // }
  };

  onAuthStateChanged = (user) => {
    if (user) {
      if (!this.currentUser) {
        this.setCurrentUser(user.email);
      }
    } else {
      this.currentUser = null;
    }
  };

  setCurrentUser = async (email) => {
    this.userService.getUserByEmail(email).then(
      action('fetchSuccess', (user) => {
        this.currentUser = user;
        this.notifications = [...user.notifications];
      })
    );
  };

  setNotificationsAsRead = () => {
    let updateIsRequired = false;

    // Mark all notifications as read, check if update is required (avoid unnecessary call)
    this.notifications = this.notifications.map((notification) => {
      if (notification.read === false) {
        notification.read = true;
        updateIsRequired = true;
      }
      return notification;
    });

    updateIsRequired && this.rootStore.userStore.updateNotifications(this.notifications, this.currentUser.email);
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
    const result = await this.authService.register(user.name, user.email, user.password, user.avatar);
    const newRegisteredUser = new User({
      id: result.uid,
      name: result.displayName,
      avatar: result.photoURL,
      store: this.rootStore.userStore,
      email: result.email,
      admin: user.admin,
      organisation: user.organisation,
    });
    if (result) {
      this.rootStore.userStore.createUser(newRegisteredUser);
    }
    return result;
  };

  getProjectsForUser = async () => {
    if (this.userProjects.length === 0) {
      const projectArr = await this.rootStore.projectStore.projectService.getProjectsForUser(this.currentUser.id);
      projectArr.forEach(async (projectId) => {
        const json = await this.rootStore.projectStore.projectService.getById(projectId);
        const project = await this.rootStore.projectStore.updateProjectFromServer(json);
        project.getLikes();
        project.getDurvers();
        project.getRequirementsInfo();
        this.addProject(project);
      });
    }
  };

  getLikedProjectsByUser = async () => {
    if (this.userLikedProjects.length === 0) {
      const projectArr = await this.rootStore.projectStore.projectService.getLikedProjectsByUser(this.currentUser.id);
      projectArr.forEach(async (projectId) => {
        const json = await this.rootStore.projectStore.projectService.getById(projectId);
        const project = await this.rootStore.projectStore.updateProjectFromServer(json);
        project.getLikes();
        project.getDurvers();
        project.getRequirementsInfo();
        await this.addLikedProject(project);
      });
    }
  };
}

export default UiStore;
