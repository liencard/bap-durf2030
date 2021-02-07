import firebase from 'firebase/app';
import UiStore from './UiStore';
import UserStore from './UserStore';
import ProjectStore from './ProjectStore';

class RootStore {
  constructor() {
    this.firebase = this.getFirebase();
    this.userStore = new UserStore(this);
    this.projectStore = new ProjectStore(this);
    this.uiStore = new UiStore(this);
  }

  getFirebase = () => {
    const config = {
      apiKey: process.env.NEXT_PUBLIC_DB_API_KEY,
      authDomain: process.env.NEXT_PUBLIC_DB_AUTH_DOMAIN,
      projectId: process.env.NEXT_PUBLIC_DB_PROJECT_ID,
      storageBucket: process.env.NEXT_PUBLIC_DB_STORAGE_BUCKET,
      messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
      appId: process.env.NEXT_PUBLIC_DB_APP_ID,
    };

    return !firebase.apps.length ? firebase.initializeApp(config) : firebase.app();
  };
}

const getCurrenTimeStamp = () => {
  return firebase.firestore.Timestamp.now();
};

const getArrayUnion = (newElement) => {
  return firebase.firestore.FieldValue.arrayUnion(newElement);
};

const removeFromArray = (element) => {
  return firebase.firestore.FieldValue.arrayRemove(element);
};

export { getCurrenTimeStamp, getArrayUnion, removeFromArray };

export default RootStore;
