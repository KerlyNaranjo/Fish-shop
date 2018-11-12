import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyC0y4JGJjYtVKscFw6GJZtLwmF37LEJyJY",
    authDomain: "tienda-de-pescados.firebaseapp.com",
    databaseURL: "https://tienda-de-pescados.firebaseio.com",
    projectId: "tienda-de-pescados",
    storageBucket: "tienda-de-pescados.appspot.com",
    messagingSenderId: "438307979598"
});

const base = Rebase.createClass(firebaseApp.database());


export {firebaseApp};

export default base;