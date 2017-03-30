

//Button Wars!//

function button1(name){
document.getElementById("print_text").innerHTML = name + ".";
}

function button2(name) {
document.getElementById("print_text").innerHTML = name + ".";
}


// Don't Hover!//

	document.getElementById("dont_hover").addEventListener("mouseover", onClick);
  function onClick(event){
		alert("Hey, I told you not to hover over me!");
	}

// Events
function myFunction() {
document.getElementById("header").innerHTML = String.fromCharCode(event.charCode);
}


// validatopn checks
function logPassword(){
var password = document.getElementById('password').value;

  if (password == "1234678"){
    console.log("good pasword");
  }
    else{
      alert("Error: Please check that you've entered password!");
    }
}
