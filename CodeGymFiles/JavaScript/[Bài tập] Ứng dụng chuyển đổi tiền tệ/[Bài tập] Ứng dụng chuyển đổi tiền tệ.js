function Transfer()
{
let a= document.getElementById("amount").value;
let b= document.getElementById("fc").value;
let c= document.getElementById("tc").value;
let result= a*(c/b);
document.getElementById("1").innerHTML=" <b>Ket qua :<b>"+result;
}