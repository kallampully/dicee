var randomNumber=Math.floor(6*Math.random())+1;
var randomNumbers=Math.floor(6*Math.random())+1;


document.querySelector("img.img1").setAttribute("src","dice"+randomNumber+".png");
document.querySelector("img.img2").setAttribute("src","dice"+randomNumbers+".png");
if(randomNumber>randomNumbers){document.querySelector("h1").innerText="player 1 Wins";}
else if(randomNumber<randomNumbers){document.querySelector("h1").innerText="Player 2 Wins";}
else{document.querySelector("h1").innerText="Draw";}
