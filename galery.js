// const stars = 20;
// let price ;

// if (stars === 1){
//     price = 20
   
// }
// else if(stars === 2){
//     price = 40
// }
// else if(stars === 3){
//     price = 60
// }
// else if(stars === 4){
//     price = 80
// }
// else if(stars === 5){
//     price = 100
// }
// else {
//     console.log("Такого количества звезд нет."); 
// }

// console.log(price); 

// switch(stars){
//     case 1:
//         price = 20;
//         break;
//     case 2:
//         price = 40;
//         break;
//     case 3:
//         price = 60;
//         break;
//     case 4:
//         price = 60;
//         break;
//     case 5:
//         price = 100;
//         break;
//         default:
//             console.log("Такого количества звезд нет.");
// }
// console.log(price);

// const stars = 6;
// let price ;

// if (stars === 1 || stars === 2){
//     price = 120;
   
// }
// else if(stars === 3 || stars === 4){
//     price = 140;
// }
// else if(stars === 5 || stars === 6){
//     price = 160;
// }

// else {
//     console.log("Такого количества звезд нет."); 
// }

   
// const stars = 6;
// let price ;

// switch(stars){
//     case 1:
//     case 2:
//         price = 20;
//         break;
//     case 3:
//     case 4:
//         price = 60;
//         break;
//     case 5:
//         price = 100;
//         break;
//     default:
//         console.log("Такого количества звезд нет.");
// }


// let option = 2;
// let message = ''; 

// switch(option){
//     case 1:
//         message = "Забрать товар з 12 00";
//         break;
//     case 2:
//         message = "Відправити новою поштою";
//         break;
//     case 3:
//         message = "Доставка курєром";
//         break;
//     default:
//         message = "Вам передзвонить менеджер";
// }
// console.log(message);




    // for (let i = 0; i <= 20; i += 5 ){
    //     console.log(i);
    // }

    // const minSalary = 500;
    // const maxSalary = 5000;
    // const employees = 12;
    // let totalSalary = 0; 

    // for (let i = 1; i <= employees; i += 1){
        
        
    //     const salary = Math.round (

    //         Math.random( ) * (maxSalary - minSalary) + minSalary
    
    //         );
    //     console.log(`ЗП работника - ${i} : ${salary}`)

    //     totalSalary = totalSalary + salary;

       
    // }
    // console.log(totalSalary)


    // const max = 8;
    // const min = 3;
    // let total =0;


    // for (let i = 0; i <= max; i += 1 ){
    //     console.log(i);
    //     if (i % 2 === 0){
    //         console.log(`Четное ${i}`)
    //         total += i
    //     }
        
    // }
    // console.log(total)



    // const max = 9;
    // const min = 3;
    // let total =0;


    // for (let i = 0; i <= max; i += 1 ){
    //     console.log(i);
    //     if (i % 2 !== 0){
    //         console.log("Hе четное")
    //         continue;
            
    //     }

    //     console.log(`Четное ${i}`)
    //         total += i
        
    // }
    // console.log(total)

// ## Task #7  - Ввод пользователя и ветвления

// Напиши скрипт, который будет спрашивать логин с помощью `prompt` и логировать
// результат в консоль браузера.

// - Если посетитель вводит `"Админ"`, то `prompt` запрашивает пароль
// - Если ничего не введено или нажата клавиша Esc - вывести строку `"Отменено"`
// - В противном случае вывести строку `"Я вас не знаю"`

// Пароль проверять так:

// - Если введён пароль `"Я админ"`, то вывести строку `"Здравствуйте!"`
// - Иначе выводить строку `"Неверный пароль"`
// let login ;
// let password;
// let slice = prompt() ;
// console.log(slice)
//     if(slice === "Админ"){
//    password = prompt("Введите пароль")
  
// } 
// if(password === null){
//     console.log("Отменено")

// }
// if(password === "Я админ"){
//     console.log("Здравствуйте!")

// }
// else{
//     console.log("Неверный пароль")
// }

// Task #8 - Написать игру Камень - Ножницы - Бумага

// Task #9 - Выведите столбец чисел от 1 до 50 использую while, for
// let counter = 0;

// while (counter <= 50) {
//   console.log("counter: ", counter);
//   counter += 1;
// }


// for(let i = 0; i <= 50; i +=1){
//     console.log(i)
// }

// Task #10 - Выведите столбец четных чисел в промежутке от 0 до 100 использую while, for
// let counter = 0;
// while (counter <= 100) {
//   console.log("counter: ", counter);
//   counter += 2;
// }


// for(let i = 0; i <= 100; i +=2){
//     console.log(i)
// }

// Task #11 - С помощью цикла найдите сумму чисел от 1 до 100 использую while, for


// let counter = 1;
// let total1 = 0;


// while (counter <= 100) {
//   console.log(counter);
//   counter += 1;
//   total1 = total1 + counter; 
  
// }
// console.log(total1);


// let total = 0;
// for(let i = 1; i <=100; i+=1){
//     console.log(i);
//     total = total + i;
// }
// console.log(total);


// Task #12 - Дано число n=1000. Делите его на 2 столько раз, пока результат деления не станет меньше 50.
// Какое число получится ?
// Посчитайте количество итераций, необходимых для этого(итерация - это проход цикла), и запишите его в переменную num.

// let num = 0;
// let total = 0;
// for (let n = 1000; n >= 50; n /= 2){
//     num += 1;
//     console.log(n);
//     total = total + n;
// }
// console.log(total);


