class List {
  constructor({ id, amount, category, completed, name, type }) {
    this.id = id;
    this.amount = amount;
    this.category = category;
    this.completed = completed;
    this.name = name;
    this.type = type;
  }
}

const listConverter = {
  toFirestore: function (list) {
    return {
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
    return new List({
      id: snapshot.id,
      amount: data.amount,
      category: data.category,
      completed: data.completed,
      name: data.name,
      type: data.type,
    });
  },
};

export { listConverter };

export default List;
