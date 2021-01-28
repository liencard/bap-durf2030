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
    // if (!store) {
    //   throw new Error('voorzie een store');
    // }
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
    //this.store.addProject(this);

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

const projectConverter = {
  toFirestore: function (project) {
    // left DB naam, right Model naam
    return {
      title: project.title,
      intro: project.intro,
      userId: project.userId,
    };
  },
  fromFirestore: function (snapshot, options) {
    const data = snapshot.data(options);
    // left Model naam, right DB naam
    return new Project({
      id: snapshot.id,
      title: data.title,
      intro: data.intro,
      userId: data.userId,
    });
  },
};

export { projectConverter };

export default Project;
