// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD96VP19_RNWjmTI5c2-bUMTH5aqwM5ljE",
    authDomain: "ai-talent-app-1cbc9.firebaseapp.com",
    projectId: "ai-talent-app-1cbc9",
    storageBucket: "ai-talent-app-1cbc9.appspot.com",
    messagingSenderId: "864794209741",
    appId: "1:864794209741:web:66bc9c0ac4155cfcbba884"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);
export { auth, app, firestore, storage };
