import 'firebase/auth';

class AuthService {
  constructor(firebase, onAuthStateChanged) {
    this.auth = firebase.auth();
    this.auth.onAuthStateChanged((user) => onAuthStateChanged(user));
  }

  login = async (email, password) => {
    try {
      const result = await this.auth.signInWithEmailAndPassword(email, password);
      // indien gelukt sturen we resultaat terug ( = firebase user)
      return result;
    } catch (error) {
      // indien error sturen we code terug
      return error.code;
    }
  };

  logout = async () => {
    try {
      const result = await this.auth.signOut();
      return result;
    } catch (error) {
      return error.code;
    }
  };

  register = async (name, email, password, avatar) => {
    try {
      const userCredential = await this.auth.createUserWithEmailAndPassword(email, password);
      if (userCredential) {
        try {
          // try catch, stell dat de update mislukt, er gebeurt een foutje bij het updaten vh profiel
          await userCredential.user.updateProfile({
            displayName: name,
            photoURL: avatar,
          });
          return userCredential.user;
        } catch (error) {
          return error.code;
        }
      }
    } catch (error) {
      return error.code;
    }
  };
}

export default AuthService;
