// let yas=23;
// do{
//     console.log("normal araç ehliyeti alabilirsinzi")
// }while(yas>=25){
//     console.log("büyük araç ehliyeti alabilirsiniz");
// }

// let sayac = 1;

// while(sayac<=10){
//     console.log(sayac);
//     if(sayac==8){
//         break;
//     }
//     sayac++;
// }

// let sayac=0;

// while(sayac<=10){
//     sayac++;
//     if(sayac>10){
//         break;
//     }
//     if(sayac==8){
//         continue;
//     }
//     console.log(sayac);
// }

// for(let i = 1; i<=10; i++)
// {
//    for(let j =1; j<=10; j++)
//    {
//     console.log(i+"x"+j+"="+(i*j));
//    }
//    console.log("---------------------------------");
// }

let sayi = Number(prompt("Bir sayı giriniz:"));
let sayac = 0;

if (sayi <= 1)
 {
  alert("Girilen sayı asal değildir.");
 } 
 else 
 {
  for (let i = 2; i < sayi; i++) {
    if (sayi % i === 0) {
      sayac++;
      break; // Bir bölen bulduysak döngüyü sonlandırabiliriz
    }
  }

  if (sayac === 0) {
    alert("Girilen sayı asaldır.");
  } else {
    alert("Girilen sayı asal değildir.");
  }
}

