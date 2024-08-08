// let dizel = 24.53 , benzin = 22.25 , lpg = 11.1;
// const yeniSatir = "\r\n";

// const yakitMetni = "1-Dizel"+yeniSatir
// +"2-benzin"+yeniSatir
// +"3-LPG"+yeniSatir
// +"yakıt türünü seçiniz";

// let yakitTipi = prompt(yakitMetni);
// let yakitLitresi = Number(prompt("yakıt litresini giriniz"));
// let bakiye = Number(prompt("bakiyenizi giriniz"));

// if(yakitTipi==1)
// {
//     //dizel
//     let odenecekTutar=dizel*yakitLitresi;
//     let kalanBakiye= bakiye-odenecekTutar;
//     if(odenecekTutar<bakiye)
//     {
//         console.log("bakiyeniz yeterli");
//         console.log("ödenecek tutar: "+odenecekTutar);
//         console.log("kalan bakiyeniz: "+kalanBakiye);
//     }
//     else
//     {
//         alert("bakiyeniz yeterli değil");
//     }
// }
// else if(yakitTipi==2)
// {
//     //benzin
//     let odenecekTutar=benzin*yakitLitresi;
//     let kalanBakiye= bakiye-odenecekTutar;
//     if(odenecekTutar<bakiye)
//     {
//         console.log("bakiyeniz yeterli");
//         console.log("ödenecek tutar: "+odenecekTutar);
//         console.log("kalan bakiyeniz: "+kalanBakiye);
//     }
//     else
//     {
//         alert("bakiyeniz yeterli değil");
//     }
// }
// else if(yakitTipi==3)
// {
//     //lpg
//     let odenecekTutar=lpg*yakitLitresi;
//     let kalanBakiye= bakiye-odenecekTutar;
//     if(odenecekTutar<bakiye)
//     {
//         console.log("bakiyeniz yeterli");
//         console.log("ödenecek tutar: "+odenecekTutar);
//         console.log("kalan bakiyeniz: "+kalanBakiye);
//     }
//     else
//     {
//         alert("bakiyeniz yeterli değil");
//     }
// }
// else
// {
//    alert("geçerli bir yakıt giriniz!");
// }

// let sayi = prompt("1 ile 4 arasinda bir 3sayi giriniz:");

// switch(sayi)
// {
//     case "1":
//          console.log("girilen sayi 1 dir");
//     break;

//     case "2":
//          console.log("girilen sayi 2 dir");
//     break;

//     case "3":
//         console.log("girilen sayi 3 tür");
//     break;

//     case "":
//         console.log("girilen sayi 4 tür");
//     break;
    
//     default:
//     console.log("girilen sayi 1-4 arasinda olmali")
//     break;

// }

// let bakiye=1000;

// const yeniSatir="\r\n";

// const metin= "1-Bakiye görüntüleme"+yeniSatir
// +"2-Para çekme"+yeniSatir
// +"3-Para yatırma"+yeniSatir
// +"4-çıkış"+yeniSatir
// +"yukarıdaki işlemlerden birini seçiniz";

// islemNo=prompt(metin)

// switch(islemNo)
// {
//     case "1":
//         console.log("mevcut bakiyeniz:"+bakiye)
//     break;
    
//     case "2":
//        cekilecekTutar=Number(prompt("çekmek istediğiniz tutarı giriniz:"));
//        if(cekilecekTutar<bakiye)
//        {
//         kalanTutar=bakiye-cekilecekTutar;
//         console.log("işlem başarıyla gerçekleşmiştir");
//         console.log("kalan bakiyeniz:"+kalanTutar);
//        }
//        else
//        {
//          console.log("yeterli bakiyeniz bulunmamaktadır.");
//        }
      
//     break;
    
//     case "3":
//         yatirilanTutar=Number(prompt("yatırmak istediğiniz tutari giriniz:"));
//         toplamBakiye=bakiye+yatirilanTutar;
//         console.log("işlem başarıyla gerçekleşmiştir");
//         console.log("toplam bakiyeniz:"+toplamBakiye);
//     break;

//     case "4":
//         alert("çıkış işleminiz gerçekleşmiştir");
//     break;

//     default:
//         alert("lütfen ekrandaki işlem numaralarından birini giriniz!");    

// }
