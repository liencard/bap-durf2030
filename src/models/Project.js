import { v4 } from 'uuid';

class Project {
  constructor({ userId, title, store }) {
    // this.id = id;
    this.userId = userId;
    this.title = title;

    if (!store) {
      throw new Error('voorzie een store');
    }

    this.store = store;
    this.store.addProject(this);
  }
}

export default Project;
