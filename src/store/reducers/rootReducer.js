import authReducer from './authReducer';
import projectReducer from './projectReducer';
import searchReducer from './searchReducer';
import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase';
import cartReducer from './cartReducer';
import productReducer from './productReducer';
const rootReducer = combineReducers({
    auth: authReducer,
    project: projectReducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer,
    search: searchReducer,
    cart:cartReducer,
    product:productReducer
});

export default rootReducer;