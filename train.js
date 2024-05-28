// 

function SameLetters(str1, str2) {
    const sortedStr1 = str1.split('').sort().join('');
    const sortedStr2 = str2.split('').sort().join('');

    return sortedStr1 === sortedStr2;
}


console.log(SameLetters("listen", "silent")); 
console.log(SameLetters("hello", "olleh")); 
console.log(SameLetters("abc", "cba")); 
console.log(SameLetters("abcd", "abcc")); 




// MITASK-C 

// Shunday class tuzing tuzing nomi Shop, va uni constructoriga 3 hil mahsulot pass bolsin, hamda classning 3ta methodi bolsin, biri qoldiq, biri sotish va biri qabul. Har bir method ishga tushgan vaqt ham log qilinsin.
// MASALAN: const shop = new Shop(4, 5, 2); shop.qoldiq() return hozir 20:40da 4ta non, 5ta lagmon va 2ta cola mavjud! shop.sotish('non', 3) & shop.qabul('cola', 4) & shop.qoldiq() return hozir 20:50da 1ta non, 5ta lagmon va 6ta cola mavjud!

// class Shop {
//     constructor(sariyog, banan, choy) {
//         this.products = {
//             sariyog: sariyog,
//             banan: banan,
//             choy: choy
//         };
//     }

//     logTime() {
//         const now = new Date();
//         return `Hozirgi vaqt: ${now.toLocaleTimeString()}`;
//     }

//     qoldiq() {
//         console.log(`${this.logTime()}da ${this.products.sariyog}ta sariyog, ${this.products.banan}ta banan va ${this.products.choy}ta choy mavjud!`);
//     }

//     sotish(product, quantity) {
//         console.log(this.logTime());
//         if (this.products[product] !== undefined) {
//             if (this.products[product] >= quantity) {
//                 this.products[product] -= quantity;
//                 console.log(`${quantity}ta ${product} sotildi.`);
//             } else {
//                 console.log(`Yetarli ${product} yo'q, ${quantity}ta sotish mumkin emas.`);
//             }
//         } else {
//             console.log(`${product} mahsuloti mavjud emas.`);
//         }
//         this.qoldiq();
//     }

//     qabul(product, quantity) {
//         console.log(this.logTime());
//         if (this.products[product] !== undefined) {
//             this.products[product] += quantity;
//             console.log(`${quantity}ta ${product} qabul qilindi.`);
//         } else {
//             console.log(`${product} mahsuloti mavjud emas.`);
//         }
//         this.qoldiq();
//     }
// }

// const shop = new Shop(4, 5, 2);

// shop.qoldiq(); // Hozirgi inventarizatsiyani va vaqtni log qiladi
// shop.sotish('sariyog', 3); // 3ta sariyog sotadi, vaqtni log qiladi va inventarizatsiyani yangilaydi
// shop.qabul('choy', 4); // 4ta choy qabul qiladi, vaqtni log qiladi va inventarizatsiyani yangilaydi
// shop.qoldiq(); // Qayta inventarizatsiyani va vaqtni log qiladi



// B-TASK: 

// Shunday function tuzing, u 1ta string parametrga ega bolsin, hamda osha stringda qatnashgan raqamlarni sonini bizga return qilsin.
// MASALAN countDigits("ad2a54y79wet0sfgb9") 7ni return qiladi.
// function countDigits(str) {
//     let count = 0; 
//     for (let i = 0; i < str.length; i++) { 
//         if (!isNaN(str[i]) && str[i] !== ' ') { 
//             count++; 
//         }
//     }
//     return count; 
// }


// console.log(countDigits("Bu MIT 12")); 
// console.log(countDigits("rodak099")); 
// console.log(countDigits("Salom MIT 08")); 
// console.log(countDigits("Nomerimni oxiri 4474")); 

// A-TASK: 

// Shunday 2 parametrli function tuzing, hamda birinchi parametrdagi letterni ikkinchi parametrdagi sozdan qatnashga sonini return qilishi kerak boladi.
// MASALAN countLetter("e", "engineer") 3ni return qiladi.
// function countLetter(letter, word) {
//     let count = 0;
//     for (let i = 0; i < word.length; i++) {
//         if (word[i] === letter) {
//             count++;
//         }
//     }
//     return count;
// }

// console.log(countLetter("e", "example")); // Output: 3
// console.log(countLetter("n", "driver")); // Output: 0
// console.log(countLetter("x", "carpenter")); // Output: 0


// console.log('train task ishga tushdi');
// console.log("Jack Ma maslahatlari");
// const list = [
// "yahshi talaba boling",
// "togri boshliq tanlang va koproq hato qiling", // 20-30
// "uzingizga ishlashingizni boshlang", // 30-40
// "siz kuchli bolgan narsalarni qiling", // 40-50
// "yoshlarga investitsiya qiling",
// // 50-60
// "endi dam oling, foydasi yoq endi", // 60
// ];

// CALLBACK function
// function maslahatBering(a, callback) {
//     if(typeof a !== "number") callback("insert a number", null);
//     else if (a <= 20) callback(null,list[0]);
//     else if(a > 20 && a <= 30) callback(null, list[1]);
//     else if(a > 30 && a <= 30) callback(null, list[2]);
//     else if(a > 40 && a <= 30) callback(null, list[3]);
//     else if(a > 50 && a <= 30) callback(null, list[4]);
//     else {
//         setInterval(function () {
//        callback(null, list[5]);
//     }, 1000);
// }
    
// }
// console.log("passed here 0");
// maslahatBering(25, (err, data) => {
//     if(err) console.log('ERROR:', err);
//     else {
//     console.log("javob:",data);
//     }
// } );
// console.log("passed here 1");

// ASYNC FUNCTION
// async function maslahatBering(a) {
//     if(typeof a !== "number") throw new Error("insert a number");
//     else if (a <= 20) return list[0];
//     else if(a > 20 && a <= 30) return list[1];
//     else if(a > 30 && a <= 40) return list[2];
//     else if(a > 40 && a <= 50) return list[3];
//     else if(a > 50 && a <= 60) return list[4];
//     else {
//         return new Promise((resolve, reject) => {
//                      setTimeout(() => {
//                 resolve(list[5]);
//             }, 5000);
//         });
// }
    
// }
// call via then/catch
// console.log("passed here 0");
// maslahatBering(20)
// .then(data => {
//     console.log("javob:", data);
// })
// .catch(err => {
//     console.log("ERROR:", err);
// });
// console.log("passed here 1");

// async/await
// async function run() {
//     let javob = await maslahatBering(65);
//     console.log(javob);
//     javob = await maslahatBering(31);
//     console.log(javob);
//     javob = await maslahatBering(41);
//     console.log(javob);
// }
// run();
