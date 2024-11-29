// ex1 text show
 function textShow(){
 document.getElementById('st').innerHTML="Hello World";
 } 
// ex2 show date
 function showDate(){
    document.getElementById('sd').innerHTML=Date();
    } 
// ex3 text change
 function changeText(){
   document.getElementById('ct').innerHTML="Hello World";
   } 
// ex4 img change
function bulbOn(){
   document.getElementById('boo').src="images/on.gif";

}
function bulbOff(){
   document.getElementById('boo').src="images/off.gif";
   
}
// ex5 css change
function changeColor(){
   document.getElementById('color').style.color="red";
   
}
// ex6 show hide
function showItem(){
   document.getElementById('sh').style.display="block";
   
}
function hideItem(){
   document.getElementById('sh').style.display="none";
   
}
// ex7 math
function showMath(){
   document.getElementById('mt').innerHTML=5+9;
   
}
// ex8 print
function printPage(){
   window.print()
   
}
