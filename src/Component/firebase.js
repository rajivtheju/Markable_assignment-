import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your Firebase config object
const firebaseConfig = {
  apiKey: "AIzaSyCbm6ZTiBhOkFsegCfeeKTDkEmTOHGUk6Q",
  authDomain: "kickstart-6698a.firebaseapp.com",
  projectId: "kickstart-6698a",
  storageBucket: "kickstart-6698a.appspot.com",
  messagingSenderId: "818323083064",
  appId: "1:818323083064:web:f9ea7000f7794371123bcd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore and Storage services
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };
