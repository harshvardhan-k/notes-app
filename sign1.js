

firebase.initializeApp(firebaseConfig);
  firebase.analytics();

const auth = firebase.auth();

function signup(){
  var Eemail = document.getElementById("email_field").value;
  var Ppassword = document.getElementById("password_field").value;

  firebase.auth().createUserWithEmailAndPassword(Eemail, Ppassword)
  .then((userCredential) => {
    // Signed in 
    var user = userCredential.user;
    // ...
  })
  window.alert("Signed In succesfully")
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    // ..
    window.alert("Error : " + errorMessage);
  });
}


