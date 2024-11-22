// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBHDKBLr8gFgzZ8iHdvykJKCJL83cBjpo8",
  authDomain: "tunehive-b2acb.firebaseapp.com",
  projectId: "tunehive-b2acb",
  storageBucket: "tunehive-b2acb.firebasestorage.app",
  messagingSenderId: "447370009012",
  appId: "1:447370009012:web:7f2265897e4c41a883fae1",
  measurementId: "G-7ZCMGNLFJJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);