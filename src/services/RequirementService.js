import 'firebase/firestore';
import { listConverter } from '../models/List';
import { durverConverter } from '../models/Durver';

class RequirementService {
  constructor({ firebase }) {
    this.db = firebase.firestore();
  }

  createItems = (items, projectId, type) => {
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

  createItem = (item, projectId, type) => {
    this.db.collection('requirements').doc(projectId).collection('list').doc().set({
      amount: item.amount,
      category: item.category,
      name: item.name,
      completed: false,
      type: type,
    });
  };

  updateItem = (item, itemId, projectId) => {
    this.db.collection('requirements').doc(projectId).collection('list').doc(itemId).update({
      amount: item.amount,
      completed: false,
    });
  };

  updateDetails = (project) => {
    this.db
      .collection('requirements')
      .doc(project.id)
      .update({
        materialsDetails: {
          required: project.materialsRequired,
          description: project.materialsDescription,
        },
        servicesDetails: {
          required: project.servicesRequired,
          description: project.servicesDescription,
        },
        fundingDetails: {
          required: project.fundingRequired,
          fundingAmount: project.fundingAmount,
          fundingDescription: project.fundingDescription,
        },
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

  createDurver = async (durver, projectId) => {
    this.db
      .collection('requirements')
      .doc(projectId)
      .collection('durvers')
      .doc()
      .withConverter(durverConverter)
      .set(durver);
  };

  getDurvers = async (projectId) => {
    const snapshot = await this.db
      .collection('requirements')
      .doc(projectId)
      .collection('durvers')
      .withConverter(durverConverter)
      .get();
    const result = snapshot.docs.map((durver) => durver.data());
    return result;
  };
}

export default RequirementService;
