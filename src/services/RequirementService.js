import 'firebase/firestore';
import { listConverter } from '../models/List';

class RequirementService {
  constructor({ firebase }) {
    this.db = firebase.firestore();
  }

  createMaterials = async (materials, projectId) => {
    materials.forEach((material) => {
      this.db
        .collection('requirements')
        .doc(projectId)
        .collection('list')
        .doc()
        .set({
          amount: material.amount,
          category: material.category,
          name: material.name,
          completed: false,
          type: 'material',
        });
    });
  };

  createServices = async (services, projectId) => {
    services.forEach((service) => {
      this.db
        .collection('requirements')
        .doc(projectId)
        .collection('list')
        .doc()
        .set({
          amount: service.amount,
          category: service.category,
          name: service.name,
          completed: false,
          type: 'service',
        });
    });
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
}

export default RequirementService;
