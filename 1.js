// add 
function add(x, y) {
    return x + y;
}
// greet
function greet(name) {
    return "Hello" + name;
}
// iseven
function isEven(x) {
    return x % 2 === 0;
}
// get array length
function getLength(arr) {
    return arr.length;
}
//max
function max(a, b) {
    return a > b ? a : b;
}
//reversestring
function reverse(s) {
    return s.split('').reverse().join('');
}
//calculate area
function calculateArea(l, b) {
    return l * b;
}
// Check if string contains substring
function contains(s, search) {
    return s.includes(search);
}
//get 1st element of array
function getFirst(arr) {
    return arr[0];
}
//create full name
function createFullName(firstName, lastName) {
    return "Hello" + firstName + " " + lastName;
}
// Usage examples:
console.log(add(5, 3)); // 8
console.log(greet("Alice")); // "Hello, Alice!"
console.log(isEven(4)); // true
console.log(getLength([1, 2, 3])); // 3
console.log(max(10, 20)); // 20
console.log(reverse("hello")); // "olleh"
console.log(calculateArea(5, 10)); // 50
console.log(contains("hello world", "world")); // true
console.log(getFirst([1, 2, 3])); // 1
console.log(createFullName("John", "Doe")); // "John Doe"
