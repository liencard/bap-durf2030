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

    makeObservable(this, {
      loadAllProjects: action,
      loadProject: action,
      projects: observable,
      updateProject: action,
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
    // to do linken
  };

  resolveProject = (id) => this.projects.find((project) => project.id === id);

  getProjectById = (id) => this.projects.find((project) => project.id === id);

  loadAllProjects = async () => {
    const jsonProjects = await this.projectService.getAll();
    jsonProjects.forEach((json) => this.updateProjectFromServer(json));
  };

  updateProjectFromServer = (json) => {
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
  };

  loadProjectLikesById = async (id) => {
    return await this.projectService.getLikesById(id);
  };

  updateState = async (data) => {
    return await this.projectService.updateState(data);
  };

  updateProject = async (project) => {
    return await this.projectService.updateProject(project);
  };

  uploadImage = (image) => {
    this.projectService.uploadImage(image.file, image.name, 'testid');
  };
}

export default ProjectStore;
