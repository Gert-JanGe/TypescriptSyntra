/* oef1
function addNumbers (a: number, b:number): number {
    return a + b;
}

console.log(addNumbers(5, 10));  // Output: 15
console.log(addNumbers(2.5, 7.5));  // Output: 10 */
/* oef2
function concatStrings (a: string, b: string): string{
    return a + b;
}

console.log(concatStrings('Hello ', 'World'));  // Output: "Hello World"
console.log(concatStrings('TypeScript ', 'Rocks'));  // Output: "TypeScript Rocks" */
/* oef3
function isEven(num: number): boolean{
    return num % 2 ===0;
}

console.log(isEven(4));  // Output: true
console.log(isEven(7));  // Output: false */
/* oef4
function isLongerThan(a: string, length: number): boolean {
    return a.length > length;
}

console.log(isLongerThan('TypeScript', 5));  // Output: true
console.log(isLongerThan('TS', 5));  // Output: false */
/* oef5
function calculate(a: number, b: number, c: string): number | string {
    switch (c){
        case "add": return a+b;
        case 'subtract': return a-b;
        case 'multiply': return a*b;
        case 'divide': return a/b;
    }
}

calculate(1,1, "add"); // functie doet 1+1, resultaat is 2
calculate(4,2, "divide"); // functie doet 4/2, resultaat is 2
calculate(10,6, "subtract"); // functie doet 10-6, resultaat is 4 */
/* oef6
function greet(name: string, greeting: string = "Hello"): void {
    console.log(`${greeting}, ${name}`);
}

greet('Alice');  // Output: "Hello, Alice!"
greet('Bob', 'Hi');  // Output: "Hi, Bob!" */
/* oef7
function sumArray(numbers: number[]): number {
    return numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
}

console.log(sumArray([1, 2, 3, 4, 5]));  // Output: 15
console.log(sumArray([10, 20, 30]));  // Output: 60 */
/* oef8
function findMax(numbers: number[]): number{
    return Math.max(...numbers);
}

console.log(findMax([1, 2, 3, 4, 5]));  // Output: 5
console.log(findMax([10, 20, 5, 50, 25]));  // Output: 50 */
/* oef9
function filterEvenNumbers(numbers: number[]): number[]{
    return numbers.filter (numbers => numbers % 2 ===0);
}

console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6]));  // Output: [2, 4, 6]
console.log(filterEvenNumbers([11, 13, 15]));  // Output: [] */
/* oef10
function squareNumbers (numbers: number[]): number[]{
    return numbers.map(num => num * num);
}

console.log(squareNumbers([1, 2, 3, 4]));  // Output: [1, 4, 9, 16]
console.log(squareNumbers([5, 6, 7]));  // Output: [25, 36, 49] */
/* oef11
interface Person{
    name: string;
    age: number;
    email: string;
    isAdmin: boolean;
}

function greetPerson (person: Person): void{
    const greeting = `Hello, ${person.name} (${person.email})! You are ${person.age} years old!`;

    if(person.isAdmin){
        console.log(`${greeting} You have admin privileges`);
    } else {
        console.log(`${greeting} You are a regular user.`);
    }
}

const joe: Person = {"name": "Joe", "age": 30, "email": "joe@joemail.com", "isAdmin": true};
const jane: Person = {"name": "Jane", "age": 18, "email": "jane@janemail.com", "isAdmin": false};

console.log(greetPerson(joe)) // Hello, Joe (joe@joemail.com)! You are 30 years old. You are admin of the system.
console.log(greetPerson(jane)) // Hello, Jane (jane@janemail.com)! You are 18 years old. You are not admin of the system. */
/* oef12

interface Product{
    name: string;
    price: number;
    category: string;
    discount?: number;
}

function printProductDetails(product: Product): void {
    console.log(`Product: ${product.name}`);
    console.log(`Price: €${product.price}`);
    console.log(`Catergory: ${product.category}`);

    if (product.discount !== undefined){
        console.log(`Discount: ${product.discount}%`);
    }
}

printProductDetails({name: 'Laptop', price: 999, category: 'Electronics'}); // Product: Laptop; Price: €999; Category: Electronics;
printProductDetails({name: 'Printer', price: 99, category: 'Electronics', discount: 10}); // Product: Printer; Price: €99; Category: Electronics; Discount: 10% */
var UserRole;
(function (UserRole) {
    UserRole["Admin"] = "Admin";
    UserRole["Editor"] = "Editor";
    UserRole["Viewer"] = "Viewer";
})(UserRole || (UserRole = {}));
function checkPermissions(user) {
    switch (user.role) {
        case UserRole.Admin:
            console.log("".concat(user.name, " (").concat(user.id, ") has full access."));
            break;
        case UserRole.Editor:
            console.log("".concat(user.name, " (").concat(user.id, ") can edit content."));
            break;
        case UserRole.Viewer:
            console.log("".concat(user.name, " (").concat(user.id, ") can view content."));
            break;
        default:
            console.log("".concat(user.name, " (").concat(user.id, ") not found."));
    }
}
var adminUser = { id: '123', name: 'Alice', role: UserRole.Admin };
var editorUser = { id: '124', name: 'Bob', role: UserRole.Editor };
var viewerUser = { id: '125', name: 'Charlie', role: UserRole.Viewer };
checkPermissions(adminUser); // Alice (123) has full access.
checkPermissions(editorUser); // Bob (124) can edit content.
checkPermissions(viewerUser); // Charlie (125) has read-only access.
