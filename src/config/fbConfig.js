// import firebase from 'firebase/app';
// import 'firebase/firestore';
// import 'firebase/auth';

// const config = {
//     apiKey: "AIzaSyAmjVCVKV8me1BWLLnmltkfnVktrElsR0M",
//     authDomain: "brus-75208.firebaseapp.com",
//     databaseURL: "https://brus-75208.firebaseio.com",
//     projectId: "brus-75208",
//     storageBucket: "brus-75208.appspot.com",
//     messagingSenderId: "666998852478",
//     appId: "1:666998852478:web:ad8e97eadc2a5732de012f",
//     measurementId: "G-V1ZC89Q5ZH"


//     // apiKey: 'AIzaSyB1sVPiCCjeGZJfEOT4dvHnKDFZp9xyLNM',
//     // authDomain: 'shopping-cart-f3004.firebaseapp.com',
//     // databaseURL: 'https://shopping-cart-f3004.firebaseio.com',
//     // projectId: 'shopping-cart-f3004',
//     // storageBucket: 'shopping-cart-f3004.appspot.com',
//     // messagingSenderId: '418394662537'
//   };

  

//   firebase.initializeApp(config) 
//   firebase.firestore().settings({ timestampsInSnapshots: true ,ignoreUndefinedProperties: true });

//   export default firebase;

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import "firebase/storage";
const config = {
    apiKey: "AIzaSyAmjVCVKV8me1BWLLnmltkfnVktrElsR0M",
    authDomain: "brus-75208.firebaseapp.com",
    databaseURL: "https://brus-75208.firebaseio.com",
    projectId: "brus-75208",
    storageBucket: "brus-75208.appspot.com",
    messagingSenderId: "666998852478",
    appId: "1:666998852478:web:ad8e97eadc2a5732de012f",
    measurementId: "G-V1ZC89Q5ZH"


    // apiKey: 'AIzaSyB1sVPiCCjeGZJfEOT4dvHnKDFZp9xyLNM',
    // authDomain: 'shopping-cart-f3004.firebaseapp.com',
    // databaseURL: 'https://shopping-cart-f3004.firebaseio.com',
    // projectId: 'shopping-cart-f3004',
    // storageBucket: 'shopping-cart-f3004.appspot.com',
    // messagingSenderId: '418394662537'
  };

  

  firebase.initializeApp(config) 
  firebase.firestore().settings({ timestampsInSnapshots: true ,ignoreUndefinedProperties: true });
  const storage = firebase.storage();

  export { storage, firebase as default };

  