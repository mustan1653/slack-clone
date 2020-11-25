import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC9652vR-wQqdK0MPSIuhHwcfdyX0LKmi8",
  authDomain: "slack-clone-99e8d.firebaseapp.com",
  databaseURL: "https://slack-clone-99e8d.firebaseio.com",
  projectId: "slack-clone-99e8d",
  storageBucket: "slack-clone-99e8d.appspot.com",
  messagingSenderId: "177119769484",
  appId: "1:177119769484:web:cfc3ec8dbfedb254ec1ca9",
  measurementId: "G-78YMX5CW27",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;