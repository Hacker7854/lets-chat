var firebaseConfig = {
    apiKey: "AIzaSyAHHyGaan3wIBi1bKAt6_6rMG4xNAB0oF4",
    authDomain: "lets-chat-168d8.firebaseapp.com",
    databaseURL: "https://lets-chat-168d8-default-rtdb.firebaseio.com",
    projectId: "lets-chat-168d8",
    storageBucket: "lets-chat-168d8.appspot.com",
    messagingSenderId: "464679684417",
    appId: "1:464679684417:web:d4b892d8b16ad46a9b79c0"
  };

 addUser() 
    {
    username = document.getElementById("user_name").value; 
    localStorage.setItem("user_name" , username);
    window.location = "kwitter_room.html";
}