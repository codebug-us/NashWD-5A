$(document).ready(function(){
  // your code goes below
// $("textarea").keypress(function(){
// console.log("key pressed in textarea");

// });
$("textarea").keypress(function(event){
var letter = event.key;
console.log(letter);

});

})