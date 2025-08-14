// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAJERON5ES0jXw_Unl9w_YavtIn81bmBrY",
  authDomain: "vehica-client.firebaseapp.com",
  projectId: "vehica-client",
  storageBucket: "vehica-client.appspot.com",
  messagingSenderId: "1031392978618",
  appId: "1:1031392978618:web:89478c1428c2040e6c0483"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;