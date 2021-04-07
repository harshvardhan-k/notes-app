function signOut() {
    // [START auth_sign_out]
    firebase.auth().signOut().then(() => {
      // Sign-out successful.
      window.location.href = "index.html";
    }).catch((error) => {
      // An error happened.
    });
    // [END auth_sign_out]
    alert("Signed Out");
  }