// Import the functions you need from the SDKs you need
import firebase from 'firebase'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD4HaksvIn_4d-rlC9CCFncMPvHPTYx0nw",
  authDomain: "story-telling-app-8a03b.firebaseapp.com",
  projectId: "story-telling-app-8a03b",
  storageBucket: "story-telling-app-8a03b.appspot.com",
  messagingSenderId: "368111255922",
  appId: "1:368111255922:web:55b8894d38c3deaf58ddeb"
};

if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig)
}

export default firebase.database()