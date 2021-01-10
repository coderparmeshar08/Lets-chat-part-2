var firebaseConfig = {
    apiKey: "AIzaSyBc0HWEw3bxMOCMYETPyhjzU4ty3aYtMm8",
    authDomain: "lets-chat-database-aa2cb.firebaseapp.com",
    databaseURL: "https://lets-chat-database-aa2cb-default-rtdb.firebaseio.com",
    projectId: "lets-chat-database-aa2cb",
    storageBucket: "lets-chat-database-aa2cb.appspot.com",
    messagingSenderId: "285362156466",
    appId: "1:285362156466:web:5e07bc6a002dcd24a62aab"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  function getData() {
    firebase.database().ref("/").on('value', function (snapshot) {
          document.getElementById("output").innerHTML = "";
          snapshot.forEach(function (childSnapshot) {
                childKey = childSnapshot.key;
                Room_names = childKey;
                //Start code

                //End code
          });
    });
}
getData();