import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './store/reducers/rootReducer';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import firebase from './config/fbConfig';

// const store = createStore(rootReducer,
//     compose(
//         applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})),
//         reduxFirestore(firebase),
//         reactReduxFirebase(firebase, {useFirestoreForProfile: true, userProfile: 'users', attachAuthIsReady: true})
//     )
// );



// store.firebaseAuthIsReady.then(() => {
//     ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

//     // If you want your app to work offline and load faster, you can change
//     // unregister() to register() below. Note this comes with some pitfalls.
//     // Learn more about service workers: https://bit.ly/CRA-PWA
//     serviceWorker.unregister();
// })



import { ReactReduxFirebaseProvider, getFirebase, reactReduxFirebase } from 'react-redux-firebase'
import { createFirestoreInstance, getFirestore, reduxFirestore } from 'redux-firestore'

const store = createStore(rootReducer,
  compose(
    applyMiddleware(thunk.withExtraArgument({ getFirestore, getFirebase })),
    reduxFirestore(firebase)
  
  )
);

const rrfProps = {
  firebase,
  config: firebase,
  dispatch: store.dispatch,
  createFirestoreInstance
};

ReactDOM.render(
<Provider store={store}>
<ReactReduxFirebaseProvider {...rrfProps}>
<App />
</ReactReduxFirebaseProvider>
</Provider>, document.getElementById('root'));
