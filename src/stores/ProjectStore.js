import { makeObservable, observable, action } from 'mobx';
import ProjectService from '../services/ProjectService';
import Project from '../models/Project';
import { v4 } from 'uuid';

class ProjectStore {
  constructor(rootStore) {
    this.rootStore = rootStore;
    this.projects = [];
    this.projectService = new ProjectService({
      firebase: this.rootStore.firebase,
    });

    // TO DO: Enkel bij 'Projects' pagina of SSR
    this.loadAllProjects();

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

  resolveProject = (id) => this.projects.find((project) => project.id === id);

  // Front-end
  // getProjectById = (id) => this.projects.find((project) => project.id === id);

  //   empty() {
  //     this.projects = [];
  //   }

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
        store: this.rootStore.projectStore,
      });
    }
  }
}

export default ProjectStore;
