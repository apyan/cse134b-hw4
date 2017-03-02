function submitClick() {
	window.alert("hi");
	var firebaseRef = firebase.database().ref();
	firebaseRef.child("Text").set("Some Value");
	window.alert("bye");
}

function writeUserData(userId, password) {
  window.alert(userId + password);
  firebase.database().ref().child(userId).set({
    username: userId,
    password: password
  });
  window.alert("did something");
}