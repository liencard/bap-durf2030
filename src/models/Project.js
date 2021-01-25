import { makeObservable, observable, action } from 'mobx';

class Project {
  constructor({ userId, id, title, store, intro, tags, isKnownPlace, city, street, number }) {
    if (!store) {
      throw new Error('voorzie een store');
    }
    this.store = store;
    this.id = id;
    this.userId = userId;
    this.title = title;
    this.intro = intro;
    this.tags = [];
    this.isKnownPlace = isKnownPlace;
    this.city = isKnownPlace ? city : 'Unknown';
    this.street = isKnownPlace ? street : 'Unknown';
    this.number = isKnownPlace ? number : 'Unknown';
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
    switch (param) {
      case 'title':
        this.title = value;
        break;
      case 'intro':
        this.intro = value;
        break;
      default:
        return 'Unknown';
    }
  };
}

export default Project;
