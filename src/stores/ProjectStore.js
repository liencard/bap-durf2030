import { makeObservable, observable, action } from 'mobx';
import ProjectService from '../services/ProjectService';
import RequirementService from '../services/RequirementService';
import { getCurrenTimeStamp } from './';
import Project from '../models/Project';
import { v4 } from 'uuid';

class ProjectStore {
  constructor(rootStore) {
    this.rootStore = rootStore;
    this.projects = [];
    this.projectService = new ProjectService({
      firebase: this.rootStore.firebase,
    });
    this.requirementService = new RequirementService({
      firebase: this.rootStore.firebase,
    });

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
    return project;
  };

  createProject = async (project) => {
    return await this.projectService.create(project);
  };

  createRequirementsForProject = async ({ requirements, info, projectId }) => {
    if (info.materialsRequired) {
      this.requirementService.createMaterials(
        requirements.materials,
        projectId
      );
    }
    if (info.servicesRequired) {
      this.requirementService.createServices(requirements.services, projectId);
    }
    this.requirementService.createInfo(info, projectId);
  };

  createImageForProject = async (image) => {
    // to do linken
  };

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
        title: json.title,
        userId: json.userId,
        intro: json.intro,
        state: json.state,
        store: this.rootStore.projectStore,
      });
    }
  };

  loadProjectLikesById = (id) => {
    return this.projectService.getLikesById(id);
  };

  loadProjectOwnersById = async (id) => {
    return await this.projectService.getOwners(id);
  };

  loadRequirementListById = async (id) => {
    return await this.requirementService.getList(id);
  };

  loadProjectCommentsById = async (id) => {
    return await this.projectService.getComments(id, this.onCommentChanged);
  };

  sendComment = async (comment) => {
    comment.timestamp = getCurrenTimeStamp();
    return await this.projectService.createComment(comment);
  };

  onCommentChanged = (comment) => {
    const project = this.getProjectById(comment.project.id);
    project.linkComment(comment);
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
