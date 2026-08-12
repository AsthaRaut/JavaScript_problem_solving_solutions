// console.log("10" + 5); // 105
// console.log("10" - 5); // 5

// var a = 10;
// let b = 20;

// if(true){
//     var a = 50;
//     let b = 60;
// };

// console.log(a);
// console.log(b);  // a = 50 and b = 20


// let user1 = "Aman";
// let userName = "Rahul";
// let value  = 5 ;

// let a = "Hello"; // string
// let b = 100;  // number
// let c = false;  // boolean
// let d = null; // null
// let e;   // undefined 
// let f = [1,2];  // array 
// let g = {name:"John"}; // object

// console.log(typeof null); // object
// console.log(typeof []); // object

// console.log(10 % 4); // 2
// console.log(5 == "5"); // true
// console.log(5 === "5"); // false
// console.log(!true);  // false

// let userName = "Astha";
// let password = "@12";

// if(userName === "Astha" && password === "@123"){
//     console.log("Able to login");
// }else{
//     console.log("Not Able to log in");
// }


// let a = prompt("Enter your Name: ");
// alert("Welcome to my webpage");


// let marks = 55;

// if(marks < 70){
//     console.log("C");
// }else if(marks >= 70 && marks <= 90){
//     console.log("B");
// }else{
//     console.log("A");
// }

// let amount = 2000;
// if(amount < 100){
//     console.log("Invalid");
// }else if(amount <= 1000){
//     console.log("Processing");
// }else{
//     console.log("Limit exceeded");
// }

// let userName = "astha";
// let password = "ent";

// if(userName === "astha" && password === "enter"){
//     console.log("Login Success");
// }else{
//     console.log("Access Denied");
// }

// let price = 200;
// let quantity = 2;
// let total = price * quantity;

// if(total > 500){
//     console.log("Apply 10% discount");
// }else{
//     console.log(total);
// }

// let i = 10;
// while(i >= 1){
//     console.log(i);
//     i--;
// }


// let i = 1;
// do{
//     console.log(i);
//     i++;
// }while(i<=5);

// for(i=2; i<= 20; i++){
//     if(i%2==0){
//         console.log(i)
//     }
// }

// let num = 5;

// for(let i = 1; i <=10; i++){
//     console.log(num + "x" + i + "=" +(num*i));
// }

// let n = 5;
// let sum = 0;
// for(let i = 0; i<= n; i++){
//     sum= sum+i
// }
// console.log(sum);

// let n = 5;
// let sum = 0;
// let i = 1;
// while(i <= n){
//     sum = sum + i;
//     i++;
// }
// console.log(sum)

// let n = 9876;
// let count = 0;

// while(n > 0){
//     n = Math.floor(n / 10);
//     count++;
// }
// console.log(count);

// let n = 5;
// for(let i = 0; i <= n; i++){
//     let row ="";

//     for(j = 0; j <= i; j++){
//         row += "*";
//     }
//     console.log(row)
// }

// let row = 4;
// let cols = 5;

// for(let i = 1; i <= row; i++){
//     let row = "";

//     for(let j = 1; j <= cols; j++){
//         row += "*"
//     }
//     console.log(row);
// }

// let n = 5;
// for(let i = 1; i <= n; i++){
//     let row ="";

//     for(let j = 1; j <= i; j++){
//         row += i
//     }
//    console.log(row)
// }

// let n = 5;
// for(let i = 1; i <= n; i++){
//     let row = "";

//     for(let j =1; j <= i; j++){
//         row += j;
//     }
//     console.log(row)
// }

// let n = 5;
// for(i = 1; i <= n; i++){
//    let row = "";

//    for(let j = 1; j <= n-i+1;j++){
//     row +=j
//    }
//    console.log(row)
// }


// let n = 5;

// for(let i = 1; i <= n; i++){
//     let row = "";

//     for(let j = 1; j <= n - i; j++){
//         row += " ";
//     }

//     for(let j = 1; j <= i; j++){
//         row += "*";
//     }

//     console.log(row);
// }


// let a = 5;
// for(let i = 1; i <= a; i++){
//     let row = "";

//     for(let j = 1; j <= a-i; j++){
//         row += " ";
//     }

//     for(let k =1; k <= i; k++){
//         row += k;
//     }

//     console.log(row)
// }


// let n = 5;
// for(let i = 1; i <= n; i++){
//     let row = "";

//     for(let j = 1; j <=i; j++){
//         if((i+j)%2 === 0){
//             row += "1";
//         }else{
//             row += "0"
//         }
//     }
//     console.log(row)
// }


