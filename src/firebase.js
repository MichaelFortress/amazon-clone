
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA9aAcfHD0uUo3Qwav-1fT2filxq1Bayzo",
  authDomain: "app-2bfd5.firebaseapp.com",
  projectId: "app-2bfd5",
  storageBucket: "app-2bfd5.appspot.com",
  messagingSenderId: "153209706867",
  appId: "1:153209706867:web:092a1ddc388e299a578d06",
  measurementId: "G-KJ5LTQE1NH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


// //import firebase from "./firebase";

// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyA9aAcfHD0uUo3Qwav-1fT2filxq1Bayzo",
//   authDomain: "app-2bfd5.firebaseapp.com",
//   projectId: "app-2bfd5",
//   storageBucket: "app-2bfd5.appspot.com",
//   messagingSenderId: "153209706867",
//   appId: "1:153209706867:web:2ba7fefb66afd9d0578d06",
//   measurementId: "G-4V7JP2K543"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// export const auth = getAuth(app)

//const firebaseApp = firebase.initializeApp(firebaseConfig);



//const db = firebaseApp.firestore();
//const auth = firebase.auth();

//export  { db, auth };