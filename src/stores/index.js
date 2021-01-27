import firebase from 'firebase/app';
// import * as firebase from 'firebase/app';
import UiStore from './UiStore';
import UserStore from './UserStore';
import ProjectStore from './ProjectStore';

class RootStore {
  constructor() {
    this.firebase = this.getFirebase();
    this.projectStore = new ProjectStore(this);
    this.userStore = new UserStore(this);
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

    // prevent multiple app inits
    return !firebase.apps.length
      ? firebase.initializeApp(config)
      : firebase.app();
  };
}

export default RootStore;
