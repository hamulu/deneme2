//object oluşturma
//key ve value
const ogrenciler=

   {
        
            ad:"Ahmet",
            soyad:"Yılmaz",
            no:125,
            adres:
            {
                sokak:"kartal",
                mahalle:"ayazağa",
                ilce:"sarıyer",
                il:"istanbul",
            },
            velibilgileri:
            {
                ad:"Ayşe",
                soyad:"Yılmaz"
            },
            eposta:["ahmet@gmail.com","ahmet@outlook.com"],
            okulagit:function(){
                return "okula gidiyorum"
            },
            cinsiyet:"erkek",
            dogumtarihi:{gun:"15",ay:"08",yil:"2000"},
            aktifogrencimi:true
        };
      
           
    


//JSON : Javascript Object Notation

//XML 

//platformdan bağımsız,
//dilden bağımsız kullanılabilir

console.log(ogrenciler.okulagit());

//Karar Yapıları

/*
<
>
<=
>=
==
!=
=== tip ve değer eşitmi
!== tip veya değer eşit değilmi
&&
||
!
*/

if(1<2)
{
console.log("1 küçüktür.")
}

// if(2!="2")
// {
// console.log("doğru");
// }
// else{
//     console.log("yanlış");
// }

console.log(2!="2" ? "doğru" : "yanlış");


console.log(10<20);

// şart ? doğruysa yapılacaklar : yanlışsa yapılacaklar
//ternary operatörü

const sonuc=(2<3) ? "2 3den küçüktür" : "2 3 den büyüktür";

console.log(sonuc);

var degisken=3;
switch (degisken) {
    case 1:
        console.log(`ilk case çalıştı,değişkenin değeri${degisken}`);
        break;
    case 2:
        console.log(`ikinci case çalıştı,değişkenin değeri${degisken}`);
    break;
    case 3:
        //console.log(`üçüncü case çalıştı,değişkenin değeri${degisken}`);
        //document.write(`üçüncü case çalıştı,değişkenin değeri${degisken}`);
        alert(`üçüncü case çalıştı,değişkenin değeri${degisken}`);
    break;
    default:
        console.log("hiç bir case çalışmadı");
        break;
}


function selamver(){
    console.log("selamlar");
}

const merhaba_de=function(){

    console.log("merhaba");
}

function karekokal(sayi=16,dogrumu,kelime){
   // console.log(sayi);//undefined
   console.log(`Parametreler: ${sayi} ${dogrumu} ${kelime}`);
    return Math.sqrt(sayi);//Nan=not a number

}
selamver();
merhaba_de();
//undefined=tanımsız
var cevap=karekokal(36,"atp11b",true);
console.log(cevap);

(function(taban,us=2){//IIFE Immediately Invoked Function Expression = Tanımlandığı yerde hemen çalışan fonksiyon
    //console.log("ben tanımlandığım yerde çalışıyorum");
    console.log(Math.pow(taban,us));
})(10);

