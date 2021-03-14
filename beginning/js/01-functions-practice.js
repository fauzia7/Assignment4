//STEP 1
// let number;
// function halfNumber( number) {
//     let divide = number / 2;
//   console.log(`Half of ${number} is ${divide} `)  
// }
// halfNumber(5);
// halfNumber(10);


//STEP 2

// function squareNumber(num)  {
//     let square = num * num;
//     console.log(`The result of squaring the number ${num} is ${square} .`)

// }
// squareNumber(3); 

//STEP 3

// function percentOf(percentToGet, num)  {
//     let percent = (percentToGet/100) *  num;
//     alert(`${percent} is ${percentToGet} % of  ${num}`);
   
// }
// percentOf(50,120);
// percentOf(50,200);



//STEP 4

// function percent(num1, num2) {
//     mod = num1 % num2;
//     alert(`${mod} is the modulus of ${num1} and ${num2}`);   
// }
// percent(12,5);
// percent(10,4);

//STEP 5
let num =prompt("Enter any number");
 function sum() {
    let sumNo=0;
     for(let i=0; i<arguments.length ; i++) {
         
          sumNo += parseInt(arguments[i]);
     }
     return sumNo;
     
 }
 let collect = sum(`${sumNo} , `);

console.log(sum(collect));
    
