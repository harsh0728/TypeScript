interface Operation{
    operator:'+' | '-' | '*' | '/';
    a:number,
    b:number
}

interface Result{
    operation:Operation,
    result:number
}

type Calculator_Error={
    type:'DIVISION_BY_ZERO' | 'Invalid Operation',
    message:string
}

function add(x:number,y:number){ return x + y }
function subtract(x:number,y:number){ return x - y }
function multiply(x:number,y:number){ return x * y }

function divide(x:number,y:number):number {
    if (y === 0){
        throw {
            type:'DIVISION_BY_ZERO',
            message:'Cannot divide by zero'
        } as Calculator_Error;
    }
    return x / y;
}

function Calculate(operation:Operation):Result | Calculator_Error{
    try {
        let result:number;

        switch(operation.operator){
            case '+': result = add(operation.a, operation.b); break;
            case '-': result = subtract(operation.a, operation.b); break;
            case '*': result = multiply(operation.a, operation.b); break;
            case '/': result = divide(operation.a, operation.b); break;
            default:
                return {
                    type:'Invalid Operation',
                    message:'Invalid Operator'
                }
        }

        return { operation, result };

    } catch(error: any) {
        return error; // already a Calculator_Error
    }
}

console.log(Calculate({operator:'+', a:100, b:5}));
console.log(Calculate({operator:'-', a:100, b:5}));
console.log(Calculate({operator:'*', a:100, b:5}));
console.log(Calculate({operator:'/', a:100, b:5}));
console.log(Calculate({operator:'/', a:100, b:0}));