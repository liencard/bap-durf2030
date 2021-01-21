import { v4 } from 'uuid';

class Project {
  constructor({ userId, id, title, store, intro, tags }) {
    if (!store) {
      throw new Error('voorzie een store');
    }
    this.getAssignedTags(tags);
    this.id = id;
    this.userId = userId;
    this.title = title;
    this.intro = intro;
    this.tags = [];
    this.store = store;
    this.store.addProject(this);
  }

  getAssignedTags(tags) {
    // console.log(tags);
    // tags.forEach((tag) => {
    //   console.log(tag);
    // });
  }
}

export default Project;
