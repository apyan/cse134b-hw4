

// Firebase AmiiboDex Keys
var config = {
	apiKey: "AIzaSyD3p9hdIYoCSi72wUMbPT-JkIzXPf6Xmrc",
	authDomain: "amiibodex.firebaseapp.com",
	databaseURL: "https://amiibodex.firebaseio.com",
	storageBucket: "amiibodex.appspot.com",
	messagingSenderId: "582801923363"
};
firebase.initializeApp(config);

var database = firebase.database();

// Sign In Functions
AmiiboDex.prototype.initFirebase = function() {
  // Shortcuts to Firebase SDK features.
  this.auth = firebase.auth();
  this.database = firebase.database();
  this.storage = firebase.storage();
  // Initiates Firebase auth and listen to auth state changes.
  this.auth.onAuthStateChanged(this.onAuthStateChanged.bind(this));
};

