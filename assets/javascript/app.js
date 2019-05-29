// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyD_xzwvtI33f8g8FHLeYmqN3Xesf9pcpLs",
    authDomain: "rps-multiplayer-15268.firebaseapp.com",
    databaseURL: "https://rps-multiplayer-15268.firebaseio.com",
    projectId: "rps-multiplayer-15268",
    storageBucket: "rps-multiplayer-15268.appspot.com",
    messagingSenderId: "649419629865",
    appId: "1:649419629865:web:830a46f115e2b9ae"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

//   reference for the database
  var database = firebase.database();

//   All connections on the site. Info from the database
  var connectionsRef = database.ref("/connections");

//   updated when the user's state changes
  var connectedRef = database.ref(".info/connected");

  var users = database.ref("/connections/users");


//   variables for each player
var player1 = {
    name: "",
    choice: "",
    wins: 0,
    losses: 0,
    ties: 0,
    chosen: false
}
var player2 = {
    name: "",
    choice: "",
    wins: 0,
    losses: 0,
    ties: 0,
    chosen: false
}

var username = "";
var userKey = "";

// storing usernames to online refrences in the database
connectedRef.on("value", function(snapshot) {
    if (snapshot.val()) {
        var con = users.push({
            connected: true
        });
        
        userKey = con.key;
        console.log(userKey);
        
        con.onDisconnect().remove()
    }

});

// functions: get the users name, onclick for chosing rock, paper, or scissors, determining the winner, updating wins/losses/ties, chat?
function getName() {
    if (!player1.chosen) {
        player1.name = username;
        player1.chosen = true;
        database.ref("/connections/users/" + userKey).update({
            name: username
        })
    } else if (player1.chosen && !player2.chosen) {
        player2.name = username;
        player2.chosen = true;
    }

}

$("#submit").on("click", function(event) {
    event.preventDefault();
   username = $("#user-name").val().trim();
   getName();
   console.log(player1.name);
})


