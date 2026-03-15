function add(x, y) { return x + y; }
function subtract(x, y) { return x - y; }
function multiply(x, y) { return x * y; }
function modulo(x, y) { return x % y; }
function power(x, y) {
    var result = 1;
    for (var i = 0; i < y; i++)
        result *= x;
    return result;
}
function divide(x, y) {
    if (y === 0) {
        throw {
            type: 'DIVISION_BY_ZERO',
            message: 'Cannot divide by zero'
        };
    }
    return x / y;
}
function Calculate(operation) {
    try {
        var result = void 0;
        switch (operation.operator) {
            case '+':
                result = add(operation.a, operation.b);
                break;
            case '-':
                result = subtract(operation.a, operation.b);
                break;
            case '*':
                result = multiply(operation.a, operation.b);
                break;
            case '%':
                result = modulo(operation.a, operation.b);
                break;
            case '**':
                result = power(operation.a, operation.b);
                break;
            case '/':
                result = divide(operation.a, operation.b);
                break;
            default:
                return {
                    type: 'Invalid Operation',
                    message: 'Invalid Operator'
                };
        }
        return { operation: operation, result: result };
    }
    catch (error) {
        return error; // already a Calculator_Error
    }
}
console.log(Calculate({ operator: '+', a: 100, b: 5 }));
console.log(Calculate({ operator: '-', a: 100, b: 5 }));
console.log(Calculate({ operator: '*', a: 100, b: 5 }));
console.log(Calculate({ operator: '%', a: 100, b: 5 }));
console.log(Calculate({ operator: '**', a: 100, b: 5 }));
console.log(Calculate({ operator: '/', a: 100, b: 5 }));
console.log(Calculate({ operator: '/', a: 100, b: 0 }));
