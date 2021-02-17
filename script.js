// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBfa6n3VO-VFvC5oQY4dUhJw1bvNdFMJh4",
    authDomain: "tranas-the-great-pro.firebaseapp.com",
    databaseURL: "https://tranas-the-great-pro.firebaseio.com",
    projectId: "tranas-the-great-pro",
    storageBucket: "tranas-the-great-pro.appspot.com",
    messagingSenderId: "988487983017",
    appId: "1:988487983017:web:12c8f90141db0fd35a6eb8",
};
firebase.initializeApp(firebaseConfig);
var claim = document.getElementById("claim").value;
var person = document.getElementById("name").value;
var email = document.getElementById("email").value;
localStorage.setItem("Submitter", person);
function submit() {
    firebase.database().ref("/").child(person).update({
        purpose: "adding person id"
    });
    firebase.database().ref(person).push({
        name:person,
        email:email,
        claim:claim,
        read: null
    });
}
