import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCxnkic6Kvf00b18uuJlltuBdqaN40JNVM",
  authDomain: "database-table1.firebaseapp.com",
  databaseURL: "https://database-table1-default-rtdb.firebaseio.com",
  projectId: "database-table1",
  storageBucket: "database-table1.appspot.com",
  messagingSenderId: "864909065929",
  appId: "1:864909065929:web:1bfde06804586b3eb75718",
  measurementId: "G-4WZ103P343"
};
var fire = initializeApp(firebaseConfig)
export default fire;