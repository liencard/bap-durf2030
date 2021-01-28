import { makeObservable, observable, action } from 'mobx';

class Project {
  constructor({
    userId,
    id,
    title,
    store,
    intro,
    tags,
    isKnownPlace,
    city,
    street,
    number,
    categories,
    themes,
    description,
    image,
  }) {
    if (!store) {
      throw new Error('voorzie een store');
    }
    this.store = store;
    this.id = id;
    this.userId = userId;
    this.title = title;
    this.intro = intro;
    this.description = description;
    this.isKnownPlace = isKnownPlace;
    this.city = isKnownPlace ? city : 'unknown';
    this.street = isKnownPlace ? street : 'unknown';
    this.number = isKnownPlace ? number : 'unknown';
    this.tags = []; // weg?
    this.themes = themes;
    this.categories = categories;
    this.image = image;
    this.getAssignedTags(tags);
    this.store.addProject(this);

    makeObservable(this, {
      title: observable,
      intro: observable,
      setParam: action,
    });
  }

  getAssignedTags(tags) {
    // console.log(tags);
    // tags.forEach((tag) => {
    //   console.log(tag);
    // });
  }

  setParam = ({ param, value }) => {
    // switch (param) {
    //   case 'title':
    //     this.title = value;
    //     break;
    //   case 'intro':
    //     this.intro = value;
    //     break;
    //   default:
    //     return 'Unknown';
    // }
  };
}

export default Project;
