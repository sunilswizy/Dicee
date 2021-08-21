
var player1 = Math.floor(Math.random() * 6 + 1 )
var player2 = Math.floor(Math.random() * 6 + 1 )

document.querySelectorAll("img")[0].setAttribute("src",`images/dice${player1}.png`)
document.querySelectorAll("img")[1].setAttribute("src",`images/dice${player2}.png`)

var heading = document.querySelector("h1");

if(player1 === player2){
    heading.innerHTML="Draw";
}
else if(player1 > player2){
  heading.innerHTML="🚩 player1 wins";
}
else{
  heading.innerHTML="player2 wins 🚩 ";
}
