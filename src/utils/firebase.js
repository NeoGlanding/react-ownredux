import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCbOD-VZ28esMdKSrNP_T15Tx3k4hfO08M",
    authDomain: "just-testing-7a6c2.firebaseapp.com",
    projectId: "just-testing-7a6c2",
    storageBucket: "just-testing-7a6c2.appspot.com",
    messagingSenderId: "34166728455",
    appId: "1:34166728455:web:7332ce3c4c62ba6d3f47a2",
    measurementId: "G-FQN5KFJN1X"
};

firebase.initializeApp(firebaseConfig);

export default firebase;