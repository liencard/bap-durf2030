import { makeObservable, observable, action } from 'mobx';

class Project {
  constructor({
    about,
    budget,
    budgetDescription,
    budgetRequirement,
    categories,
    city,
    cocreators,
    contact,
    description,
    image,
    intro,
    isKnownPlace,
    materials,
    materialsDescription,
    materialsRequirement,
    number,
    services,
    servicesDescription,
    servicesRequirement,
    street,
    themes,
    title,

    id,
    userId,
    store,
    likes,
  }) {
    // if (!store) {
    //   throw new Error('voorzie een store');
    // }
    this.about = about;
    this.budget = budget;
    this.budgetDescription = budgetDescription;
    this.budgetRequirement = budgetRequirement;
    this.categories = categories;
    this.city = city;
    this.cocreators = cocreators;
    this.contact = contact;

    this.description = description;
    this.image = image;
    this.intro = intro;
    this.isKnownPlace = isKnownPlace;
    this.materials = materials;
    this.materialsDescription = materialsDescription;
    this.materialsRequirement = materialsRequirement;
    this.number = number;
    this.services = services;
    this.servicesDescription = servicesDescription;
    this.servicesRequirement = servicesRequirement;
    this.street = street;
    this.themes = themes;
    this.title = title;

    this.id = id;
    this.userId = userId;
    this.likes = [];

    if (store) {
      this.store = store;
      this.store.addProject(this);
    }

    makeObservable(this, {
      likes: observable,
    });
  }
}

const projectConverter = {
  toFirestore: function (project) {
    // left DB naam, right Model naam
    return {
      about: project.about,
      // budget: {
      //   required: data.budgetRequirement,
      //   amount: data.budget,
      //   info: data.budgetDescription,
      // },
      categories: project.categories,
      // contact: values.contact,
      description: project.description,
      intro: project.intro,
      location: {
        isKnownPlace: project.isKnownPlace,
        city: project.city,
        street: project.street,
        number: project.number,
      },
      // materials: {},
      // services: {},
      themes: project.themes,
      title: project.title,

      userId: project.userId,
    };
  },
  fromFirestore: function (snapshot, options) {
    const data = snapshot.data(options);
    return new Project({
      id: snapshot.id,
      title: data.title,
      intro: data.intro,
      userId: data.userId,
      state: data.state,
    });
  },
};

export { projectConverter };

export default Project;
