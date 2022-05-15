import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore/lite';
import { getAuth, User } from 'firebase/auth';
import { UserOperation } from './reducer';

const firebaseConfig = {
  apiKey: 'AIzaSyCvDpYoyRGTzhoFVrg-rsjtoV2lL1uuSsE',
  authDomain: 'react-amazn-clone-5b4b8.firebaseapp.com',
  projectId: 'react-amazn-clone-5b4b8',
  storageBucket: 'react-amazn-clone-5b4b8.appspot.com',
  messagingSenderId: '365659310683',
  appId: '1:365659310683:web:15197c0cee8ca6f02a8d7e',
};

export interface UserAction {
  type: UserOperation;
  user?: User;
}

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export { db, auth };
