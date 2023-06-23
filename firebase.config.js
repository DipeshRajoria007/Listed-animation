import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyBQYBXT3AZ3X1Ama3JyE1kAAfd9Wu0F8BQ",
  authDomain: "restaurantapp-68792.firebaseapp.com",
  databaseURL: "https://restaurantapp-68792-default-rtdb.firebaseio.com",
  projectId: "restaurantapp-68792",
  storageBucket: "restaurantapp-68792.appspot.com",
  messagingSenderId: "299927380899",
  appId: "1:299927380899:web:73cd5acef9ae045eb7f016",
  measurementId: "G-1PYZD0F57R",
};
const app = getApps.lenght > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };
