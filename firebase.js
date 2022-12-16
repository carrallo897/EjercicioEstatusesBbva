import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js'

import { getAuth } from 'https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js'
  

    const firebaseConfig = {
    apiKey: "AIzaSyDdrvAYjsLqbjJ-k8wzxnobV3neo7ou5fk",
    authDomain: "silver-fragment-369411.firebaseapp.com",
    projectId: "silver-fragment-369411",
    storageBucket: "silver-fragment-369411.appspot.com",
    messagingSenderId: "44913597505",
    appId: "1:44913597505:web:727d979966508dbd05bac0",
    measurementId: "G-68JEB0B1BN"
    };

export const app = initializeApp(firebaseConfig);
export const auth= getAuth(app);
