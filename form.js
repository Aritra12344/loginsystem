
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC7uKfVkuub91DjI_esvh-wSGViPT-qHRA",
  authDomain: "graphite-pad-333016.firebaseapp.com",
  databaseURL: "https://graphite-pad-333016-default-rtdb.firebaseio.com",
  projectId: "graphite-pad-333016",
  storageBucket: "graphite-pad-333016.appspot.com",
  messagingSenderId: "74034732516",
  appId: "1:74034732516:web:477a3c94cd22c8c04cfbf1",
  measurementId: "G-6XBH4PZ3TT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


const auth= firebase.auth();

//signup function

function signUp(){

var email = document.getElementById("email"); 

var password =document.getElementById("password");

const promise = auth.createUserWith EmailAnd Password(email.value,pass word.value);

promise.catch(e=>alert(e.message));

alert("SignUp Successfully");

}

//signlN function

function signln(){

var email = document.getElementByld("email");

var password

=

document.getElementByld("password");

const promise = auth.signIn With EmailAnd Password(email.value,passwor

d.value);

promise.catch(e=>alert(e.message));

}

//signOut

function signOut(){

auth.signOut(); alert("SignOut Successfully from System");

}

//active user to homepage firebase.auth().onAuthStateChanged((user)=>{

if(user){

var email = user.email;

alert("Active user "+email);

}else{

alert("No Active user Found")

}

})

