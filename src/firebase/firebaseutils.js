import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyCqeXR3qEUXfxgsfO3RQ284wrP_UqBt_UI",
  authDomain: "crwn-db-58082.firebaseapp.com",
  databaseURL: "https://crwn-db-58082.firebaseio.com",
  projectId: "crwn-db-58082",
  storageBucket: "crwn-db-58082.appspot.com",
  messagingSenderId: "599570990831",
  appId: "1:599570990831:web:4e4c640270fcfa6aa1bd1a",
  measurementId: "G-M2R4EKSDDN"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'} );
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase; 