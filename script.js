let sayilar = [1, 5, 7, 15, 3, 25, 12, 24];

// 1- sayilar listesindeki her bir elemanın karesini yazdırınız.
// let toplam = 0;
// for (i of sayilar) {
//   toplam = i * i;
//   console.log(toplam);
// }

// 2- sayilar listesindeki hangi sayılar 5' in katıdır?

// for (i of sayilar) {
//   if (i % 5 == 0) {
//     console.log(i);
//   }
// }

// 3- sayilar listesindeki çift sayıların toplamını bulunuz.

// let toplam = 0;
// for (i in sayilar) {
//   if (sayilar[i] % 2 == 0) {
//     toplam += sayilar[i];
//   }
// }
// console.log(toplam);

// let urunler = [
//   "iphone 12",
//   "samsung s22",
//   "iphone 13",
//   "samsung s23",
//   "samsung s20",
// ];

// // 4- urunler listesindeki tüm ürünleri büyük harf ile yazdırınız.

// for (let i = 0; i <= urunler.length; i++) {
//   console.log(urunler[i].toUpperCase());
// }

// let ogrenciler = [
//   { ad: "yiğit", soyad: "bilgi", notlar: [60, 70, 60] },
//   { ad: "ada", soyad: "bilgi", notlar: [80, 70, 80] },
//   { ad: "çinar", soyad: "turan", notlar: [10, 20, 60] },
// ];

// // ogrenciler listesindeki her öğrencinin not ortalaması ve başarı durumlarını yazdırınız.

// for (let i = 0; i < ogrenciler.length; i++) {
//   console.log(
//     ogrenciler[i].ad +
//       " " +
//       ogrenciler[i].soyad +
//       " " +
//       " ortalama notunuz " +
//       parseInt(
//         ogrenciler[i].notlar.reduce((a, b) => a + b, 0) /
//           ogrenciler[i].notlar.length
//       )
//   );
// }

// let toplam_ortalama = 0;

// for (let i = 0; i < ogrenciler.length; i++) {
//   toplam_ortalama +=
//     ogrenciler[i].notlar.reduce((a, b) => a + b, 0) /
//     ogrenciler[i].notlar.length;
// }
// console.log(toplam_ortalama);
// // tüm öğrencilerin not ortalaması kaçtır?

// OBJELER İLE İLGİLİ ALIŞTIRMALAR

/* 
    1- Siparis bilgilerini object içerisinde saklayiniz.
    2- Her siparisin ayri ayri kdv dahil toplam ödenen ucretini hesaplayiniz. (kdv: %18)
    3- Tum siparislerin kdv dahil toplam ödenen ucretini hesaplayiniz.

    siparis id: 101
    siparis tarihi: 31.12.2022
    ödeme sekli: kredi karti
    kargo adresi: Yahya kaptan mah. Kocaeli İzmit
    satin alinan urunler: 
        urun id: 5
        urun basliği: IPhone 13 Pro
        urun url: http://abc.com/iphone-13-pro
        urun fiyati: 22000

        urun id: 6
        urun basliği: IPhone 13 Pro Max
        urun url: http://abc.com/iphone-13-pro-max
        urun fiyati: 25000

    musteri:
        musteri id: 12
        
    satici:
        firma id: 34
        firma adi: Apple Turkiye

    siparis id: 102
    siparis tarihi: 30.12.2022
    ödeme sekli: kredi karti
    kargo adresi: Yahya kaptan mah. Kocaeli İzmit
    satin alinan urunler: 

        urun id: 6
        urun basliği: IPhone 13 Pro Max
        urun url: http://abc.com/iphone-13-pro-max
        urun fiyati: 25000

    musteri:
        musteri id: 12
        
    satici:
        firma id: 34
        firma adi: Apple Turkiye

*/

/*let siparis_1 = {
    "siparis_id": 101,
    "siparis_tarihi": "30.12.2022",
    "odeme_sekli": "kredi karti",
    "kargo_adresi": {
        "mahalle": "yahya kaptan",
        "ilce": "izmit",
        "sehir": "kocaeli"
    },
    "urunler": [
        {
            "urun_id": 5,
            "urun_adi": "IPhone 13 Pro",
            "urun_url": "http://abc.com/iphone-13-pro",
            "urun_fiyat": 22000
        },
        {
            "urun_id": 6,
            "urun_adi": "IPhone 13 Pro Max",
            "urun_url": "http://abc.com/iphone-13-pro-max",
            "urun_fiyat": 25000
        }
    ]
};

let siparis_2 = {
    "siparis_id": 102,
    "siparis_tarihi": "30.12.2022",
    "odeme_sekli": "kredi karti",
    "kargo_adresi": {
        "mahalle": "yahya kaptan",
        "ilce": "izmit",
        "sehir": "kocaeli"
    },
    "urunler": [
        {
            "urun_id": 6,
            "urun_adi": "IPhone 13 Pro Max",
            "urun_url": "http://abc.com/iphone-13-pro-max",
            "urun_fiyat": 25000
        }
    ]
};

let siparis1_toplam = (siparis_1.urunler[0].urun_fiyat + siparis_1.urunler[1].urun_fiyat) * 1.18;
let siparis2_toplam = (siparis_1.urunler[0].urun_fiyat) * 1.18;

let toplam_siparis = siparis1_toplam + siparis2_toplam;

console.log("siparis 1: " + siparis1_toplam);
console.log("siparis 2: " + siparis2_toplam);

console.log("toplam ödenen miktar: " , toplam_siparis);

let siparisler = [siparis_1, siparis_2];

*/
let siparis_1 = {
  "siparis id": 101,
  "siparis tarihi": "31.12.2022",
  "ödeme sekli": "Kredi karti",
  "kargo adresi": "Yahya kaptan mah. Kocaeli İzmit",
  "satin alinan urunler": [
    {
      "urun id": 5,
      "urun basliği": "IPhone 13 Pro",
      "urun url": "http://abc.com/iphone-13-pro",
      "urun fiyati": 22000,
    },
    {
      "urun id": 6,
      "urun basliği": "IPhone 13 Pro Max",
      "urun url": "http://abc.com/iphone-13-pro-max",
      "urun fiyati": 25000,
    },
  ],
  musteri: {
    "musteri id": 12,
    "musteri adi": "Burak Yetis",
  },
  satici: {
    "firma id": 34,
    "firma adi": "Apple Turkiye",
  },
};

let siparis_2 = {
  "siparis id": 102,
  "siparis tarihi": "30.12.2022",
  "ödeme sekli": "Kredi karti",
  "kargo adresi": "Yahya kaptan mah. Kocaeli İzmit",
  "satin alinan urunler": [
    {
      "urun id": 6,
      "urun basliği": "IPhone 13 Pro Max",
      "urun url": "http://abc.com/iphone-13-pro-max",
      "urun fiyati": 25000,
    },
  ],
  musteri: {
    "musteri id": 12,
    "musteri adi": "Burak Yetis",
  },
  satici: {
    "firma id": 34,
    "firma adi": "Apple Turkiye",
  },
};

let siparis_1_tutar =
  siparis_1["satin alinan urunler"][0]["urun fiyati"] +
  siparis_1["satin alinan urunler"][1]["urun fiyati"];
let siparis_1_kdv = siparis_1_tutar * 1.18;

console.log(siparis_1_kdv);

let siparis_2_tutar = siparis_2["satin alinan urunler"][0]["urun fiyati"];
let siparis_2_kdv = siparis_2_tutar * 1.18;
let toplam_tutar = siparis_1_kdv + siparis_2_kdv;

console.log(toplam_tutar);
