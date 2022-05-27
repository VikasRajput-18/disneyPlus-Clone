
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCcdBhVpQo0T-4r8RkpNLcm1QIfejVXhVU",
  authDomain: "disneyplus-clone-ab387.firebaseapp.com",
  projectId: "disneyplus-clone-ab387",
  storageBucket: "disneyplus-clone-ab387.appspot.com",
  messagingSenderId: "548467705044",
  appId: "1:548467705044:web:bf40ef382ca1e3e3fd2741",
  measurementId: "G-M2PCYWKPH4",
};


const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
