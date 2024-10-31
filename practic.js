
// const x = "Rostya" +" " + "Nelya";
// console.log(x);

// ================================================================

// let cost;
// const subscription = "free";

// switch (subscription) {
//   case "free":
//     cost = 0;
//     break;

//   case "pro":
//     cost = 100;
//     break;

//   case "premium":
//     cost = 500;
//     break;

//   default:
//     console.log("Invalid subscription type");
// }

// console.log(cost);

// =================================================================

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   isPublic: true,
//   rating: 8.38,
// };
// const butlе = "PEPSI";
// console.log(book.genres.indexOf("adventure"));
// console.log(book.genres.join(", "));
// console.log(butlе);
// console.log(book.isPublic);

// let public = book.isPublic;
// console.log(public);
// public = false;
// console.log(public);

// for (const key in book) {
//   // Ключ
//   console.log(key);
//   // Значення властивості з таким ключем
//   console.log(book[key]);
// }
// ==========================деструктирізація================================
// const firstBook = {
//     title: "The Last Kingdom",
//     coverImage:
//       "https://images-na.ssl-images-amazon.com/images/I/51b5YG6Y1rL.jpg",
//     isPublic: true,
//   };
  
//   const { title, isPublic, rating, coverImage, loweR } = firstBook;
//   console.log(rating);
//   console.log(isPublic);
 
// =============================================================================================
// const books = [
//     {
//       title: "The Last Kingdom",
//       author: "Bernard Cornwell",
//       rating: 8.38,
//     },
//     {
//       title: "На березі спокійних вод",
//       author: "Роберт Шеклі",
//       rating: 8.51,
//     },
//   ];
  
//   for (const book of books) {
//     console.log(book.title);
//     console.log(book.author);
//     console.log(book.rating);
//   }

//   for (const book of books) {
//     const { title, author, rating } = book;
  
//     console.log(title);
//     console.log(author);
//     console.log(rating);
//   }
// for (const { title, author, rating } of books) {
//     console.log(title);
//     console.log(author);
//     console.log(rating);
//   }

// ================================================================

// // Колбек-функція
// function greet(name) {
//     console.log(`Ласкаво просимо ${name}.`);
//   }
  
//   // Функція вищого порядку
//   function registerGuest(name, callback) {
//     console.log(`Реєструємо гостя ${name}.`);
//     callback(name);
//   }
  
//   registerGuest("Манго", greet);

// ======================================імітація телефонного дзвінка===================================

// function processCall(recipient) {
//     // Імітуємо доступність абонента випадковим числом
//     const isRecipientAvailable = Math.random() > 0.5;
//     console.log(isRecipientAvailable);
//     if (!isRecipientAvailable) {
//       console.log(`Абонент ${recipient} недоступний, залиште повідомлення.`);
//       // Логіка активації автовідповідача
//     } else {
//       console.log(`З'єднуємо з ${recipient}, очікуйте...`);
//       // Логіка прийняття дзвінка
//     }
//   }
  
//   processCall("Руля");

//   ======================================== АВТОВІДПОВІДАЧ ===================================================

// function processCall(recipient, onAvailable, onNotAvailable) {
//     // Імітуємо доступність абонента випадковим числом
//     const isRecipientAvailable = Math.random() > 0.5;
  
//     if (!isRecipientAvailable) {
//       onNotAvailable(recipient);    
//       return;
//     }
  
//     onAvailable(recipient);
//   }
  
//   function takeCall(name) {
//     console.log(`З'єднуємо з ${name}, очікуйте...`);
//     // Логіка прийняття дзвінка
//   }
  
//   function activateAnsweringMachine(name) {
//     console.log(`Абонент ${name} недоступний, залиште повідомлення.`);
//     // Логіка активації автовідповідача
//   }
  
//   function leaveHoloMessage(name) {
//     console.log(`Абонент ${name} недоступний, записуємо голограму.`);
//     // Логіка запису голограми
//   }
  
//   processCall("Манго", takeCall, activateAnsweringMachine);
//   processCall("Полі", takeCall, leaveHoloMessage);
// =====================================================================================================================


// function registerGuest(name, callback) {
//     console.log(`Реєструємо гостя ${name}.`);
//     callback(name);
//   }
  
//   // Передаємо інлайн функцію greet у якості колбека
//   registerGuest("Манго", function greet(name) {
//     console.log(`Ласкаво просимо ${name}.`);
//   });
  
//   // Передаємо інлайн функцію notify у якості колбека
//   registerGuest("Полі", function notify(name) {
//     console.log(`Шановний(а) ${name}, ваш номер буде готовий за 30 хвилин.`);
//   });



// ============================================ метод фор іч ==============================================================


// let number = [5, 1, 5, 23, 24, 44, 869, 1089,];
// const numbers = [5, 10, 15, 20, 25, 45, 89, 189, 3];
// console.log(Math.max(...numbers))
// console.log([...numbers, ...number, 11111, 222222, 33333])
// // Класичний for
// for (let i = 0; i < numbers.length; i += 1) {
//   console.log(`Індекс ${i}, значення ${numbers[i]}`);
// }



// // Метод перебирання forEach
// numbers.forEach(function (number, index) {
//   console.log(`Індекс ${index}, значення ${number}`);
// });

// let finish = "";
// let number = 54;
// function evenOrOdd (number) {
//   if (number % 2 === 0) {
//     finish = "Even";
//     consol.log(finish);
//   }
//   else if (number % 2 !== 0) {
//     finish = "Odd";
//     consol.log(finish);
//   }
  
//   }
//   evenOrOdd (number);

// function paperwork(n, m) {
//   if (n <= 0 || m <= 0){
//     console.log (0);
//   }  else {
//     console.log (n * m);
//   }
 
  
// }
// paperwork(89, 5)

// function makeNegative(num) {
//   if (num > 0){
//     console.log (num * -1);
//   }
//   else if(num < 0){
//     console.log (num);
//  }
//   else {
//     console.log (0);
//   }
// }


// function makeNegative(num) {
//   console.log ( num > 0 ? - num : num );
// }
// makeNegative(72);

// let words = ['hello', 'world', 'this', 'is', 'great'];
// function smash (words) {
//     // return words.join("");
//     console.log (words.join(" "));
//  };
//  smash(words);


// const sheep = [true,  true,  true,  false,
//     true,  true,  true,  true ,
//     true,  false, true,  false,
//     true,  true,  true,  true ,
//     true,  false, false, true ,
//     true,  true,  true,  true ,
//     false, false, true,  true]

//     function countSheeps(sheep) {
//         let result = [];
//          for (let i = 0; i < sheep.length; i+=1) {
//            if ( sheep[i] === true ) {
//               result.push(sheep[i]);
//            } 
//          }
//          console.log (result.length);
//         //  turn result.length;
//        };
//        countSheeps(sheep);


const word = `wertfgcbfgtryhdgf`;

function findMiddleCharacters(word) {
    const middleIndex = Math.floor(word.length / 2);
  
    // Якщо довжина слова непарна, повертаємо один символ
    if (word.length % 2 !== 0) {
    //   return word[middleIndex];
      console.log ([middleIndex]);
    }
  
    // Якщо довжина слова парна, повертаємо два символи
    // return word.slice(middleIndex - 1, middleIndex + 1);
    console.log (word.slice(middleIndex - 1, middleIndex + 1));
  };

  findMiddleCharacters(word);

  console.log (word[3]);





 
