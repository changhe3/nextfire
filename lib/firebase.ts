import { FirebaseOptions, getApp, getApps, initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig: FirebaseOptions = {
    apiKey: "AIzaSyACQp0EfDs5DBq_ZzuJYyhtQA3N8AHJYXk",
    authDomain: "nextfire-86f01.firebaseapp.com",
    projectId: "nextfire-86f01",
    storageBucket: "nextfire-86f01.appspot.com",
    messagingSenderId: "933788886797",
    appId: "1:933788886797:web:f4b375f66823d6db777244",
    measurementId: "G-7XRC0PP14L"
};

if (getApps().length < 1) {
    initializeApp(firebaseConfig);
}

const auth = getAuth();
const store = getStorage();
const db = getFirestore();