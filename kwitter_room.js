
//ADD YOUR FIREBASE LINKS HERE
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
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("room name is" + Room_names);
      row = "<div class='room_name' id="+ Room_names + " onclick='redirectToRoomname(this.id)' >" + Room_names + "</div> <hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();
 user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "welcome " + user_name + "!"

function addroomdude() {
      nameroom = document.getElementById("room_name").value;
      firebase.database().ref("/").child(nameroom).update( {
      hil_ariorios:"vaaaaallelasl/ala;/dlADK:Sl'h:kHDgh;/poiofhgjjjfdkj.44521213.dgfkl;gf/gk;mLhdKopg'khk;lok;k;oj/i/lk"
     
}   
); 
localStorage.setItem("room_name",nameroom);
window.location="kwitter_page.html";
}
function redirectToRoomname(name) {
       console.log(name);
       localStorage.setItem("room_name",name);
       window.location = "kwitter_page.html";
}
function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html"; 
}

