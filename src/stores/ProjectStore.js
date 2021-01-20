import { makeObservable, observable, action } from 'mobx';
import ProjectService from '../services/ProjectService';
import Project from '../models/Project';

class ProjectStore {
  constructor(rootStore) {
    this.rootStore = rootStore;
    this.projects = [];
    this.projectService = new ProjectService({
      firebase: this.rootStore.firebase,
    });

    this.loadAllProjects();

    makeObservable(this, {
      loadAllProjects: action,
      projects: observable,
    });
  }

  addProject = (project) => {
    this.projects.push(project);
  };

  // Front-end
  // getProjectById = (id) => this.projects.find((project) => project.id === id);

  //   empty() {
  //     this.projects = [];
  //   }

  loadAllProjects = async () => {
    const jsonProjects = await this.projectService.getAll();
    console.log(jsonProjects);
    jsonProjects.forEach((json) => this.updateProjectFromServer(json));
  };

  updateProjectFromServer(data) {
    let project = this.projects.find((project) => project.id === json.id);
    if (!project) {
      project = new Project({
        title: data.title,
        userId: data.userId,
        intro: data.intro,
        store: this.rootStore.projectStore,
      });
    }
  }
}

export default ProjectStore;
