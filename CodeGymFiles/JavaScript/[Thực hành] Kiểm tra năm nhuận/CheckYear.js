let Year= parseInt(prompt("Nhap nam :"));
let NamNhuan=null;

if (Year%4==0){
    if (Year % 100 == 0) {
        if (Year % 400 == 0){ NamNhuan = true;}
    }else NamNhuan =true;
}

if (NamNhuan) {
    alert(Year + " la nam nhuan");
    document.getElementById("pos1").innerText=Year + " la nam nhuan";
} else {
    alert(Year + " khong phai la nam nhuan.");
    document.getElementById("pos2").innerText=Year + " khong phai la nam nhuan";
}




