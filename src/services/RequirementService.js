import 'firebase/firestore';
// import { projectConverter } from '../models/Project';

class RequirementService {
  constructor({ firebase }) {
    this.db = firebase.firestore();
  }

  createMaterials = async (materials, projectId) => {
    const data = materials.map((material) => {
      return await this.db.collection('requirements').doc(projectId).collection('materials').set({
        amount: material.amount,
        category: material.category,
        name: materials.name,
        required: true,
      });
    })
  };
}

export default RequirementService;
