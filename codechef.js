// let N = 5 , X = 2 , Y = 2;
// if(N > 2*X && N >= 2*Y){
//     console.log("YES");
// }else{
//     console.log("NO")
// }




// let input = 1;
// let i = 0, N = Number;

// const T = Number(input[i++]);

// for (let t = 0; t < T; t++) {
//   const N = Number(input[i++]);

//   let currentStreak = 0;
//   let longestStreak = 0;

//   for (let day = 0; day < N; day++) {
//     const problems = Number(input[i++]);

//     if (problems >= 1) {
//       currentStreak = currentStreak + 1;
//     } else {
//       currentStreak = 0;
//     }

//     if (currentStreak > longestStreak) {
//       longestStreak = currentStreak;
//     }
//   }

//   console.log(longestStreak);
// }





// let idx = 0;
// const T = Number(input[idx++]);

// for (let t = 0; t < T; t++) {
//     const N = Number(input[idx++]);
//     const S = input[idx++].toLowerCase();

//     // Frequency array for a-z
//     const freq = Array(26).fill(0);

//     for (let ch of S) {
//         const index = ch.charCodeAt(0) - 97;
//         freq[index]++;
//     }

//     // Sort frequencies in descending order
//     freq.sort((a, b) => b - a);

//     const maxFreq = freq[0];
//     const secondMaxFreq = freq[1];

//     console.log(maxFreq + secondMaxFreq);
// }


// let a = 15 , b = 20;
// if(a > b){
//   console.log("Greater is =",a);
// }else{
//   console.log("Greate is =",b);
// }



// let arr = [];

// for (let i = 1; i <= 20; i++) {
//   arr.push(i);
// }

// console.log(arr);

// let names = [];

// for (let i = 0; i < 5; i++) {
//   names.push(prompt("Enter name " + (i + 1)));
// }

// console.log(names);




// let l = [5, 4, 9, 2, 1, 0];

// for (let i = l.length - 1; i >= 0; i--) {
//   console.log(l[i]);
// }

// let l = [5, 4, 9, 2, 1, 0];

// for (let i = l.length - 1; i >= 0; i -= 2) {
//   console.log(l[i]);
// }

// let arr = [10, 12, 34, 11, 4, 5, 1];
// let i = Number(prompt("Enter value of i"));

// for (let j = arr.length - i; j < arr.length; j++) {
//   console.log(arr[j]);
// }


