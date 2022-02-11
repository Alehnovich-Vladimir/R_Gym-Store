// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCrPBa6htt7dfFI1qaE2MLXMbBoDY6A1YE",
    authDomain: "r-gym-store.firebaseapp.com",
    projectId: "r-gym-store",
    storageBucket: "r-gym-store.appspot.com",
    messagingSenderId: "960546768623",
    appId: "1:960546768623:web:d97d2312d908a06bdf7d1a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;