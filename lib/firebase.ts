// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCjhganS2Vtn1SGgwU4J7M_bOhnZ6gU-AI",
    authDomain: "ditralaw-4f017.firebaseapp.com",
    projectId: "ditralaw-4f017",
    storageBucket: "ditralaw-4f017.firebasestorage.app",
    messagingSenderId: "2104740446",
    appId: "1:2104740446:web:091697ce3c28a867a502cf",
    measurementId: "G-RLY49BBETY"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Initialize Analytics only in browser environment
export const analytics = typeof window !== 'undefined'
    ? isSupported().then(yes => yes ? getAnalytics(app) : null)
    : null;
