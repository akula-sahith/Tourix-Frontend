// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider, GithubAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCXLs1fQpduGNgLzYmNSGWyRVLnOrc5LOA",
  authDomain: "smart-india-hackathon-dbba5.firebaseapp.com",
  projectId: "smart-india-hackathon-dbba5",
  storageBucket: "smart-india-hackathon-dbba5.firebasestorage.app",
  messagingSenderId: "541821421228",
  appId: "1:541821421228:web:67fec94a4fdb1e80088109",
  measurementId: "G-333YX16V52"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const githubProvider = new GithubAuthProvider();
const analytics = getAnalytics(app);