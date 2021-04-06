import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyASCAyWYjv0eyk2oqso3ktkgKiPxxSSk8s",
  authDomain: "chatxend.firebaseapp.com",
  projectId: "chatxend",
  storageBucket: "chatxend.appspot.com",
  messagingSenderId: "1007434015095",
  appId: "1:1007434015095:web:f89b22dd4989b7dfe48172",
  measurementId: "G-6JRC88GZ84",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
