var randomNumber1=Math.floor(Math.random()*6)+1;
var randomImage="dice"+randomNumber1+".png";
var randomSource="images/"+randomImage;


var image1=document.querySelectorAll("img")[0];

image1.setAttribute("src",randomSource);


var randomNumber2=Math.floor(Math.random()*6)+1;
var randomImage2="dice"+randomNumber2+".png";
var randomSource2="Images/"+randomImage2;

var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",randomSource2);


if(randomImage>randomImage2){
   document.querySelector("h1").innerHTML="player 1 wins";
   
}
else if(randomImage<randomImage2){
   document.querySelector("h1").innerHTML="player 2 wins";
 
}
else{
document.querySelector("h1").innerHTML="Draw!";
}
var refreshButton = document.getElementById("refreshButton");
    refreshButton.addEventListener("click", function() {
        location.reload();
    });
// document.addEventListener("DOMContentLoaded", function() {

//     var refreshButton = document.getElementById("refreshButton");
//     refreshButton.addEventListener("click", function() {
//         location.reload();
//     });
// });