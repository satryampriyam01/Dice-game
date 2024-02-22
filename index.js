

function helper(){
var randomNumber1=(Math.floor(Math.random()*6))+1;
var randomNumber2=(Math.floor(Math.random()*6))+1;


var dice=document.getElementsByClassName("img1");
var url="./images/dice"+randomNumber1+".png"
dice[0].setAttribute('src',url);

var dice=document.getElementsByClassName("img2");
var url="./images/dice"+randomNumber2+".png"
dice[0].setAttribute('src',url);

if(randomNumber1>randomNumber2)
{
    document.querySelector("h1").innerHTML="Player 1 is the Winner"
}
else if(randomNumber1<randomNumber2)
{
    
    document.querySelector("h1").innerHTML="Player 2 is the Winner"
}
else
{
    
    document.querySelector("h1").innerHTML="Player 1  and Player 2 both are Winners"
}

}


document.querySelector("h1").onclick=helper();

