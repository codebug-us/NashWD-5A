$(document).ready(function(){
  // your code goes below
  console.log("loaded");
  $("textarea").keypress(function(event){
  	var letter =event.key;
  	console.log(letter);
  })
})