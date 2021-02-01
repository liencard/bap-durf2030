import { v4 } from 'uuid';
import Project from './Project';

class List {
  constructor({ id = v4(), amount, category, completed, name, type, project }) {
    this.id = id;
    this.amount = amount;
    this.category = category;
    this.completed = completed;
    this.name = name;
    this.type = type;
    this.project = project;
  }
}

const listConverter = {
  toFirestore: function (list) {
    return {
      projectId: list.project.id,
      amount: list.amount,
      category: list.category,
      completed: list.completed,
      name: list.name,
      type: list.type,
      id: list.id,
    };
  },
  fromFirestore: function (snapshot, options) {
    const data = snapshot.data(options);
    const parentGroup = snapshot.ref.parent.parent;
    const project = new Project({ id: parentGroup.id });
    return new List({
      id: data.id,
      amount: data.amount,
      category: data.category,
      completed: data.completed,
      name: data.name,
      type: data.type,
      project: project,
    });
  },
};

export { listConverter };

export default List;