// let n = 7;
// let count = 0;

// for(let i = 1; i <= n; i++){
//     if(n % i === 0){
//         count++;
//     }
// }
// if(count === 2){
//     console.log("Prime");
// }else{
//     console.log("Not Prime")
// }

// ===================================break
// for(let i =1; i <= 10; i++){
//     if(i === 5){
//         break;
//     }
//     console.log(i);
// }

// ====================================continue
// for(let i = 1; i <= 5; i++){
//     if(i === 3){
//         continue;
//     }
//     console.log(i);
// }

// let i = 1;

// do{
//     if(i === 3){
//         i++;
//         continue;
//     }
//     console.log(i);

//     if(i === 5){
//         break;
//     }

//     i++;
// }while(i<=10);

// for(let i = 1; i <=10; i++){
//     if(i === 4){
//         continue;
//     }
//     console.log(i)
// }

// for(let i = 1; i <= 20;i++){
//     if(i === 8){
//         break;
//     }
//     console.log(i)
// }

// let i = 1;
// do{
//     console.log(i)

//     if(i === 7){
//         break;
//     }

//     i++;
// }while(true);

// let i = 1;
// do{
//     if(i % 2 == 0){
//         i++;
//         continue;
//     }

//     console.log(i);
//     i++;
// }while(i<=10)

// ===================================function

// function add(a, b){
//     return a + b;
// }
// let result= add(2, 3);
// console.log(result)

// function check(num){
//     if(num % 2 === 0){
//         return "Even";
//     }else{
//         return "Odd";
//     }
// }
// let result = check(4);
// console.log(result);

// function printNum(n){
//     for(let i = 1; i <= n; i++){
//         console.log(i);
//     }
// }
// printNum(5);

// function fac(n){
//    let result = 1;

//     for(let i = 1; i<= n; i++){
//         result *= i
//     }
//     return result;
// }
// let ans = fac(4);
// console.log(ans)

// const greet = (name) => {
//     console.log("Hello " + name)
// }
// greet("astha");

// let add = (a, b) => a + b;
// console.log(add(2, 3))

// let check = (n) => {
//     if(n % 2 === 0){
//         return "Even";
//     }else{
//         return "Odd";
//     }
// }
// console.log(check(4));

// let check = (n) => (n % 2 === 0 ? "Even" : "Odd");
// console.log(check(4));

// let check = (n) => (n * n);
// console.log(check(4));

// let sum = (n) => {
//     let total = 0;
//     for(let i = 1; i <= n; i++){
//         total += i;
//     }
//     return total;
// }
// console.log(sum(5));

// let arr = [1, 2, 3];
// arr.push(4);
// console.log(arr);

// let arr = [1, 2, 3];
// arr.pop();
// console.log(arr);

// let arr = [1, 2, 3];
// arr.shift();
// console.log(arr);

// let arr = [2, 3];
// arr.unshift(1);
// console.log(arr);

// let arr = [1, 2, 3, 4, 5];
// let newarr = arr.slice(1,4);
// console.log(newarr);
// console.log(arr)

// let arr = [1, 2, 3, 4, 5];
// // arr.splice(1, 2);
// // console.log(arr);

// // arr.splice(1, 0, 8, 9);
// // console.log(arr)

// let str = "hello";
// console.log(str.toLocaleUpperCase())

// let str = "HELLO";
// console.log(str.toLocaleLowerCase());

// let str = "    hello   ";
// console.log(str.trim());

// let str = "Hello world";
// console.log(str.includes("world"));
// console.log(str.includes("World"));

// let str = "a,b,c,d,";
// // let arr = str.split(",");
// // console.log(arr);

// let words = "hello world".split(" ");
// console.log(words);

// let person = {
//     name: "Astha",
//     age: 20,
//     city: "Haunkhra"
// };
// console.log(person);

// let person = new Object();
// person.name ="Astha";
// person.age=20;
// console.log(person);

// let person = {name: "Astha", age: 20};
// console.log(person.name)
// console.log(person.age)

// console.log(person["name"]);
// console.log(person["age"])

// let person = {name:"Astha"};
// person.age = 20;
// person["city"] = "Haunkhra";
// // console.log(person);
// delete person.age;
// console.log

// let v = "12av";

// let valueNumber = Number(v);
// console.log(typeof valueNumber)
// console.log(valueNumber)

// console.log(undefined != 0)

let id = symbol('123')
let anotherId = symbol('123')

console.log(id == anotherId);
