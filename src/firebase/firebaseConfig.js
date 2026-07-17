import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyAP-vC65dki5C3A-3fJQPv4sFa0eHSlNQM",
    authDomain: "nexura-teach-reactjs.firebaseapp.com",
    projectId: "nexura-teach-reactjs",
    storageBucket: "nexura-teach-reactjs.firebasestorage.app",
    messagingSenderId: "145288801574",
    appId: "1:145288801574:web:ed69fa492471b3d234e5e7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);


