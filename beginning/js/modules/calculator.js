// ADD A PRIVATE FUNCTION CALLED CALCULATE

export const calculate = ()  => {
   
// ADD FUNCTION
    const add = (x, y) => {           
            let sum= x + y;
            return sum;
        } 

    // SUBTRACT FUNCTION
    const subtract = (x, y) => {           
        let sub= x - y;
        return sub;
    } 

    // MULTIPLY FUNCTION
    const multiply = (x, y) => {           
    let mul = x * y;
    return mul;
    }   

    // DIVIDE FUNCTION
    const divide = (x, y) => {           
        let div = x / y;
        return div;
    } 
 }
// EXPORT THE FOUR PUBLIC FUNCTIONS
export{add};
export{subtract};
export{multiply};
export{divide};
