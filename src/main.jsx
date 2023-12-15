import React from 'react';
import ReactDOM from 'react-dom/client';
import { initializeApp } from "firebase/app";
import App from './App.jsx';
import "bootstrap/dist/css/bootstrap.min.css";

const firebaseConfig = {
  apiKey: "AIzaSyDh9-P8kawhqGppCM9rbpnp_6guF_jAIkM",
  authDomain: "ecommerce-9c29c.firebaseapp.com",
  projectId: "ecommerce-9c29c",
  storageBucket: "ecommerce-9c29c.appspot.com",
  messagingSenderId: "883186555589",
  appId: "1:883186555589:web:f5bc40dd80110969366eac"
};

initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
