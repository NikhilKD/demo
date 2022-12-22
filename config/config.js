const firebase = require('firebase/app');
const { 
  getAuth, 
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  sendEmailVerification
 } = require("firebase/auth");

const firestore=require('firebase/firestore');

const firebaseConfig = {
  apiKey: "AIzaSyA0NrL3k15_rk4hQV2Mj1Ejf49GkECuaoQ",
  authDomain: "hideout-de60d.firebaseapp.com",
  projectId: "hideout-de60d",
  storageBucket: "hideout-de60d.appspot.com",
  messagingSenderId: "822673797712",
  appId: "1:822673797712:web:16624f9015f991d74e1755",
  measurementId: "G-NER9QNPQK4"
};

firebase.initializeApp(firebaseConfig);
// const db = firestore.getFirestore(app);
// const User = firestore.collection(db,"Users");
// module.exports ={User,firebase};

const auth = getAuth();

exports.addUser = (email, password) =>
  createUserWithEmailAndPassword(auth, email, password);

exports.authenticate = (email, password) =>
  signInWithEmailAndPassword(auth, email, password);

exports.forgotPassword = (email)=>
  sendPasswordResetEmail(auth,email);

exports.sendEmail=()=>
  sendEmailVerification(auth.currentUser);