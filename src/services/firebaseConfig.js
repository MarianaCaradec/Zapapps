// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCQcrOF8SZnYhcX83vEt2dJYC55GFozfzw",
    authDomain: "zapapps-fbf0c.firebaseapp.com",
    projectId: "zapapps-fbf0c",
    storageBucket: "zapapps-fbf0c.appspot.com",
    messagingSenderId: "79738204745",
    appId: "1:79738204745:web:274bf4d13f8ea9f6a50598"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const dataBase = getFirestore(app)