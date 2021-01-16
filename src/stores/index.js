import firebase from 'firebase/app';
//import * as firebase from 'firebase/app';
import UiStore from './UiStore';
import UserStore from './UserStore';

class RootStore {
  constructor() {
    var firebaseConfig = {
      apiKey: process.env.REACT_APP_apiKey,
      authDomain: process.env.REACT_APP_authDomain,
      projectId: process.env.REACT_APP_projectId,
      storageBucket: process.env.REACT_APP_storageBucket,
      messagingSenderId: process.env.REACT_APP_messagingSenderId,
      appId: process.env.REACT_APP_appId,
    };
    // Initialize Firebase
    this.firebase = firebase.initializeApp(firebaseConfig);

    this.userStore = new UserStore(this);
    this.uiStore = new UiStore(this);
  }
}

export default RootStore;
