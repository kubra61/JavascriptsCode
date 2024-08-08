// const yeniSatir="\r\n";
// const metin="1-TYT net hesaplama"+yeniSatir
// +"2-Çıkış işlemi"+yeniSatir
// +"yukarıdaki işlemlerden birini seçiniz";

// let soru = prompt(metin);

// let turkçeSoru = 40; 
// let MatSoru = 40;
// let sosSoru = 20;
// let fenSoru = 20;

// switch(soru)
// {
//     case "1":
//         turkceDog = Number(prompt("turkçe doğrunuzu giriniz:"));
//        turkyanlis = turkçeSoru - turkceDog;
//        turkceNet = turkceDog -(turkyanlis/4);
//        turkpuan = turkceNet*4;

//         matDog = Number(prompt("metenatik doğrunuzu giriniz:"));
//         matYanlis= MatSoru - matDog;
//         matNet=(matDog - (matYanlis/4));
//         matpuan =matNet*4;

//         sosdog =  Number(prompt("sosyal doğrunuzu giriniz:"));
//         sosyanlis = sosSoru - sosdog;
//         sosnet=(sosdog - (sosyanlis/4));
//         sospuan =sosnet*4;

//        fendog = Number(prompt("fen goğrunuzu giriniz:"));
//        fenyanlis = fenSoru - fendog;
//        fennet = (fendog - (fenyanlis/4));
//        fenpuan = fennet*4;

//        topTYTpuan=turkpuan+matpuan+sospuan+fenpuan;
       
//        console.log("türkçe netiniz ve puanınız:"+turkceNet , +turkpuan);
//        console.log("matematik netiniz ve puanınız:"+matNet , +matpuan);
//        console.log("sosyal netiniz ve puanınız:"+sosnet , +sospuan);
//        console.log("fen netiniz ve puanınız:"+fennet , +fenpuan);
//        console.log("----------");
//        console.log("toplam TYT puanınız:"+topTYTpuan);

//     break;
    
//     case "2":
//         alert("çıkış işleminiz başarıyla gerçekleşmiştir");
        
//     break;
    
//     default:
//         alert("yukarıdaki işlemlerden birini seçiniz!");

// }

// for(let i=1; i<=10; i++)
// {
//     console.log(i);
// }

// for(let i=0; i<=10;i+=2)
// {
//     console.log(i);
// }

// for(let i=0; i<=10; i++)
// {
//     if(i%3==0)
//     {
//         console.log("enes");
//     }
//     else
//     {
//         console.log("naber");
//     }
// }

// let toplam = 0;
// for(let i=50; i>=1; i--)
// {
//     console.log(i);
//     toplam=toplam+i;
// }
// console.log("toplam:"+toplam);

// let sayac=0;

// while(sayac<=10)
// {
//     if(sayac%2==0)
//     {
//         console.log(sayac);
//     }
//     sayac++;
// }

sayac=0;
while(true)
{  
   if(sayac==7)
   {
    break;
   }
   
   console.log(sayac);
   sayac++;
}