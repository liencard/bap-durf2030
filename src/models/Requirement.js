import { makeObservable, observable, action } from 'mobx';

class Requirement {
  constructor({ projectId, amount, name }) {
    this.projectId = projectId;
    this.amount = amount;
    this.name = name;

    makeObservable(this, {
      amount: observable,
    });
  }
}

const requirementConverter = {
  toFirestore: function (requirement) {
    // left DB naam, right Model naam
    return {
      projectId: material.projectId,
      amount: material.amount,
      name: material.name,
    };
  },
  fromFirestore: function (snapshot, options) {
    const data = snapshot.data(options);
    return new Requirement({
      projectId: data.projectId,
      amount: data.amount,
      name: material.name,
    });
  },
};

export { materialConverter };

export default Requirement;
