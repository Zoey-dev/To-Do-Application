import firebase from 'firebase/app';
import 'firebase/auth';

var firebaseConfig = {
    apiKey: "AIzaSyBKmsT9VqSzGtQAuTQNsAAFOU8lZtqSiMI",
    authDomain: "todo-app-467e7.firebaseapp.com",
    projectId: "todo-app-467e7",
    storageBucket: "todo-app-467e7.appspot.com",
    messagingSenderId: "458309188318",
    appId: "1:458309188318:web:caacd47e5fe5521b71604f"
  };
  // Initialize Firebase
  !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app()
  // firebase.firestore().settings({ timestampsInSnapshots: true})
  const auth = firebase.auth;




  export async function signUpWithEmailAndPassword(email,password){
    let userCredentials = await auth().createUserWithEmailAndPassword(email, password);
    console.log(userCredentials.user.uid);
  }
  export async function signInWithEmailAndPassword(email,password){
    let userCredentials = await auth().signInWithEmailAndPassword(email, password);
    console.log(userCredentials.user.uid);
  }
  export async function sendPasswordResetEmail(email ){
    let userCredentials = await auth().sendPasswordResetEmail(email);
    console.log(userCredentials.user.uid);
  }
  

export {auth, firebase as default}