import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyBKmsT9VqSzGtQAuTQNsAAFOU8lZtqSiMI",
  authDomain: "todo-app-467e7.firebaseapp.com",
  projectId: "todo-app-467e7",
  storageBucket: "todo-app-467e7.appspot.com",
  messagingSenderId: "458309188318",
  appId: "1:458309188318:web:caacd47e5fe5521b71604f",
};
// Initialize Firebase
!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

const auth = firebase.auth;
const firestore = firebase.firestore();

export async function addToStore(collection, data, id) {
  if (id) {
    await firestore.collection(collection).doc(id).set(data);
    return { id, ...data };
  } else {
    const dataRef = await firestore.collection(collection).add(data);
    return { id: dataRef.id, ...data };
  }
}

export async function getFromStore(collection, id) {
  const doc = await firestore.collection(collection).doc(id).get();
  if (doc.exists) {
    return doc.data();
  }
  return null;
}

export async function signUpWithEmailAndPassword(email, password) {
  let userCredentials = await auth().createUserWithEmailAndPassword(
    email,
    password
  );
  return userCredentials.user.uid;
}

export async function signInWithEmailAndPassword(email, password) {
  await auth().signInWithEmailAndPassword(email, password);
}
export async function sendPasswordResetEmail(email) {
  await auth().sendPasswordResetEmail(email);
}

export async function postNewCategory(category) {
  const categoryRef = firestore.collection("category");
  let existingCategory = categoryRef
    .where("userId", "==", category.userId)
    .where("tag", "==", category.tag);

  try{
    let querySnapshot = await existingCategory.get();
    if (querySnapshot.empty) {
      const savedCategory = await addToStore("category", category);
      return savedCategory;
    } else {
      throw new Error(
        `A Category with tag name ${category.tag} already exists`
      );
    }
  }catch(error){
    throw error;
  }
 
}

export async function fetchUserCategoryList(userId) {
  const categoryRef = firestore.collection("category");
  let existingCategory = categoryRef.where("userId", "==", userId);
  try {
    let querySnapshot = await existingCategory.get();
    if (querySnapshot.empty) {
      return [];
    } else {
      return querySnapshot.docs.map((doc) => {
        return { id: doc.id, ...doc.data() };
      });
    }
  } catch (error) {
    throw error;
  }
}

export { auth, firebase as default };
