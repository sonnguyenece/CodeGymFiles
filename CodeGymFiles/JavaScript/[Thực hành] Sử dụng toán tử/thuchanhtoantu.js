
let inputWidth;
let inputHeight;
inputWidth = prompt("Enter the width");
inputHeight = prompt("Enter the height");
let width = parseInt(inputWidth);
let height = parseInt(inputHeight);
let area = width * height;
document.getElementById("1").innerHTML="Enter width:<br>" +width;
document.getElementById("2").innerHTML="Enter height:<br>" +height;
if(area>=0)
document.getElementById("3").innerHTML="The area is: " +area;
if(width<0||height<0)
document.getElementById("3").innerHTML="Wrong input"

