import firebase from "firebase";

const config = {
    apiKey: "AIzaSyCJXYfAl75bdqx4-IkrAXyHWYw2EkMuem0",
    authDomain: "photogallary-29a70.firebaseapp.com",
    databaseURL: "https://photogallary-29a70.firebaseio.com",
    projectId: "photogallary-29a70",
    storageBucket: "photogallary-29a70.appspot.com",
    messagingSenderId: "129844451330",
    appId: "1:129844451330:web:b4cbe12ac6caaf38fe2f1b"
};

export const firebaseui={
    signInFlow:"popup",
    signInOptions:[
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        firebase.auth.PhoneAuthProvider.PROVIDER_ID,
    ]
}
firebase.initializeApp(config);
export default firebase;
