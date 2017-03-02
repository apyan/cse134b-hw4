function submitClick() {
	window.alert("hi");
	var firebaseRef = firebase.database().ref();
	firebaseRef.child("Text").set("Some Value");
	window.alert("bye");
}