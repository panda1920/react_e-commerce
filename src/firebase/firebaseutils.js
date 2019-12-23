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

export async function createUserProfileDocument(userAuth, additionalData) {
  if (!userAuth) return;

  let userRef = firestore.doc(`users/${userAuth.uid}`);
  let snapshot = await userRef.get();

  if (!snapshot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName, email, createdAt, ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
}

export async function addCollectionAndDocuments(collectionKey, objectsToAdd) {
  const collectionRef = firestore.collection(collectionKey);

  const batch = firestore.batch();
  objectsToAdd.forEach(obj => {
    const newDocRef = collectionRef.doc()
    batch.set(newDocRef, obj);
  });

  await batch.commit();
}

export function convertCollectionSnapshotToMap(snapshot) {
  const transformedCollection = snapshot.docs.map(doc => {
    const { title, items } = doc.data();

    return {
      routeName: encodeURI( title.toLowerCase() ),
      id: doc.id,
      title,
      items
    };
  });

  return transformedCollection.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  }, {});
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' } );
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase; 