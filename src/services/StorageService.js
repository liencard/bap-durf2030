import 'firebase/firestore';
import { firestore } from 'firebase/app';

class StorageService {
  constructor({ firebase }) {
    this.storage = firebase.storage().ref();
  }

  createImage = (path, name) => {
    // Create a reference to 'mountains.jpg'
    var mountainsRef = storage.child(name);

    // Create a reference to 'images/mountains.jpg'
    // var mountainImagesRef = storage.child(`images/${name}`);

    // While the file names are the same, the references point to different files
    // mountainsRef.name === mountainImagesRef.name; // true
    // mountainsRef.fullPath === mountainImagesRef.fullPath; // false
  };
}

export default StorageService;
