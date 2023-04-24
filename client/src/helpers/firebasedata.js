import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyDdwNmQkomq2vw-lMgs8RVRrGEhj0xg18Q",
  authDomain: "medical-connect.firebaseapp.com",
  projectId: "medical-connect",
  storageBucket: "medical-connect.appspot.com",
  messagingSenderId: "451287307043",
  appId: "1:451287307043:web:64509bae88487cec947296",
  measurementId: "G-QNR8Q7XP5L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export {auth,provider};

