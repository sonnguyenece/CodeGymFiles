function Ex1()
{
    let scoreMath = null;
    let scorePhys = null;
    let scoreChem = null;
    scoreMath=prompt("Nhap vao diem Toan");
    scorePhys=prompt("Nhap vao diem Ly");
    scoreChem=prompt("Nhap vao diem Hoa");
    let Math= parseInt(scoreMath);
    let Phys= parseInt(scorePhys);
    let Chem= parseInt(scoreChem);
    let sum = Chem+Phys+Math;
    let avg= (sum/3).toFixed(1);
document.getElementById("Phys").innerHTML="Diem Vat Ly: "+Phys;
document.getElementById("Math").innerHTML="Diem Toan: "+Math;
document.getElementById("Chem").innerHTML="Diem Hoa: "+Chem;

document.getElementById("a1").innerHTML="Tong diem 3 mon: "+sum;
document.getElementById("a2").innerHTML="Diem trung binh 3 mon: "+avg;
}

function Ex2()
{
    let Cels=prompt("Nhap vao gia tri Nhiet do theo do C: ")
    let Celsi=parseInt(Cels);
    let Fahr=((9*Celsi/5)+32).toFixed(1);
document.getElementById("Temp").innerHTML="Nhiet do theo do C: "+Celsi;
document.getElementById("Temp1").innerHTML="Nhiet do theo do F: "+Fahr;
}

function Ex3()
{
let R =parseFloat( document.getElementById("radius").value);
let pi=parseFloat(3.14);
let peri = (2*R*pi).toFixed(4);
let area =(pi*R*R).toFixed(4);
document.getElementById("Perimeter").innerHTML=""+peri;
document.getElementById("Area").innerHTML=""+area;
}


