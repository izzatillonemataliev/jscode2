// 3Funksiyaga berilgan son tub bo’lsa true, aks holda false qaytarsin:
// function isPrime(n) {
//   if (n <= 1) {
//     return false;
//   }

//   for (let i = 2; i <= Math.sqrt(n); i++) {
//     if (n % i === 0) {
//       return false;
//     }
//   }

//   return true;
// }
// let raqam = +prompt("Raqam kirting");
// console.log(isPrime(raqam));

// 4. Berilgan array ichidagi ma’lumotlardan yangi object yasab qaytaring. Functionga so’ralgan argumentlar kiritish orqali.

// const country = [
//     { country: "Belarus", city: "Brest" },
//     { country: "Russia", city: "Omsk" },
//     { country: "Russia", city: "Samara" },
//     { country: "Belarus", city: "Grodno" },
//     { country: "Belarus", city: "Minsk" },
//     { country: "Poland", city: "Lodz" },
//   ];
//   function organizeCitiesByCountry(arr) {
//     let result = {};

//     arr.forEach((item) => {
//       if (!result[item.country]) {
//         result[item.country] = [];
//       }
//       result[item.country].push(item.city);
//     });

//     return result;
//   }

//   const data = [
//     { country: "Belarus", city: "Brest" },
//     { country: "Russia", city: "Omsk" },
//     { country: "Russia", city: "Samara" },
//     { country: "Belarus", city: "Grodno" },
//     { country: "Belarus", city: "Minsk" },
//     { country: "Poland", city: "Lodz" },
//   ];
//   console.log(organizeCitiesByCountry(data));

// 5. n1 va n2 orasidagi butun sonlar yig‘indisini qaytaring.
// function getSumBetweenNumbers(n1, n2) {
//     // your code
// }
// function getSumBetweenNumbers(n1, n2) {
//   let sum = 0;
//   if (n1 > n2) {
//     [n1, n2] = [n2, n1];
//   }
//   for (let i = n1; i <= n2; i++) {
//     sum += i;
//   }
//   return sum;
// }
// console.log(getSumBetweenNumbers(1, 2));
// console.log(getSumBetweenNumbers(5, 10));
// console.log(getSumBetweenNumbers(-1, 1));

// 6. n ta elementdan tashkil topgan arr nomli massiv berilgan. Massiv elementlari orasidan faqat 1 marta ishtirok etganlaridan iborat yangi massiv qaytaruvchi getElementsOneTime(arr) nomli funksiya tuzing.

// function getElementsOneTime(arr) {
//   let element = [];
//   let raqam = {};

//   for (let i = 0; i < arr.length; i++) {
//     let element1 = arr[i];
//     if (!raqam[element1]) {
//       raqam[element1] = true;
//       element.push(element1);
//     }
//   }
//   return element;
// }

// let arr = [1, 5, 6, 1, 5, 7, 2];
// let yangiArr = getElementsOneTime(arr);
// console.log(yangiArr);

// 7. n ta elementdan tashkil topgan massiv berilgan. Massiv elementlari orasidan bir xil qo'shnilarning birini o'chiruvchi programma tuzilsing.

// const numbers = [3, 5, 3, 5, 6, 7, 8, 5, 4, 5, 4, 7];
// const OneNumbers = [];
// for (let i = 0; i < numbers.length; i++) {
//   if (!OneNumbers.includes(numbers[i])) {
//     OneNumbers.push(numbers[i]);
//   }
// }
// console.log(OneNumbers);

// 8. n ta elementdan tashkil topgan massiv va k, m butun sonlari berilgan (0< k < m < n). Indeksi k dan m gacha bo'lgan elementlarni o'chiruvchi programma tuzilsin. Hosil bo'lgan massiv elementlar soni va elementlari chiqarilsin.

// function removeElementsBetween(arr, k, m) {
//   if (k >= m || m >= arr.length) {
//     return "Noto'g'ri indekslar kiritildi.";
//   }
//   arr.splice(k, m - k + 1);
//   let resultLength = arr.length;
//   let resultElements = arr.join(", ");

//   return { length: resultLength, elements: resultElements };
// }
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let k = 2;
// let m = 5;
// let result = removeElementsBetween(arr, k, m);
// console.log(result.length);
// console.log(result.elements);

// 9. Quyidagi ko'rinishda objectlarlardan tuzilgan massiv beriladi. Agar alreadyRead propertysi true bo'lsa o'sha kitob o'qigan deb chiqarilsin, aks holda o'qilmagan.

// const books = [
//     {
//       title: "Halqa",
//       author: "Akrom Malik",
//       alreadyRead: false,
//     },
//     {
//       title: "Dunyo ishlari",
//       author: "O'tkir Hoshimov",
//       alreadyRead: true,
//     },
//     {
//       title: "Vaqtning qadri",
//       author: "Abdulfattoh Abu G'udda",
//       alreadyRead: false,
//     },
//   ]

//   function alreadyRead(books) {
//   books.forEach((book) => {
//     if (book.alreadyRead) {
//       console.log(`${book.author}ning ${book.title} kitobi o'qiglan`);
//     } else {
//       console.log(`${book.author}ning ${book.title} kitobi o'qilmagan`);
//     }
//   });
// }

// alreadyRead(books);

// 10. Mahsulotlar massividagi objectlarni sonini, chegirmasini hisobga olib, umumiy summani hisoblang.

// 