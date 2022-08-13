 
 import { initializeApp } from 'firebase/app';
 import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

 const firebaseConfig = {
    apiKey: "AIzaSyCKtQnEJXikNwv8y7Rb1ZJcsigLhbrpeHQ",
    authDomain: "whatsapp-4b1c6.firebaseapp.com",
    projectId: "whatsapp-4b1c6",
    storageBucket: "whatsapp-4b1c6.appspot.com",
    messagingSenderId: "642142462532",
    appId: "1:642142462532:web:8ba1841ea90daeb2dc1211"
  };

  const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

  const db =app.firestore();
  const auth =app.auth();

  const provider= new firebase.auth.GoogleAuthProvider();

  export{db,auth,provider};