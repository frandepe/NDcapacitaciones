import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBUue32mA5C2o_WRu2OpiB4kryLMUdXUzk",
  authDomain: "ndcapacitaciones.firebaseapp.com",
  projectId: "ndcapacitaciones",
  storageBucket: "ndcapacitaciones.appspot.com",
  messagingSenderId: "1081928863270",
  appId: "1:1081928863270:web:4fa7bf547ca50aaf6260e7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
