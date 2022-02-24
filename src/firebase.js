import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/storage';
import 'firebase/compat/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC74nStJhEnKAfwIi0DeO21mPtN2O76nf8",
    authDomain: "reels-f05eb.firebaseapp.com",
    projectId: "reels-f05eb",
    storageBucket: "reels-f05eb.appspot.com",
    messagingSenderId: "171897669922",
    appId: "1:171897669922:web:7442e874fffbd3f35a3d7b"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Same till here ----------------------------------------------------

export const auth = firebase.auth();

const firestore = firebase.firestore();
export const database = {
  users: firestore.collection('users'),
  posts: firestore.collection('posts'),
  comments : firestore.collection('comments'),
  getTimeStamp: firebase.firestore.FieldValue.serverTimestamp,
}

export const storage = firebase.storage()