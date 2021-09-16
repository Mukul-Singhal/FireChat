import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCnH3r4dQxo2FIGDCXx8SkrGJJ25ueH2i4",
  authDomain: "firechat-1b9a4.firebaseapp.com",
  projectId: "firechat-1b9a4",
  storageBucket: "firechat-1b9a4.appspot.com",
  messagingSenderId: "258580840509",
  appId: "1:258580840509:web:cff6cc059bf878656eaa54",
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage().ref("images");
const audioStorage = firebase.storage().ref("audios");
const createTimestamp = firebase.firestore.FieldValue.serverTimestamp();
const serverTimestamp = firebase.database.ServerValue.TIMESTAMP;

export {
  db,
  auth,
  provider,
  storage,
  audioStorage,
  createTimestamp,
  serverTimestamp,
};
