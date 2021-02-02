import 'firebase/firestore';
import { listConverter } from '../models/List';

class RequirementService {
  constructor({ firebase }) {
    this.db = firebase.firestore();
  }

  createItems = async (items, projectId, type) => {
    items.forEach((item) => {
      this.db.collection('requirements').doc(projectId).collection('list').doc().set({
        amount: item.amount,
        category: item.category,
        name: item.name,
        completed: false,
        type: type,
      });
    });
  };

  createItem = async (item, projectId, type) => {
    this.db.collection('requirements').doc(projectId).collection('list').doc().set({
      amount: item.amount,
      category: item.category,
      name: item.name,
      completed: false,
      type: type,
    });
  };

  updateItem = async (item, itemId, projectId) => {
    this.db.collection('requirements').doc(projectId).collection('list').doc(itemId).update({
      amount: item.amount,
      completed: false,
    });
  };

  deleteItem = async (itemId, projectId) => {
    this.db.collection('requirements').doc(projectId).collection('list').doc(itemId).delete();
  };

  createInfo = async (info, projectId) => {
    this.db
      .collection('requirements')
      .doc(projectId)
      .set({
        materialsDetails: {
          required: info.materialsRequired,
          description: info.materialsDescription,
        },
        servicesDetails: {
          required: info.servicesRequired,
          description: info.servicesDescription,
        },
        fundingDetails: {
          required: info.fundingRequired,
          fundingAmount: info.fundingAmount,
          fundingDescription: info.fundingDescription,
        },
      });
  };

  getList = async (projectId) => {
    const snapshot = await this.db
      .collection('requirements')
      .doc(projectId)
      .collection('list')
      .withConverter(listConverter)
      .get();
    const result = snapshot.docs.map((list) => list.data());
    return result;
  };

  getListInfo = async (projectId) => {
    const snapshot = await this.db.collection('requirements').doc(projectId).get();
    return snapshot.data();
  };
}

export default RequirementService;
