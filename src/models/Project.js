import { v4 } from 'uuid';
import { makeObservable, observable, action } from 'mobx';
class Project {
  constructor({ userId, id, title, store, intro, tags, state }) {
    if (!store) {
      throw new Error('voorzie een store');
    }
    this.getAssignedTags(tags);
    this.id = id;
    this.userId = userId;
    this.title = title;
    this.intro = intro;
    this.tags = [];
    this.state = state;
    this.store = store;
    this.store.addProject(this);

    makeObservable(this, {
      state: observable,
      setState: action,
    });
  }

  setState(value) {
    this.state = value;
  }

  getAssignedTags(tags) {
    // console.log(tags);
    // tags.forEach((tag) => {
    //   console.log(tag);
    // });
  }
}

export default Project;
