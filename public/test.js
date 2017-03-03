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


var firebaseAmiiboListRef = firebase.database().ref().child("original-amiibo-list");
demoP = document.getElementById("demo");
var characters = ["SkipThis","Mario", "Peach", "Yoshi", "DonkeyKong", "Link", "Fox", "Samus", "WiiFitTrainer", "Villager", "Pikachu", "Kirby", "Marth", "Zelda", "DiddyKong", "Luigi", "LittleMac", "Pit", "CaptainFalcon", "Rosalina&Luma", "Bowser", "Lucario", "ToonLink", "Sheik", "Ike", "Shulk", "Sonic", "MegaMan", "KingDedede", "MetaKnight", "Robin", "Lucina", "Wario", "Charizard", "Ness"];

function forEachFunction(item, index) {
  // skip 0th element
  if(index == 0){
    //alert("skipped");
    return;
  }
  var number = document.getElementById(item + "-Number");
  var firebaseCharacterRef = firebaseAmiiboListRef.child(index + "-" + item);
  var firebaseCharacterNumberRef = firebaseCharacterRef.child("Number");
  firebaseCharacterNumberRef.on('value', function(snapshot){
    number.innerHTML = snapshot.val();
  });
  var name = document.getElementById(item + "-Name");
  var firebaseCharacterNameRef = firebaseCharacterRef.child("Name");
  firebaseCharacterNameRef.on('value', function(snapshot){
    name.innerHTML = snapshot.val();
  });
  var image = document.getElementById(item + "-Image");
  var firebaseCharacterImageRef = firebaseCharacterRef.child("Image");
  firebaseCharacterImageRef.on('value', function(snapshot){
    image.src = snapshot.val();
  });
  var gameOrigin = document.getElementById(item + "-GameOrigin");
  var firebaseCharacterGameOriginRef = firebaseCharacterRef.child("Game Origin");
  firebaseCharacterGameOriginRef.on('value', function(snapshot){
    gameOrigin.innerHTML = snapshot.val();
  });
  var dateRelease = document.getElementById(item + "-DateRelease");
  var firebaseCharacterDateReleaseRef = firebaseCharacterRef.child("Date Release");
  firebaseCharacterDateReleaseRef.on('value', function(snapshot){
    dateRelease.innerHTML = snapshot.val();
  });
  var wave = document.getElementById(item + "-Wave");
  var firebaseCharacterWaveRef = firebaseCharacterRef.child("Wave");
  firebaseCharacterWaveRef.on('value', function(snapshot){
    wave.innerHTML = snapshot.val();
  });
  var exclusive = document.getElementById(item + "-Exclusive");
  var firebaseCharacterExclusiveRef = firebaseCharacterRef.child("Exclusive");
  firebaseCharacterExclusiveRef.on('value', function(snapshot){
    exclusive.innerHTML = snapshot.val();
  });
  var description = document.getElementById(item + "-Description");
  var firebaseCharacterDescriptionRef = firebaseCharacterRef.child("Description");
  firebaseCharacterDescriptionRef.on('value', function(snapshot){
    description.innerHTML = snapshot.val();
  });
  var rarity = document.getElementById(item + "-Rarity");
  var firebaseCharacterRarityRef = firebaseCharacterRef.child("Rarity");
  firebaseCharacterRarityRef.on('value', function(snapshot){
    rarity.innerHTML = snapshot.val();
  });
}

characters.forEach(forEachFunction);
