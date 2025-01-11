// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCJF_CwEa-sZFCmAPsMkmuXOB0n2zpqstc",
    authDomain: "movie-flex-b5388.firebaseapp.com",
    projectId: "movie-flex-b5388",
    storageBucket: "movie-flex-b5388.firebasestorage.app",
    messagingSenderId: "82756034235",
    appId: "1:82756034235:web:c1e7031021aef44206d39e",
    measurementId: "G-4MMQ8X1QCW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
