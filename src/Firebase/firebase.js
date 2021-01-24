import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

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


  const auth = firebase.auth;
  const firestore = firebase.firestore();

  export async function  addToStore(collection,data, id) {
    if(id){
      await firestore.collection(collection).doc(id).set(data)
      return id;
    }else{
      const dataRef = await firestore.collection(collection).add(data)
      return dataRef.id
    }
  }

  export async function  getFromStore(collection, id) {
    
      const doc = await firestore.collection(collection).doc(id).get()
      if(doc.exists){
        return doc.data();
      }
      return null;
    
  }

  export async function signUpWithEmailAndPassword(email,password){
    let userCredentials = await auth().createUserWithEmailAndPassword(email, password);
    return userCredentials.user.uid;
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