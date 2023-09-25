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
