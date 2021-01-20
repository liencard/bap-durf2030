import firebase from 'firebase/app';
// import * as firebase from 'firebase/app';
import UiStore from './UiStore';
import UserStore from './UserStore';
import ProjectStore from './ProjectStore';

class RootStore {
  constructor() {
    this.firebase = this.getFirebase();
    // var firebaseConfig = {
    //   apiKey: process.env.REACT_APP_apiKey,
    //   authDomain: process.env.REACT_APP_authDomain,
    //   projectId: process.env.REACT_APP_projectId,
    //   storageBucket: process.env.REACT_APP_storageBucket,
    //   messagingSenderId: process.env.REACT_APP_messagingSenderId,
    //   appId: process.env.REACT_APP_appId,
    // };

    this.userStore = new UserStore(this);
    this.projectStore = new ProjectStore(this);
    this.uiStore = new UiStore(this);
  }

  getFirebase = () => {
    const config = {
      apiKey: process.env.DB_API_KEY,
      authDomain: process.env.DB_AUTH_DOMAIN,
      projectId: process.env.DB_PROJECT_ID,
      storageBucket: process.env.DB_STORAGE_BUCKET,
      messagingSenderId: process.env.MESSAGING_SENDER_ID,
      appId: process.env.DB_APP_ID,
    };

    // prevent multiple app inits
    return !firebase.apps.length ? firebase.initializeApp(config) : firebase.app();
  };
}

export default RootStore;
