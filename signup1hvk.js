firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.

    document.getElementById("user_div").style.display = "block";
    document.getElementById("login_div").style.display = "none";

    var user = firebase.auth().currentUser;

    if(user != null){

      var email_id = user.email;
      document.getElementById("user_para").innerHTML = "Welcome User : " + email_id;
      window.location.href="notesapp.html"

    }

  } else {
    // No user is signed in.

    document.getElementById("user_div").style.display = "none";
    document.getElementById("login_div").style.display = "block";

  }
});

function login(){

  var userEmail = document.getElementById("email_field").value;
  var userPass = document.getElementById("password_field").value;

  firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
    // Handle Errors here.
    //window.location.href="index.html"
    //window.location.replace("index.html");
    var errorCode = error.code;
    var errorMessage = error.message;

    window.alert("Error : " + errorMessage);
   // window.location.href="index.html"
   
  
  });
  

}
function signOut() {
  // [START auth_sign_out]
  firebase.auth().signOut().then(() => {
    // Sign-out successful.
    window.location.href = "signup1hvk.html";
  }).catch((error) => {
    // An error happened.
  });
  // [END auth_sign_out]
  alert("Signed Out");
}

//function logout(){
  //firebase.auth().signOut();
//}

function signin(){

  var email = document.getElementById("email");
  var password = document.getElementById("password");

  const promise = auth.createUserWithEmailAndPassword(email.value, password.value);
  promise.catch(e => alert(e.message));

  alert("Signed In");
}





