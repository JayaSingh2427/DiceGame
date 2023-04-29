/*for first dice*/
var randomNo1=Math.floor(Math.random()*6)+1;

var img1="images//"+"dice"+randomNo1+".png";

document.querySelectorAll("img")[0].setAttribute("src",img1);

/*for second dice*/
var randomNo2=Math.floor(Math.random()*6)+1;

var img2="images//"+"dice"+randomNo2+".png";

document.querySelectorAll("img")[1].setAttribute("src",img2);

if(randomNo1>randomNo2)
{
    document.querySelector("h1").innerHTML="Player1 Wins";
}
else if(randomNo1<randomNo2)
{
    document.querySelector("h1").innerHTML="Player2 Wins";
}
else if(randomNo1===randomNo2)
{
    document.querySelector("h1").innerHTML="Its Draw";
}