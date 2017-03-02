function submitClick() {
	window.alert("hi");
	var firebaseRef = firebase.database().ref();
	firebaseRef.child("Text").set("Some Value");
	window.alert("bye");
}

function writeNewUserData(userId, password) {
  window.alert(userId + " " + password);
  firebase.database().ref().child(userId).set({
    username: userId,
    password: password,
    originalList: {
      mario: false, 
      peach: false,
      yoshi: false,
      donkeykong: false,
      link: false,
      fox: false,
      samus: false,
      wiifittrainier: false,
      villager: false,
      pikachu: false,
      kirby: false,
      marth: false,
      zelda: false,
      luigi: false,
      littlemac: false,
      pit: false,
      captainfalcon: false,
      rosalinaandluma: false,
      bowser: false,
      lucario: false,
      toonlink: false,
      sheik: false,
      ike: false,
      shulk: false,
      sonic: false,
      megaman: false,
      kingdedede: false,
      metaknight: false,
      robin: false,
      lucina: false,
      wario: false,
      charizard: false,
      ness: false    }
  });

  window.alert("did something");
}