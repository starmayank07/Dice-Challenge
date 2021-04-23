var randomNum1 = Math.floor(Math.random()*6) + 1;
var randomSrc1 = "images/" + "dice" + randomNum1 + ".png";
document.querySelectorAll("img")[0].setAttribute("src",randomSrc1);

var randomNum2 = Math.floor(Math.random()*6) + 1;
var randomSrc2 = "images/" + "dice" + randomNum2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src",randomSrc2);

if(randomNum1>randomNum2){
  document.querySelector("h1").innerHTML = "🏁Player 1 Wins!";
}
else if (randomNum2>randomNum1) {
  document.querySelector("h1").innerHTML = "Player 2 Wins!🏁";
}
else {
  document.querySelector("h1").innerHTML = "Draw!";
}
