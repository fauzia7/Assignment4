// IMPORT THE MODULE

import * as calculate from "./modules/calculator";

// COLLECT NUMBER 1, NUMBER 2, AND OPERATION FROM THE USER  
let x = Number(prompt("Enter first number"));
let y = Number(prompt("Enter second number"));
let operation = prompt("Choose the operation you want to do on theses number  +, -, * or /");

// // CHECK TO SEE WHAT OPERATION THEY'RE USING

switch(operation) {
    case '+':
        import { add } from './modules/calculator.js';
          
           add();
             console.log(`${sum}`);
            
            break;

    case '-':
          import { subtract } from './modules/calculator.js';
           subtract();
           console.log(`${sub}`);
       
        break;

    case '*':
        import { multiply } from './modules/calculator.js';
        multiply();
        console.log(`${mul}`);
        break;

        case '/':
            import { divide } from './modules/calculator.js';
            divide();
            console.log(`${div}`);
       
           break;
   
       default:
           console.log('Invalid operator');
           break;
  }


 // CALL THE APPROPRIATE FUNCTION
//  import { add } from './modules/calculator.js';
console.log(calculate.add());