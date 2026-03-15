// add 
function add(x:number,y:number):number{
    return x+y;
}
// greet
function greet(name:string):string{
    return "Hello" + name;
}
// iseven
function isEven(x:number):boolean{
    return x%2===0;
}
// get array length
function getLength<T>(arr:T[]):number{
    return arr.length;
}
//max
function max(a:number,b:number):number{
    return a>b?a:b;
}
//reversestring
function reverse(s:string):string{
    return s.split('').reverse().join('');
}
//calculate area
function calculateArea(l:number,b:number):number{
    return l*b;
}
// Check if string contains substring
function contains(s:string,search:string):boolean{
    return s.includes(search);
}
//get 1st element of array
function getFirst<T>(arr:T[]):T | undefined{
    return arr[0];
}
//create full name
function createFullName(firstName:string,lastName:string):string{
    return "Hello" + firstName+ " "+ lastName;
}

// Usage examples:
console.log(add(5, 3));                          // 8
console.log(greet("Alice"));                     // "Hello, Alice!"
console.log(isEven(4));                          // true
console.log(getLength([1, 2, 3]));              // 3
console.log(max(10, 20));                        // 20
console.log(reverse("hello"));             // "olleh"
console.log(calculateArea(5, 10));               // 50
console.log(contains("hello world", "world"));   // true
console.log(getFirst([1, 2, 3]));               // 1
console.log(createFullName("John", "Doe"));      // "John Doe"