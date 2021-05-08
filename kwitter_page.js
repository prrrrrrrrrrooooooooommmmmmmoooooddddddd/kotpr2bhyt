//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyBQNC6MByQ9sEjcCB-dwJKlF-E-Rc9cwKk",
      authDomain: "qitter-fb8da.firebaseapp.com",
      databaseURL: "https://qitter-fb8da-default-rtdb.firebaseio.com",
      projectId: "qitter-fb8da",
      storageBucket: "qitter-fb8da.appspot.com",
      messagingSenderId: "1035567339574",
      appId: "1:1035567339574:web:0b9a2b47fd8073e1aba097"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    user_name = localStorage.getItem("user_name");
    room_name = localStorage.getItem("room_name");
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

      console.log(firebase_message_id);
      console.log(message_data);
      mane = message_data['name'];
      messege = message_data['message'];
      like = message_data['like'];
      name_with__tag = "<h4>"+mane+"<img class = 'tick' src = 'tick.png'></h4></img>"
      messagewithtag = "<h4 class='message>'"+messege+"</h4>";
      like_mutton = "<button class='btn btn-warning' id="+firebase_message_id+"value = "+like+"onclick='up_like_mando(this.id)'>";
      spantag = "<span class='glyphicon glyphicon-thumbs-up'>like:"+like+"</span> </button> <hr>";
      row = name_with__tag + messagewithtag + like_mutton + spantag;
      document.getElementById("output").innerHTML += row;




//End code
      } });  }); }
getData()

function send() {
      message = document.getElementById("message").value;
      firebase.database().ref(room_name).push({
            name: user_name,
            message: message, 
            like: 0
      });
      document.getElementById("message").value = "";
}
function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html"; 
}
