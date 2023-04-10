import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBe23y-hFddSNk6nzM062__dtMTZuFLax0",
  authDomain: "react-blog-cfefa.firebaseapp.com",
  projectId: "react-blog-cfefa",
  storageBucket: "react-blog-cfefa.appspot.com",
  messagingSenderId: "969373698903",
  appId: "1:969373698903:web:ab51b664bfa61a56468c12"
};

const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
reportWebVitals();
