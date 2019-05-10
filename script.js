$(document).ready(function(){
  // your code goes below
console.log("were killin this");
var bod = $("body")
$("div").hide();
var emptystring = "";

$("#text").keypress(function(event){
	var letter = event.key;
	console.log(letter);
	
	$("div").click(function(){
		bod.css("background-color","red");
		$("h1").replaceWith("<h1>YOU'LL NEVER ESCAPE</h1>");

	});

	if(letter == "a" || letter == "A"){
	//console.log("An " + letter + " was typed");
	bod.css("background-color","#006400");
	}	else if (letter == "f" || letter == "F") {
		$("h1").css("color","white");
	}	else if (letter == "p" || letter == "P"){
			$("div").fadeIn(3000);
	}	else if (letter == "n" || letter == "N"){
			bod.fadeOut(3000);
			bod.fadeIn(3000);
	}	else if (letter == "e" || letter == "E"){
			bod.append("<p>hello, is there anyone there?</p>");
	}	else if (letter == "i" || letter == "I"){
			$("textarea").css("margin-left","80px");
	}	else if (letter == "s" || letter == "s"){
			$("h1").text("I'm trapped");
	}	else if (letter == "l" || letter == "L"){
			bod.css({"background-image":"url(images/scaryclown.jpg)", "background-size":"cover"});
	}	else if (letter == "w" || letter == "W"){
			bod.append("<p>Wanna play a game?</p>");
	}	else if (letter == "g" || letter == "G"){
			bod.append("<h3>help meee</h3>");
	}	else if (letter == "q" || letter == "Q"){
			$("textarea").val(emptystring);
	}	else if (letter == "o" || letter == "O"){
			bod.css('background-image', 'none');
			bod.css('background-color', 'none');
				
	}	else {
	
	//console.log("A key other than a was typed");
	}


});
  
})