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

    const minSalary = 500;
    const maxSalary = 5000;
    const employees = 5;
    let totalSalary = 0; 

    for (let i = 1; i <= employees; i += 1){
        
        
        const salary = Math.round (

            Math.random( ) * (maxSalary - minSalary) + minSalary
    
            );
        console.log(`ЗП работника - ${i} : ${salary}`)
       
    }


    





