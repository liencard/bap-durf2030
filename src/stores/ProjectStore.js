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
      loadProjectLikesById: action,
    });
  }

  addProject = (project) => {
    this.projects.push(project);
  };

  loadProject = async (id) => {
    const jsonProject = await this.projectService.getById(id);
    const project = this.updateProjectFromServer(jsonProject);
    return project;
  };

  createProject = async (project) => {
    return await this.projectService.create(project);
  };

  createRequirementsForProject = async ({ requirements, info, projectId }) => {
    if (info.materialsRequired) {
      this.requirementService.createItems(requirements.materials, projectId, 'material');
    }
    if (info.servicesRequired) {
      this.requirementService.createItems(requirements.services, projectId, 'service');
    }
    this.requirementService.createInfo(info, projectId);
  };

  createRequirementItem = (item, projectId, type) => {
    this.requirementService.createItem(item, projectId, type);
  };

  createProjectOwner = (owner, projectId) => {
    this.projectService.createOwner(owner, projectId);
  };

  deleteProjectOwner = (ownerId, projectId) => {
    this.projectService.removeOwner(ownerId, projectId);
  };

  deleteRequirementItem = (itemId, projectId) => {
    this.requirementService.deleteItem(itemId, projectId);
  };

  updateRequirementItem = (item, itemId, projectId) => {
    this.requirementService.updateItem(item, itemId, projectId);
  };

  updateRequirementDetails = (project) => {
    this.requirementService.updateDetails(project);
  };

  createDurver = (durver, projectId) => {
    durver.timestamp = getCurrenTimeStamp();
    this.requirementService.createDurver(durver, projectId);
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
        intro: json.intro,
        about: json.about,
        contact: json.contact,
        description: json.description,
        isKnownPlace: json.isKnownPlace,
        themes: json.themes,
        categories: json.categories,
        city: json.city,
        street: json.street,
        number: json.number,
        userId: json.userId,
        state: json.state,
        store: this.rootStore.projectStore,
      });
    }
    return project;
  };

  loadProjectLikesById = async (id) => {
    return await this.projectService.getLikesById(id);
  };

  loadProjectOwnersById = async (id) => {
    return await this.projectService.getOwners(id);
  };

  loadRequirementListById = async (id) => {
    return await this.requirementService.getList(id);
  };

  loadRequirementListInfoById = async (id) => {
    return await this.requirementService.getListInfo(id);
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
    await this.projectService.updateProject(project);
  };

  uploadImage = (image) => {
    this.projectService.uploadImage(image.file, image.name, 'testid');
  };

  addLikeToProject = (projectId, userId) => {
    this.projectService.addLike(projectId, userId);
  };

  removeLikeFromProject = (projectId, userId) => {
    this.projectService.removeLike(projectId, userId);
  };
}

export default ProjectStore;