// let arr = [1,2,3,4,5,6,7];
// let num = Number(prompt("Enter a number"));
// let found = false;

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] === num) {
//     found = true;
//     break;
//   }
// }

// console.log(found);



    // first question 

// function Total_coins(a, b, c) {
//   return a + b * c; // a =  coins immediately, b = weekly coins , c = week 
// }
// console.log(Total_coins(100, 8, 4))
// console.log(Total_coins(100, 77, 4))
// console.log(Total_coins(100, 39, 4))


// second question

// let arr = [ 2, 1, 1]

// let lastIndex = arr.length -1;
// let a = arr[lastIndex] + 1;
// let c = a + 2;

// if (c % 2 === 0 ) {
//   console.log("YES");
// } else{
//   console.log("NO");
// }

// third question 

// const n = [5, 3, 8]
// let sum =(5 + 3 + 8)
// console.log(sum)

// forth question 

// const arr = [1, -1]
// let sub = (1+(-1))
// // console.log(sub)
// if(sub === 0) {
//   console.log("YES")
// } else{
//   console.log("NO")
// }

// const n = 10;
// for(let i = 1; i <= n; i++){
//     console.log(i);
// }

// const n = 1;
// for(let i = 10; i >= n; i--){
//     console.log(i);
// }


// for(let i = 2; i <= 20; i+= 2){
//     if(i % 2 == 0){
//         console.log(i)
//     }
// }


// const num = 5;

// for (let i = 1; i <= 10; i ++) {
//     console.log(num * i);
// }

// for (let i = 1; i <= 50; i += 3) {
//         console.log(i);
// }

// let count = 0;
// for (let i = 1; i <= 100; i++){
//     if(i % 2 === 0){
//          count++;
//     }
// }

// console.log(count);


// let a = 10, b = 30, c =100;
// if(a > b && a > c){
//     console.log(a)
// } else if(b > a && b > c){
//     console.log(b)
// }else{
//     console.log(c)
// }
// console.log(Math.max(a, b, c));

// let side1 = 40 , side2 = 40;
// if(side1 === side2){
//     console.log("Square")
// }else{
//     console.log("Rectangle")
// }

// let num = 100;
// if(num === 1000){
//     console.log("Smallest 4 digit number")
// } else{
//     console.log("This is not smallest 4 digit number")
// }

// let num = 999;
// if(num === 999){
//     console.log("This is largest three digit number")
// } else {
//     console.log("This is not largest three digit number")
// }

// let num = 6;
// if(num % 7 == 0){
//     console.log("number is divisible by 7");
// } else {
//     console.log("num is not dividible by 7")
// }

// const num = 123;
// let x = num % 10
// if(x % 3 == 0){
//     console.log("last digit of number entered by user is divisible by 3")
// } else{
//     console.log("last digit of number entered by user is not divisible by 3")
// }

// let age = 2;
// if(age > 18){
//     console.log("A person is eligible for voting")
// }else{
//     console.log("person is not eligible for voting")
// }

// let num = 22;
// if(num % 5 == 0){
//     console.log("Hello")
// }else{
//     console.log("Bye")
// }

// let num = 14;
// if(num >= 100 && num <= 999){
//     console.log("Yes")
// }else{
//     console.log("No")
// }

// let age = 60;
// if(age >= 60){
//     console.log("Senior citizen")
// }else{
//     console.log("Not Senior")
// }

// let  tem = 10;
// if(tem >= 100){
//     console.log("Yes")
// }else{
//     console.log("No")
// }

// let quantity = 11;   
// let total = quantity * 100;

// if (total > 1000) {
//     total = total - (total * 10 / 100);
// }

// console.log("Total cost:", total);

// ==================1 Question=====================

// const user = {
//   name: "Rahul",
//   age: 22,
//   city: "Delhi"
// };

// const userkeys = Object.keys(user);
// console.log(userkeys);


// ==================2 Question=====================

// function wordlengths(sentence){
//     return sentence.split(" ").map(word => word.length);
// }
// console.log(wordlengths("I love coding"));

// ==================3 Question=====================

// function isPalindrome(str){
//   let reversed = str.split("").reverse().join("");
//   return str === reversed;
// }

// console.log(isPalindrome("madam"));

// ==================4 Question=====================

// function commonElements(arr1, arr2){
//   return arr1.filter(num => arr2.includes(num));
// }

// console.log(commonElements([1,2,3,4],[3,4,5,6]));

// ==================5 Question=====================

// function capitalizeWords(str){
//   return str
//     .split(" ")
//     .map(word => word.charAt(0).toUpperCase() + word.slice(1))
//     .join(" ");
// }

// console.log(capitalizeWords("hello world"));

// ==================6 Question=====================

// function rotateArray(arr, k){
//   return arr.slice(-k).concat(arr.slice(0, arr.length-k));
// }

// console.log(rotateArray([1,2,3,4,5],2));


// ==================7 Question=====================

// function pairSum(arr,target){
//   for(let i=0;i<arr.length;i++){
//     for(let j=i+1;j<arr.length;j++){
//       if(arr[i] + arr[j] === target){
//         return [arr[i],arr[j]];
//       }
//     }
//   }
// }

// console.log(pairSum([2,7,11,15],9));

// ==================8 Question=====================

// function moveZeros(arr){
//   let nonZero = arr.filter(num => num !== 0);
//   let zeros = arr.filter(num => num === 0);
//   return nonZero.concat(zeros);
// }

// console.log(moveZeros([0,1,0,3,12]));

// ==================9 Question=====================

// function reverseWords(str){
//   return str.split(" ").reverse().join(" ");
// }

// console.log(reverseWords("I love coding"));

// ==================10 Question=====================

// function doubleArray(arr){
//   return arr.map(num => num * 2);
// }

// console.log(doubleArray([1,2,3]));

// =========================1. Remove Duplicates from an Array==============================

// const numbers = [1, 2, 3, 4, 2, 3, 5, 6];

// const uniqueNumbers = [...new Set(numbers)];

// console.log(uniqueNumbers);

// ==============================2. Find the Largest Number in an Array===============================

// const numbers = [10, 25, 8, 40, 15];

// const max = Math.max(...numbers);

// console.log(max);

// ==============================3. Sum of All Numbers in an Array===============================


// const numbers = [5, 10, 15, 20];

// const sum = numbers.reduce((total, num) => total + num, 0);

// console.log(sum);

// ========================4. Filter Even Numbers==========================

// const numbers = [1, 2, 3, 4, 5, 6];

// const evenNumbers = numbers.filter(num => num % 2 === 0);

// console.log(evenNumbers);

// ============================5. Convert Array of Strings to Uppercase===============================

// const fruits = ["apple", "banana", "mango"];

// const upperFruits = fruits.map(fruit => fruit.toUpperCase());

// console.log(upperFruits);

// ==================================6. Find Second Largest Number============================================

// const numbers = [10, 5, 20, 8, 15];

// const sorted = numbers.sort((a, b) => b - a);

// const secondLargest = sorted[1];

// console.log(secondLargest);

// ============================7. Group Objects by Property====================================

// const people = [
//   { name: "Rahul", age: 20 },
//   { name: "Aman", age: 21 },
//   { name: "Priya", age: 20 },
//   { name: "Neha", age: 21 }
// ];

// const grouped = people.reduce((acc, person) => {
//   if (!acc[person.age]) {
//     acc[person.age] = [];
//   }
//   acc[person.age].push(person);
//   return acc;
// }, {});

// console.log(grouped);


// ===========================8. Flatten a Nested Array============================

// const arr = [1, [2, [3, 4], 5], 6];

// function flattenArray(array) {
//   return array.reduce((acc, value) => 
//     Array.isArray(value) ? acc.concat(flattenArray(value)) : acc.concat(value)
//   , []);
// }

// console.log(flattenArray(arr));

// ===================================9. Find Max occuring=====================================

// for(let i=0;i<nums.length;i++){
//   let count=0;
//   for(let j=0;j<nums.length;j++){
//     if(nums[i]===nums[j]) count++;
//   }
//   if(count>maxCount){ maxCount=count; maxNum=nums[i]; }
// }
// console.log("Max occurring =", maxNum);



// ===================10 March===================================
// let data = {
//   a: 10,
//   b: 20,
//   c: 10,
//   d: 30,
//   e: 10,
//   f: 20
// };

// let count = {};
// let max = 0;
// let result;

// for (let key in data) {
//   let value = data[key];

//   if (count[value]) {
//     count[value]++;
//   } else {
//     count[value] = 1;
//   }

//   if (count[value] > max) {
//     max = count[value];
//     result = value;
//   }
// }

// console.log(result);

// =======================================================================


// let user = {
//   name: "Rinki",
//   age: 23,
//   city: "Delhi"
// };

// let arr = [];

// for (let key in user) {
//   arr.push([key, user[key]]);
// }

// console.log(arr);


// ===================================================================

// let obj1 = { a: 10, b: 20, c: 30 };
// let obj2 = { b: 10, c: 5, d: 15 };

// let result = {};

// for (let key in obj1) {
//   result[key] = obj1[key];
// }

// for (let key in obj2) {
//   if (result[key]) {
//     result[key] = result[key] + obj2[key];
//   } else {
//     result[key] = obj2[key];
//   }
// }

// console.log(result);

// ====================================================================

// function printNum(n) {
//   if (n === 0) return;

//   printNum(n - 1);
//   console.log(n);
// }

// =============================================================================

// printNum(5);

// function factorial(n) {
//   if (n === 1) {
//     return 1;
//   }

//   return n * factorial(n - 1);
// }

// console.log(factorial(5));

// =============================================================================

// function sum(n) {
//   if (n === 1) {
//     return 1;
//   }

//   return n + sum(n - 1);
// }

// console.log(sum(5));

// =============================================================================

// let img = document.createElement("img");
// img.setAttribute("src", "image.jpg");

// console.log(img.getAttribute("src"));

// =============================================================================

// let btn = document.createElement("button");

// btn.setAttribute("class", "active");

// document.body.appendChild(btn);

// =============================================================================

// let link = document.createElement("a");

// link.setAttribute("href", "https://google.com");

// document.body.appendChild(link);

// =============================================================================

// let div = document.createElement("div");

// div.setAttribute("id", "box");

// console.log(div.getAttribute("id"));


// let n = "Astha";
// let age = "18";
// let city = "Gadchiroli"
// console.log(n + " "+ age + " " + city)  // -------------------String Concatenation
// console.log(`${n} ${age} ${city}`);   // -------------- Template Literals
// console.log(n, age, city)     // ----------------using comma(,) 
// console.log([n, age, city])  // ---------------------by using comma 
// console.log([n, age, city].join(" "))  // ----------------- by using join() method (array formatting)

