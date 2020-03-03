import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyDtceUVNnPTen6R-lYJ9loL56eEHY85F-g',
  authDomain: 'lejedb.firebaseapp.com',
  databaseURL: 'https://lejedb.firebaseio.com',
  projectId: 'lejedb',
  storageBucket: 'lejedb.appspot.com',
  messagingSenderId: '330398011548',
  appId: '1:330398011548:web:c32bbf31bd47ca66f35d59',
  measurementId: 'G-N0G2L4FK5Y'
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
