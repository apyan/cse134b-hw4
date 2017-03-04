function writeNewUserData(userId, password, authId) {
  window.alert(userId + " " + password);
  firebase.database().ref().child('users/' + authId).set({
    username: userId,
    customList1:{
      "0-Custom": {
        DateRelease : 0,
        Description : false,
        Exclusive: false,
        GameOrigin: false,
        Image: false,
        Name: false,
        Number: false,
        Rarity: false,
        Wave: false,
        Owned: false
      }
    },    
    password: password,
    authenticationId: authId,
    originalList: {
      Mario: false, 
      Peach: false,
      Yoshi: false,
      DonkeyKong: false,
      Link: false,
      Fox: false,
      Samus: false,
      WiiFitTrainer: false,
      Villager: false,
      Pikachu: false,
      Kirby: false,
      Marth: false,
      Zelda: false,
      Luigi: false,
      LittleMac: false,
      Pit: false,
      CaptainFalcon: false,
      "Rosalina&Luma": false,
      Bowser: false,
      Lucario: false,
      ToonLink: false,
      Sheik: false,
      Ike: false,
      Shulk: false,
      Sonic: false,
      Megaman: false,
      KingDedede: false,
      MetaKnight: false,
      Robin: false,
      Lucina: false,
      Wario: false,
      Charizard: false,
      Ness: false
    }
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

function sortTable(n) {
  var table, rows, switching, i, x, y, shouldSwitch, dir,var1, switchcount = 0;
  table = document.getElementById("mainTable");
  switching = true;
  //Set the sorting direction to ascending:
  dir = "asc"; 
  /*Make a loop that will continue until
  no switching has been done:*/
  while (switching) {
    //start by saying: no switching is done:
    switching = false;
    
    rows = table.getElementsByTagName("TR");

    /*Loop through all table rows (except the
    first, which contains table headers):*/
    for (i = 1; i < (rows.length - 1); i++) {
      //start by saying there should be no switching:
      shouldSwitch = false;
      /*Get the two elements you want to compare,
      one from current row and one from the next:*/
      x = rows[i].getElementsByTagName("P")[n];
      y = rows[i + 1].getElementsByTagName("P")[n];
      /*check if the two rows should switch place,
      based on the direction, asc or desc:*/
      if (dir == "asc") {
        if (isNaN(x.innerHTML) && isNaN(y.innerHTML) && x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
          //if so, mark as a switch and break the loop:
          shouldSwitch= true;
          break;
        }
        else if(!isNaN(x.innerHTML) && !isNaN(y.innerHTML) && Number(x.innerHTML) > Number(y.innerHTML)){
          shouldSwitch= true;
          break;
        }
      } else if (dir == "desc") {
        if (isNaN(x.innerHTML) && isNaN(y.innerHTML) && x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
          //if so, mark as a switch and break the loop:
          shouldSwitch= true;
          break;
        }
        else if(!isNaN(x.innerHTML) && !isNaN(y.innerHTML) && Number(x.innerHTML) < Number(y.innerHTML)){
          shouldSwitch= true;
          break;
        }
      }
    }
    if (shouldSwitch) {
      /*If a switch has been marked, make the switch
      and mark that a switch has been done:*/
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
      //Each time a switch is done, increase this count by 1:
      switchcount ++; 
    } else {
      /*If no switching has been done AND the direction is "asc",
      set the direction to "desc" and run the while loop again.*/
      if (switchcount == 0 && dir == "asc") {
        dir = "desc";
        switching = true;
      }
    }
  }
}
