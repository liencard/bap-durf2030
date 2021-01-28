import { makeObservable, observable, action } from 'mobx';
import ProjectService from '../services/ProjectService';
import UserService from '../services/UserService';
import Project from '../models/Project';
import { v4 } from 'uuid';

class ProjectStore {
  constructor(rootStore) {
    this.rootStore = rootStore;
    this.projects = [];
    this.projectService = new ProjectService({
      firebase: this.rootStore.firebase,
    });
    this.userService = new UserService(this.rootStore.firebase);

    // TO DO: Enkel bij 'Projects' pagina of SSR
    //this.loadAllProjects();

    makeObservable(this, {
      loadAllProjects: action,
      loadProject: action,
      projects: observable,
    });
  }

  addProject = (project) => {
    this.projects.push(project);
  };

  loadProject = async (id) => {
    const jsonProject = await this.projectService.getById(id);
    this.updateProjectFromServer(jsonProject);
    return this.resolveProject(id);
  };

  createProject = async (project) => {
    return await this.projectService.create(project);
  };

  createImageForProject = async (image) => {
    // return await this.
  };

  resolveProject = (id) => this.projects.find((project) => project.id === id);

  // Front-end
  getProjectById = (id) => this.projects.find((project) => project.id === id);

  //   empty() {
  //     this.projects = [];
  //   }

  getProjectsForUser = async () => {
    const projectArr = await this.userService.getProjectsByUser(
      this.rootStore.uiStore.currentUser
    );
    projectArr.forEach(this.addProject);
  };

  loadAllProjects = async () => {
    const jsonProjects = await this.projectService.getAll();
    jsonProjects.forEach((json) => this.updateProjectFromServer(json));
  };

  updateProjectFromServer(json) {
    let project = this.projects.find((project) => project.id === json.id);
    if (!project) {
      project = new Project({
        id: json.id,
        title: json.data.title,
        userId: json.data.userId,
        intro: json.data.intro,
        tags: json.data.tags,
        state: json.data.state,
        store: this.rootStore.projectStore,
      });
    }
  }

  updateState = async (data) => {
    return await this.projectService.updateState(data);
  };

  uploadImage = (image) => {
    this.projectService.uploadImage(image.file, image.name, 'testid');
  };
}

export default ProjectStore;
