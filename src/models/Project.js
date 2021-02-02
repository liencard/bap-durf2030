import { makeObservable, observable, action } from 'mobx';

class Project {
  constructor({
    about,
    fundingAmount,
    fundingDescription,
    fundingRequired,
    categories,
    city,
    contact,
    description,
    image,
    intro,
    isKnownPlace,
    materials,
    materialsDescription,
    materialsRequired,
    number,
    owners,
    services,
    servicesDescription,
    servicesRequired,
    street,
    themes,
    title,

    id,
    userId,
    store,
  }) {
    // if (!store) {
    //   throw new Error('voorzie een store');
    // }
    this.about = about;
    this.fundingAmount = fundingAmount;
    this.fundingDescription = fundingDescription;
    this.fundingRequired = fundingRequired;
    this.categories = categories;
    this.city = city;
    this.contact = contact;
    this.description = description;
    this.image = image;
    this.intro = intro;
    this.isKnownPlace = isKnownPlace;
    this.materials = materials;
    this.materialsDescription = materialsDescription;
    this.materialsRequired = materialsRequired;
    this.number = number;
    this.owners = owners;
    this.services = services;
    this.servicesDescription = servicesDescription;
    this.servicesRequired = servicesRequired;
    this.street = street;
    this.themes = themes;
    this.title = title;

    this.id = id;
    this.userId = userId;
    this.likes = [];
    this.liked = false;
    this.comments = [];

    if (store) {
      this.store = store;
      this.store.addProject(this);
    }

    makeObservable(this, {
      likes: observable,
      liked: observable,
      comments: observable,
      linkComment: action,
      getLikes: action,
      addLike: action,
      removeLike: action,
      setLiked: action,
      title: observable,
      intro: observable,
      description: observable,
      updateProject: action,
    });
  }

  getComments() {
    this.store.loadProjectCommentsById(this.id);
  }

  getLikes = async () => {
    const likes = await this.store.loadProjectLikesById(this.id);
    this.likes = likes;
  };

  setLiked = (bool) => {
    this.liked = bool;
  };

  addLike = (userId) => {
    this.store.addLikeToProject(this.id, userId);
    this.likes.push({ userId: userId });
    this.setLiked(true);
  };

  removeLike = (userId) => {
    this.store.removeLikeFromProject(this.id, userId);

    this.likes = this.likes.filter((like) => {
      return like.userId !== userId;
    });

    this.setLiked(false);
  };

  linkComment(comment) {
    !this.comments.includes(comment) && this.comments.push(comment);
  }

  updateProject(newValues) {
    Object.keys(newValues).forEach((key) => {
      this[key] = newValues[key];
    });
    this.store.updateProject(this);
  }
}

// Server side rendering of detail page, convert data
const convertData = {
  toJSON(project) {
    // let projectData = {};
    // Object.keys(project).forEach((key) => {
    //   if (key !== 'store') {
    //     projectData[key] = project[key];
    //   }
    // });

    // return projectData;
    return {
      id: project.id,
      title: project.title,
      intro: project.intro,
      about: project.about,
      contact: project.contact,
      description: project.description,
      isKnownPlace: project.isKnownPlace,
      city: project.city,
      street: project.street,
      number: project.number,
    };
  },

  fromJSON(project, store) {
    // Over alle project keys lopen en gelijkstellen
    // Minder kans om iets te vergeten
    let projectData = {};
    Object.keys(project).forEach((key) => {
      projectData[key] = project[key];
    });
    projectData['store'] = store;
    return new Project(projectData);    
      {/* 
    return new Project({
      id: project.id,
      title: project.title,
      intro: project.intro,
      about: project.about,
      contact: project.contact,
      description: project.description,
      isKnownPlace: project.isKnownPlace,
      city: project.city,
      street: project.street,
      number: project.number,
      owners: project.owners,

      store: store,
    }); */ }
  },
};

// From and to firebase data
const projectConverter = {
  toFirestore: function (project) {
    // left DB naam, right Model naam
    return {
      about: project.about,
      categories: project.categories,
      contact: project.contact,
      description: project.description,
      intro: project.intro,
      location: {
        isKnownPlace: project.isKnownPlace,
        city: project.city,
        street: project.street,
        number: project.number,
      },
      themes: project.themes,
      title: project.title,
      userId: project.userId,
      state: 0,
      // timestamp: project.timestamp,
    };
  },
  fromFirestore: function (snapshot, options) {
    const data = snapshot.data(options);
    return {
      id: snapshot.id,
      title: data.title,
      intro: data.intro,
      about: data.about,
      contact: data.contact,
      description: data.description,
      userId: data.userId,
      isKnownPlace: data.location.isKnownPlace,
      city: data.location.city,
      street: data.location.street,
      number: data.location.number,
      state: data.state,
      themes: data.themes,
      categories: data.categories,
    };
  },
};

export { projectConverter, convertData };

export default Project;
