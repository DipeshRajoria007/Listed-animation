import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyAbfshVYk5P3FYKYYNZMKz3B8jq3seRhCs",
  authDomain: "listed-animation.firebaseapp.com",
  projectId: "listed-animation",
  storageBucket: "listed-animation.appspot.com",
  messagingSenderId: "321176902132",
  appId: "1:321176902132:web:d081b82cdf17f81067c1a1",
  measurementId: "G-LZF025R0CF",
};
const app = getApps.lenght > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };
