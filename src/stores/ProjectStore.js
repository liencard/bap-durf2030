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
    // jsonProjects.forEach((json) => this.updateProjectFromServer(json));
  };

  updateProjectFromServer(json) {
    let project = this.projects.find((project) => project.id === json.id);
    if (!project) {
      let project = new Project({
        id: json.id,
        store: this.rootStore.projectStore,
      });
      if (json.isDeleted) {
        this.projects.remove(project);
      } else {
        // project.updateFromJson(json);
      }
      return group;
    }
  }
}

export default ProjectStore;
