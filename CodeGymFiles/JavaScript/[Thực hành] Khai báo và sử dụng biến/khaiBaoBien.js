function Bai3()
{
    let a = prompt('nhap a tu ban phim');
    let  b = prompt('nhap b tu ban phim');
    let c = a%b;
    if (c==0)
    {
        alert("a la boi so cua b")
        document.getElementById("d6").innerText=("a la boi so cua b");
    }
    else
    {   alert("a khong phai la boi so cua b");
        document.getElementById("d6").innerHTML=(+a+ " khong phai la boi so cua" + b );
    }
}

function Bai2()
{
    let width = 20;
    let height = 10;
    let area = width*height;
    document.getElementById("d5").innerText=("Area =" +area);
}
function Bai1()
{   let i=10;
    let f=20.5;
    let b= true;
    let s= 'Ha Noi';
    document.getElementById("diachi1").innerText="i = "+i;
    document.getElementById("d2").innerText="f = "+f;
    document.getElementById("d3").innerText="b = "+b;
    document.getElementById("d4").innerText="s = "+s;
}