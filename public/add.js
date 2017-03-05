function addAmiibo(userId) {
	alert(userId);
	var number = document.getElementById("number").value;
	var name = document.getElementById("name").value;
	var origin = document.getElementById("origin").value;
	var date = document.getElementById("date").value;
	var wave = document.getElementById("wave").value;
	var exclusive = document.getElementById("exclusive").value;
	var description = document.getElementById("description").value;
	var rarity = document.getElementById("rarity").value;
	var have = document.getElementById("have").checked;

	// change customList1 to customList
	firebase.database().ref().child("users/" + userId + "/customList/" + number + "-" + name).set({
		DateRelease: date,
		Description: description,
		Exclusive: exclusive,
        GameOrigin: origin,
        Image: "https://firebasestorage.googleapis.com/v0/b/amiibodex.appspot.com/o/Original-Amiibo%2F11_kirby.jpg?alt=media&token=b1dfb09b-8185-4d9a-9d23-ab04e7e89cd4",
        Name: name,
       	Number: number,
       	Rarity: rarity,
       	Wave: wave,
        Have: have
	});
}