   //creating the random variable 1//
var randomnumber1=Math.random();
randomnumber1=Math.floor(randomnumber1*6)+1;
console.log(randomnumber1);

//changing the image from dice1-dice6 on the basis of random  number created//
var randomimagesource="images/dice" +randomnumber1+ ".png";
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",randomimagesource);

//now doing the same for image 2


var randomnumber2=Math.random();
randomnumber2=Math.floor(randomnumber2*6)+1;
console.log(randomnumber2);


var randomimagesource2="images/dice" +randomnumber2+ ".png";
var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",randomimagesource2);


//deciding the winner

if(randomnumber1 > randomnumber2)
{
  document.querySelector("h1").innerHTML="player1 wins";
}
else if (randomnumber2 > randomnumber1) {
  document.querySelector("h1").innerHTML="player 2 wins";

}
else{
  document.querySelector("h1").innerHTML="there is a tie";
}
