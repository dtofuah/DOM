

// Button Wars!//

function button1(name) {
	document.getElementById("first_button").innerHTML = name + ".";
}

function button2(name) {
	document.getElementById("second_button").innerHTML = name + ".";
}


// Don't Hover!//

document.getElementById("dont_hover").addEventListener("mouseover", onClick);
function onClick(event) {
	alert("Hey, I told you not to hover over me!");
}

// Text appearing on screen
function myFunction() {
	document.getElementById("header").innerHTML = String.fromCharCode(event.keyCode);
}


// validation checks
var formElement = document.getElementById('form');
formElement.addEventListener("submit", function(event) {
	var password = document.getElementById('pass').value;


	if (password === "12345678") {
		alert("Correct Password");
	}
	else {
		alert("Error: You have entered a wrong password!");
	}
});

formElement.addEventListener("submit", function(event) {
	var username = document.getElementById('user').value;


	if (username === "dtofuah") {
		alert("Correct Username");
	}
	else {
		alert("Error: You have entered a wrong Username!");
	}
});


formElement.addEventListener("submit", function(event) {
	var Email = document.getElementById('email').value;


	if (Email === "dtofuah@gmail.com") {
		alert("Correct Email Address");
	}
	else {
		alert("Error: You have entered a wrong Email Address!");
	}
});
