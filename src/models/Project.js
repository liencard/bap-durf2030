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
    if (!store) {
      throw new Error('voorzie een store');
    }

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
    this.store = store;
    this.likes = [];

    this.store.addProject(this);

    makeObservable(this, {
      likes: observable,
    });
  }
}

export default Project;
