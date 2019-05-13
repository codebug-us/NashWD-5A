$(document).ready(function(){
  // your code goes below
  // console.log("test load");
  $("#clickIfYouDare").hide();

  //keypress in textarea
  $("#myTextArea").keypress(function(event){
  	var valueOfKeyPressed = event.key;
  	if(valueOfKeyPressed=='a'){
  		//set background to darkgreen
  		$("body").css("background-color","#07511c")
  	}else if(valueOfKeyPressed=='f'){
  		//turns to white
  		$("#myHeader").css("color","#ffffff");
  	}else if(valueOfKeyPressed=='p'){
  		//show the click box
  		$("#clickIfYouDare").show();
  	}else if(valueOfKeyPressed=='n'){
  		$("body").fadeOut("slow");
  		$("body").fadeIn("slow");
  	}else if(valueOfKeyPressed=='e'){
  		$("body").append("<p>hello, is anyone there?</p>");
  	}else if(valueOfKeyPressed=='i'){
  		$("#myTextArea").css("margin-left","80px");
  	}else if(valueOfKeyPressed=='s'){
  		$("#myHeader").text("I'M TRAPPED");
  	}else if(valueOfKeyPressed=='l'){
  		$("body").css("background-image","url(images/scaryclown.jpg)");
  	}else if(valueOfKeyPressed=='w'){
  		$("body").append("<p>Would you like to play a game?</p>");
  	}else if(valueOfKeyPressed=='g'){
  		$("body").prepend("<h3>HELP ME!!!</h3>");
  	}else if (valueOfKeyPressed=='q'){
  		$("#myTextArea").val("");
  	}else if(valueOfKeyPressed=='o'){
  		$("body").css("background-image","none");
  	}else{
  		console.log("A key other than 'a' was typed.");
  	}
  });

  //click if you dare
  $("#clickIfYouDare").click(function(){
  	console.log("testing");
  	//remove everything
  	//black background
  	//write in a slow fade "you'ss never escape!"
  	$("#myTextArea, #myHeader, #clickIfYouDare").hide();
  	$("body").css("background-color","black");
  	$("body").append("<h1 id='scaryMessage'>YOU'LL NEVER ESCAPE!!!</h1>");
  	$("#scaryMessage").hide();
  	$("#scaryMessage").css("color","white");
  	$("#scaryMessage").fadeIn(4000);

  });





  //
})