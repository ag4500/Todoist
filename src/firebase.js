
import firebase from "firebase/compat/app"
import 'firebase/compat/firestore'
const firebaseConfig = {
  apiKey: "AIzaSyCxeeQEpot7xuF3D6Pm3GZ1DrzDIDuzAPg",
  authDomain: "todoist-52da4.firebaseapp.com",
  databaseURL: "https://todoist-52da4-default-rtdb.firebaseio.com",
  projectId: "todoist-52da4",
  storageBucket: "todoist-52da4.appspot.com",
  messagingSenderId: "250488669958",
  appId: "1:250488669958:web:cc7ace0d28e167d4684087",
  measurementId: "G-8TCK1XPLZP"
};

const FireBase = firebase.initializeApp(firebaseConfig);
export default FireBase;
