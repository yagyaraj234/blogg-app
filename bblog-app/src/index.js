import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Navbar from "./components/Navbar";
import Footer from './components/Footer'
import { BrowserRouter } from "react-router-dom";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDJyEIai06r9j2may67Z2YkckU8aTl-q2A",
  authDomain: "blogg-app-mern.firebaseapp.com",
  projectId: "blogg-app-mern",
  storageBucket: "blogg-app-mern.appspot.com",
  messagingSenderId: "651878890745",
  appId: "1:651878890745:web:faf038b68f88e858e8f628"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <BrowserRouter>
    <Navbar/>
    <App />
    
    <Footer/>
    </BrowserRouter>
  
  </>
);