// Task #13 - Напишите программу которая спрашивает пароль и имя у пользователя.
// У пользователя есть 3 попытки на ввод пароля
// Если пользователь вводит пароль и он правильный - выводим сообщение "Приветствую тебя {neme}"
// Если пользователь вводит не правельный пароль - выводитм сообщение "Пароль не верный. У тебя осталось {n} попыток"
// Если попытки закончились - выводим сообщение "Попытки закончились Доступ запрещен"
// let neme = "qwe21031990";
// let password = prompt("Введите пароль");
// let message = "";

// for(let i = 1; i <= 3; i += 1){
//     console.log(i);
//     if (password === neme){
//         message = "Приветствую тебя"
//     }
// }
// console.log(message);



// let triesLeft = 3;
// let i = 0;
// while (i <= triesLeft) {
//     let pass = prompt("Введите пароль пользователя");
//     if (pass === truepass) {
//         alert(`Приветствую тебя ${name} !`);
//         break;
//     }   if (pass === null) {
//         break;
//     }   if (i < triesLeft) {
//         alert(`Пароль не верный! У тебя осталось ${triesLeft - i} попыток!`);
//     }   else {
//         alert(`Попытки закончились! В доступе отказано!`);
//     }
//     i += 1;
// } 

    


// Task #14 - Написать программу которая спрашивает у пользователя пароль и проверяет его на валидность по количеству симвлолов
// Правила валидации -
// 1) минимум 3 символа, - если символов меньше выводим сообщение "Пароль должен содержать минимум 3 символа"
// 2) максимум 16 символов - если символов больше, выводим сообщение "Пароль должен содержать максимум 16 символов"

// Task #15 - Написать программу которая спрашивает у пользователя почту и проверяет ее на валидность.
// Правила валидации
// 1) минимум 4 символа
// 2) максимум 10 символов
// 3) почта должна содержать символ @
// 4) почта должна содержать символ .
// Если почта не прошла хотябы одну проверку выводим сообщение "Почта не отвечает требованиям".

// Task #12 - Дано число n=1000. Делите его на 2 столько раз, пока результат деления не станет меньше 50.
// Какое число получится ?
// Посчитайте количество итераций, необходимых для этого(итерация - это проход цикла), и запишите его в переменную num.

    
// for(let i = 1000; i <= 50; i /= 2) {

//     console.log(i)
// }


// for (let i = 0; i <= 20; i += 5) {
//     console.log(i);
//   }
// ----------------------------------------------------------------------
//     let array = ["Mango", "Ajax", "Poly", "Kiwi", "Monkong", "Singu"]
//     const first = array.slice(0, 1)
//  console.log(first);
//  const last = array.slice(-1)
//  console.log (last);
//  console.log([array[0], array[array.length-1]]);

//  const lolik = last.contact(first);
// console.log(lolik);





// вивести найдовше слово з масиву!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// let string = "Mango Ajax Poly Kiwi Monkong Monkongqwer Singu Qwertgfhbcnvbvhfgthtyfj Hgfhyt Bn Bnjhvhf"

// let strings = string.split(" ");
// let word = "";
// let longWord = 0;
// for(let i = 0; i <= strings.length - 1; i+=1){
//   if(longWord < strings[i].length){
//     longWord = strings[i].length;
//     word = strings[i];
//   }
// }
// console.log(word);
// ========================================================================================

// повертаэ масив чисел від мін до миакс.
//     let min= 3;
//     let max= 8;
//     const numbers = [];
//     // Change code below this line
//   for(let i = min; i <= max; i += 1){
//     // console.log(i);
//     numbers.push(i); 
//   }
  
//     // Change code above this line
//     console.log(numbers);
    // ===============================================================================================

//    виводить масив чисел більших за валуе
//     let numbers = [1, 3, 6, 4, 5, 2, 9, 5, 8]
//     let value = 4; 
//     let newNum = [];
//         for(let i = 0; i < numbers.length; i += 1){
//             // console.log(numbers[i]);
//            if(numbers[i] > value){
//             console.log(numbers[i]);
//             newNum.push(numbers[i]);
//             console.log(newNum);
             
//            }
//         }

// =============================================================================

        // const fruits = ["apple", "plum", "pear", "orange"];
        // const fruit = "apple";

        // const type = fruits.includes(fruit) ? true : false;         
        //  console.log(type);

      
        // if (fruits.includes(fruit)){
        //     console.log(true);
        // }else{
        //     console.log(false);
        // }
        
      
        // console.log(fruits.includes(fruit)) ;

// ==============================================================================
// повертає масив спільних чисел в масивах.
// let array1 = [1, 5, 7, 0, 3];
// let array2 = [1, 9, 4, 0, 3, 67, 34]
// // let numi ;
// // let numj ;


// let totalNum = [];
// for(let i = 0; i < array1.length; i +=1){
//     console.log(array1[i]);
  
         
//     if(array2.includes(array1[i]) ){
//         totalNum.push(array1[i])
//         console.log(totalNum);
//      }
      
    
// }
// =========================================================================================
// повертає масив парних (і) від старт до енд.

// let start = 3; 
// let end = 12;   
// let num = [];
// for(let i = start; i <= end; i += 1){
     
//      if(i % 2 === 0){
//     //  console.log(i);
//      num.push(i)     
//     }    
// }
// console.log(num);
// ===========================================================================================
     
  
     
       
     
  



    





