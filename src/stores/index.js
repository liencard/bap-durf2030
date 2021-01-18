import firebase from 'firebase/app';
// import * as firebase from 'firebase/app';
import UiStore from './UiStore';
import UserStore from './UserStore';

class RootStore {
  constructor() {
    // var firebaseConfig = {
    //   apiKey: process.env.REACT_APP_apiKey,
    //   authDomain: process.env.REACT_APP_authDomain,
    //   projectId: process.env.REACT_APP_projectId,
    //   storageBucket: process.env.REACT_APP_storageBucket,
    //   messagingSenderId: process.env.REACT_APP_messagingSenderId,
    //   appId: process.env.REACT_APP_appId,
    // };

    var firebaseConfig = {
      apiKey: 'AIzaSyB-b87pd9Rk1NHyzE08yJIyyR1-0W7i21o',
      authDomain: 'durf2030-b7dd8.firebaseapp.com',
      projectId: 'durf2030-b7dd8',
      storageBucket: 'durf2030-b7dd8.appspot.com',
      messagingSenderId: '757316438339',
      appId: '1:757316438339:web:2a1f4543a7c34a381847f6',
    };

    // Initialize Firebase
    // FirebaseError: Firebase: Firebase App named '[DEFAULT]' already exists (app/duplicate-app). -> if functie gedaan
    if (!firebase.apps.length) {
      this.firebase = firebase.initializeApp(firebaseConfig);
    } else {
      this.firebase = firebase.app();
    }
    // this.firebase = firebase.initializeApp(firebaseConfig);

    this.userStore = new UserStore(this);
    this.uiStore = new UiStore(this);
  }
}

export default RootStore;
