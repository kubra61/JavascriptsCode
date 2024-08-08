//alert("işleminize devam etmeden önce kaydetmelisiniz!");

// let isim = prompt("isminizi giriniz: ");
// let yas = prompt("yaşınızı giriniz:");

// console.log("isminiz:"+isim);
// console.log("yaşınız:"+yas)

//confirm("işlemi silmek istediğinizden eminmisiniz");

// let not = 35;

// if(not>50)
// {
//     console.log("geçtiniz! notunuz:"+not);
// }
// else
// {
//     console.log("kaldiniz! notunuz:"+not);
// }

// let yas=Number(prompt("yasiniz:"));
// let para=Number(prompt("bütceniz:"));

// if(yas>=18 && para>=3000)
// {
//     alert("ehliyet sinavina katilabilirsiniz");
// }
// else
// {
//     alert("ehliyet sinavina katilamazsiniz");
// }

// let vize1=Number(prompt("vize1 notu:"));

// let vize2=Number(prompt("vize2 notu:"));

// let final=Number(prompt("final notu:"));

// let ortalama=((vize1*30)/100)+((vize2*30)/100)+((final*40)/100);

// if(ortalama>=50)
// {
//     alert("dersi geçtiniz! ortalamaniz:"+ortalama);
//     console.log("dersi geçtiniz! ortalamaniz:"+ortalama);
// }
// else
// {
//     alert("dersden kaldiniz! ortalamaniz:"+ortalama);
//     console.log("dersden kaldiniz! ortalamaniz:"+ortalama);
// }

// let ad = prompt("ismimizi giriniz:");
// let tckn = prompt("tc nizi giriniz:");

// kontrolET(ad,tckn);

// function kontrolET(ad,tckn){

//     if(ad!=""){
//         if(tckn.length ==11){
//         console.log("isim ve tckn problemsiz girildi");
//         }
//         else{
//            console.log("lütfen tc nizi 11 karakter olarak giriniz");
//         }
//     }
//     else{
//         console.log("lütfen isim alanini boş birakmayiniz!!");
//     }

    
// }

let kilo = Number(prompt("kilonuzu giriniz:"));

let boy = Number(prompt("boyunuzu metre cinsinden giriniz:"));

let sonuc = kilo/(boy*2);

if(sonuc<18.5)
{
    console.log("ideal kilonun altinda "+sonuc);
}
else if(sonuc>=18.5 && sonuc<=24.9)
{
    console.log("ideal kilonun altinda "+sonuc);
}
else if(sonuz>=25 && sonuc<29.9)
{
    console.log("ideal kiloda "+sonuc);
}
else if(sonuc>=30 && sonuc<39.9)
{
    console.log("ideal kilonun üstünde(obez) "+sonuc);
}
else if(sonuc>=40)
{
    console.log("ideal kilonun çok üstünde(morbid obez) "+sonuc);
}

