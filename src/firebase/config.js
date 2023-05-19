import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDrOx5_hKb7aF9YVXspr4cSgd8jwkXZFpQ",
  authDomain: "blog-it-de8cb.firebaseapp.com",
  projectId: "blog-it-de8cb",
  storageBucket: "blog-it-de8cb.appspot.com",
  messagingSenderId: "406381857695",
  appId: "1:406381857695:web:87d06026fba5b28b024baa",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
