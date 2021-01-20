import { v4 } from 'uuid';

class Project {
  constructor({ userId, title, store, intro }) {
    if (!store) {
      throw new Error('voorzie een store');
    }

    this.userId = userId;
    this.title = title;
    this.intro = intro;

    this.store = store;
    this.store.addProject(this);
  }
}

export default Project;
