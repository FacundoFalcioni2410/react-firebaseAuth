import firebase from 'firebase';
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyBF-Yx3G424DUdDsMJI2S5RBhwKR8GYIfM",
    authDomain: "fir-auth-dfebd.firebaseapp.com",
    projectId: "fir-auth-dfebd",
    storageBucket: "fir-auth-dfebd.appspot.com",
    messagingSenderId: "946380188601",
    appId: "1:946380188601:web:11417ad9b883e015542468",
    measurementId: "G-RRY221DXFR"
  };
  // Initialize Firebase
  const fire = firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  const auth = fire.auth()

  export {auth};