import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyD7oABJ1BHALzFEM4GLgmrB1a0h8kOupU0",
    authDomain: "gaftonosh-a09aa.firebaseapp.com",
    projectId: "gaftonosh-a09aa",
    storageBucket: "gaftonosh-a09aa.appspot.com",
    messagingSenderId: "983327648797",
    appId: "1:983327648797:web:b37b8642590348ee81eaf4"
};

firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timeStamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timeStamp };