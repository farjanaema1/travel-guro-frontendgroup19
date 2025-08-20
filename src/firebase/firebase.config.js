
// import { initializeApp } from "firebase/app";

// const firebaseConfig = {
//   apiKey: "AIzaSyAJERON5ES0jXw_Unl9w_YavtIn81bmBrY",
//   authDomain: "vehica-client.firebaseapp.com",
//   projectId: "vehica-client",
//   storageBucket: "vehica-client.appspot.com",
//   messagingSenderId: "1031392978618",
//   appId: "1:1031392978618:web:89478c1428c2040e6c0483"
// };


// const app = initializeApp(firebaseConfig);
// export default app;
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDtvtPb2hk4_ZgFVl7VCj7UCVrFz6mR7Tc",
  authDomain: "traveling-cc0ff.firebaseapp.com",
  projectId: "traveling-cc0ff",
  storageBucket: "traveling-cc0ff.firebasestorage.app",
  messagingSenderId: "1088125035862",
  appId: "1:1088125035862:web:89787ec742f06747eb22f7",
  measurementId: "G-ZS1DBQRGJC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app;