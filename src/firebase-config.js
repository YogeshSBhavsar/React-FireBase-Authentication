import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyD_RdlcjbZmnit2NyIHh5h1JIritvC0O9U",
    authDomain: "ccep-firebase.firebaseapp.com",
    projectId: "ccep-firebase",
    storageBucket: "ccep-firebase.appspot.com",
    messagingSenderId: "1091297270138",
    appId: "1:1091297270138:web:6723e554f9409b21c6dec3",
    measurementId: "G-74719FF5QF"
  };

const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export default app;