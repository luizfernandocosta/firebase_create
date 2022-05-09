// const exports = {}
// Importing dependencies
// const firebase = require('firebase');
const firebase = require('firebase/app');
const firebaseAuth = require('firebase/auth');
const dotenv = require('dotenv');

dotenv.config();

// Creating firebase configuration
const firebaseConfig = {
  apiKey: `${process.env.API_KEY}`,
  authDomain: `${process.env.AUTH_DOMAIN}`,
  projectId: `${process.env.PROJECT_ID}`,
  storageBucket: `${process.env.STORAGE_BUCKET}`,
  messagingSenderId: `${process.env.MESSAGING_SENDER_ID}`,
  appId: `${process.env.APP_ID}`,
};

// Initializing firebase
firebase.initializeApp(firebaseConfig);

// Getting auth instance
let auth = firebaseAuth.getAuth();

// Handling sign up
const handleSignUp = async (event) => {
  try {

    await firebaseAuth.createUserWithEmailAndPassword(auth, event.email, event.password)

    await firebaseAuth.updateProfile(auth.currentUser, 
      { 
        displayName: event.name, 
      })

  } 
  catch (error) {
    return error.code
  }
}

exports.handler = handleSignUp;