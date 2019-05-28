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

//   variables for each player
var player1 = {
    name = "",
    choice = "",
    wins = 0,
    losses = 0,
    ties = 0
}
var player2 = {
    name = "",
    choice = "",
    wins = 0,
    losses = 0,
    ties = 0
}

// functions: get the users name, onclick for chosing rock, paper, or scissors, determining the winner, updating wins/losses/ties, chat?