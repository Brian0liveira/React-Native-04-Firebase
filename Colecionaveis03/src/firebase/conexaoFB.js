import firebase from 'firebase';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDGsX7pBD_-R4PaL3JX9h5Ms4WvIXbGizM",
    authDomain: "colecionaveisfb-9e723.firebaseapp.com",
    databaseURL: "https://colecionaveisfb-9e723.firebaseio.com",
    projectId: "colecionaveisfb-9e723",
    storageBucket: "colecionaveisfb-9e723.appspot.com",
    messagingSenderId: "1059087900850",
    appId: "1:1059087900850:web:47c93d91efbc63e2c129ab",
    measurementId: "G-16W55252WF"
  };
  
  var app = firebase.initializeApp(firebaseConfig);

  export const  conexaoFS = app.fireStore();
  