/* Loop Problem */

// let n = 10;
// let sum = 0;

// for (let i = 1; i <= n; i++) {
//   sum = sum + i;
// }

// console.log("Sum =", sum);

// let sum = 0;
// let count = 0;
// let num = 2;

// while (count < 15) {
//   sum += num;
//   num += 2;
//   count++;
// }

// console.log("Sum =", sum);

// let sum = 0;
// let num = 2;
// let count = 0;

// while (sum <= 1000) {
//   sum += num;
//   num += 2;
//   count++;
// }

// console.log("Sum =", sum);
// console.log("Even numbers added =", count);

// for (let i = 1; i < 100; i++) {
//   if (i % 7 === 0) {
//     console.log(i);
//   }
// }

// let n = 5;
// let product = 1;

// for (let i = 1; i <= n; i++) {
//   product *= i;
// }

// console.log("Product =", product);

// let low = 1;
// let high = 100;

// for (let i = low; i <= high; i++) {
//   if (i % 2 === 0 && i % 7 === 0) {
//     console.log(i);
//   }
// }

// let sum = 0;
// let count = 0;
// let i = 1;

// while (count < 9) {
//   if (i % 3 === 0) {
//     sum += i * i;
//     count++;
//   }
//   i++;
// }

// console.log("Sum =", sum);

// let n = 5;
// let sum = 0;

// for (let i = 1; i <= n; i++) {
//   sum += 1 / i;
// }

// console.log("Sum =", sum);

// let low = 1;
// let high = 50;
// let P = 3;
// let Q = 5;

// for (let i = low; i <= high; i++) {
//   if (i % P === 0 && i % Q !== 0) {
//     console.log(i);
//   }
// }

// let a = 12;
// let b = 18;
// let hcf;

// for (let i = 1; i <= a && i <= b; i++) {
//   if (a % i === 0 && b % i === 0) {
//     hcf = i;
//   }
// }

// let lcm = (a * b) / hcf;

// console.log("HCF =", hcf);
// console.log("LCM =", lcm);

// let num = 1234;
// let sum = 0;

// while (num > 0) {
//   sum += num % 10;
//   num = Math.floor(num / 10);
// }

// console.log("Sum of digits =", sum);

// let num = 12;

// for (let i = 1; i <= num; i++) {
//   if (num % i === 0) {
//     console.log(i);
//   }
// }

// let num = 28;
// let sum = 0;

// for (let i = 1; i < num; i++) {
//   if (num % i === 0) {
//     sum += i;
//   }
// }

// if (sum === num) console.log("Perfect Number");
// else console.log("Not Perfect");

// let num = 7;
// let isPrime = true;

// for (let i = 2; i < num; i++) {
//   if (num % i === 0) {
//     isPrime = false;
//     break;
//   }
// let nums=[1,2,2,3,2];
// let maxCount=0, maxNum;

// for(let i=0;i<nums.length;i++){
//   let count=0;
//   for(let j=0;j<nums.length;j++){
//     if(nums[i]===nums[j]) count++;
//   }
//   if(count>maxCount){ maxCount=count; maxNum=nums[i]; }
// }
// console.log("Max occurring =", maxNum);

// let nums=[1,2,2,3,2];
// let maxCount=0, maxNum;

// for(let i=0;i<nums.length;i++){
//   let count=0;
//   for(let j=0;j<nums.length;j++){
//     if(nums[i]===nums[j]) count++;
//   }
//   if(count>maxCount){ maxCount=count; maxNum=nums[i]; }
// }
// console.log("Max occurring =", maxNum);

// let nums=[1,2,2,3,2];
// let maxCount=0, maxNum;

// for(let i=0;i<nums.length;i++){
//   let count=0;
//   for(let j=0;j<nums.length;j++){
//     if(nums[i]===nums[j]) count++;
//   }
//   if(count>maxCount){ maxCount=count; maxNum=nums[i]; }
// }
// console.log("Max occurring =", maxNum);

// }

// console.log(isPrime ? "Prime" : "Not Prime");

// let X = 2;
// let n = 4;
// let sum = 0;

// for (let i = 1; i <= n; i++) {
//   sum += Math.pow(X, i) / i;
// }

// console.log("Sum =", sum);

// let X = 2;
// let n = 4;
// let sum = 0;
// let sign = 1;

// for (let i = 1; i <= n; i++) {
//   let power = 2 * i - 1;
//   sum += sign * Math.pow(X, power) / power;
//   sign = -sign;
// }

// console.log("Sum =", sum);

// let X = 2;
// let n = 3;
// let sum = 0;
// let sign = 1;

// function fact(num) {
//   let f = 1;
//   for (let i = 1; i <= num; i++) f *= i;
//   return f;
// }

// for (let i = 1; i <= n; i++) {
//   let p = 2 * i - 1;
//   sum += sign * Math.pow(X, p) / fact(p);
//   sign = -sign;
// }

// console.log("Sum =", sum);

// let N = 4;
// let num = 0;
// let sum = 0;

// for (let i = 1; i <= N; i++) {
//   num = num * 10 + 5;
//   sum += num;
// }

// console.log("Sum =", sum);

// for (let i = 1; i <= 5; i++) {
//   for (let j = 1; j <= 10; j++) {
//     console.log(i + " x " + j + " = " + i*j);
//   }
// }

// for (let num = 1; num <= 10000; num++) {
//   let sum = 0;

//   for (let i = 1; i < num; i++) {
//     if (num % i === 0) sum += i;
//   }

//   if (sum === num) console.log(num);
// }

// let n = 5;
// let fact = 1;
// let sum = 0;

// for (let i = 1; i <= n; i++) {
//   fact = fact * i;
//   sum += fact;
// }

// console.log("Sum =", sum);

// function fact(n) {
//   let f = 1;
//   for (let i = 1; i <= n; i++) f *= i;
//   return f;
// }

// for (let num = 100; num <= 999; num++) {
//   let temp = num;
//   let sum = 0;

//   while (temp > 0) {
//     let d = temp % 10;
//     sum += fact(d);
//     temp = Math.floor(temp / 10);
//   }

//   if (sum === num) console.log(num);
// }

// let N = 5;

// for (let i = 1; i <= N; i++) {
//   let line = "";
//   for (let j = 1; j <= i; j++) line += j + " ";
//   for (let j = i - 1; j >= 1; j--) line += j + " ";
//   console.log(line);
// }

// let N = 5;

// for (let i = 1; i <= N; i++) {
//   let line = "";
//   for (let s = 1; s <= N - i; s++) line += "  ";
//   for (let j = 1; j <= i; j++) line += "* ";
//   console.log(line);
// }

// let N = 5;

// for (let i = N; i >= 1; i--) {
//   let line = "";
//   for (let j = 1; j <= i; j++) line += "* ";
//   console.log(line);
// }

// let N = 4;

// for (let i = 1; i <= N; i++) {
//   let line = "";
//   for (let s = 1; s <= N - i; s++) line += "  ";
//   for (let j = 1; j <= 2*i-1; j++) line += "* ";
//   console.log(line);
// }

// for (let i = N - 1; i >= 1; i--) {
//   let line = "";
//   for (let s = 1; s <= N - i; s++) line += "  ";
//   for (let j = 1; j <= 2*i-1; j++) line += "* ";
//   console.log(line);
// }

// let arr = [12, 24, 36];
// let hcf = arr[0];

// for (let i = 1; i < arr.length; i++) {
//   let a = hcf, b = arr[i];
//   while (b !== 0) {
//     let r = a % b;
//     a = b;
//     b = r;
//   }
//   hcf = a;
// }

// console.log("HCF =", hcf);

// let arr = [10, 50, 30, 5, 40];
// let max = arr[0];
// let min = arr[0];

// for (let i = 1; i < arr.length; i++) {
//   if (arr[i] > max) max = arr[i];
//   if (arr[i] < min) min = arr[i];
// }

// console.log("Max =", max);
// console.log("Min =", min);

// let arr = [10, 40, 30, 20];
// arr.sort((a, b) => b - a);

// console.log("Second Max =", arr[1]);

// let arr = [10, 40, 30, 20, 25];
// arr.sort((a, b) => b - a);

// console.log("Third Max =", arr[2]);

// let arr = [10, 40, 30, 20, 25];
// arr.sort((a, b) => b - a);

// console.log("Third Max =", arr[2]);

// let N = 10;
// let count = 0;
// let num = 2;

// while (count < N) {
//   let prime = true;
//   for (let i = 2; i < num; i++) {
//     if (num % i === 0) {
//       prime = false;
//       break;
//     }
//   }
//   if (prime) {
//     console.log(num);
//     count++;
//   }
//   num++;
// }

// let n = 20;
// let sum = 0;

// for (let num = 2; num <= n; num++) {
//   let prime = true;
//   for (let i = 2; i < num; i++) {
//     if (num % i === 0) {
//       prime = false;
//       break;
//     }
//   }
//   if (prime) sum += num;
// }

// console.log("Sum of primes =", sum);

// let n = 60;

// for (let i = 2; i <= n; i++) {
//   while (n % i === 0) {
//     console.log(i);
//     n = n / i;
//   }
// }

// let N = 10;
// let a = 0, b = 1;

// console.log(a);
// console.log(b);

// for (let i = 2; i < N; i++) {
//   let c = a + b;
//   console.log(c);
//   a = b;
//   b = c;
// }

// for (let x = -20; x <= 20; x++) {
//   if (x*x + (x+1)*(x+1) + (x+2)*(x+2) === (x+3)*(x+3) + (x+4)*(x+4)) {
//     console.log(x, x+1, x+2, x+3, x+4);
//   }
// }

// for (let num = 10; num <= 99; num++) {
//   let rev = (num % 10) * 10 + Math.floor(num / 10);
//   if (num*num === rev*rev) {
//     console.log(num);
//   }
// }

// let N = 10;

// for (let i = 1; i <= N; i++) {
//   console.log(i);
// }

// let M = 5;
// let N = 12;

// for (let i = M; i <= N; i++) {
//   console.log(i);
// }

// let N = 4;

// for (let i = 1; i <= N; i++) {
//   let line = "";
//   for (let j = 1; j <= N; j++) line += "* ";
//   console.log(line);
// }

// let M = 3;
// let N = 5;

// for (let i = 1; i <= M; i++) {
//   let line = "";
//   for (let j = 1; j <= N; j++) line += "* ";
//   console.log(line);
// }

// let N = 5;

// for (let i = 1; i <= N; i++) {
//   let line = "";
//   for (let j = 1; j <= i; j++) line += "* ";
//   console.log(line);
// }

// let N = 10;
// let sum = 0;

// for (let i = 1; i <= N; i++) {
//   sum += i;
// }

// console.log("Sum =", sum);

// let N = 5;
// let arr = [10, 20, 30, 40, 50];

// for (let i = 0; i < N; i++) {
//   console.log(arr[i]);
// }

// let N = 5;
// let arr = [10, 20, 30, 40, 50];
// let sum = 0;

// for (let i = 0; i < N; i++) {
//   sum += arr[i];
// }

// console.log("Sum =", sum);

// let N = 5;

// for (let i = N; i >= 1; i--) {
//   console.log(i);
// }

// let M = 3;
// let N = 5;

// for (let i = 1; i <= M; i++) {
//   let line = "";
//   for (let j = 1; j <= N; j++) {
//     line += "+ ";
//   }
//   console.log(line);
// }

// let N = 4;
// let arr = [2, 3, 4, 5];
// let product = 1;

// for (let i = 0; i < N; i++) {
//   product *= arr[i];
// }

// console.log("Product =", product);

// let N = 4;

// // Upper triangle
// for (let i = 1; i <= N; i++) {
//   let line = "";
//   for (let j = 1; j <= i; j++) {
//     line += "* ";
//   }
//   console.log(line);
// }

// // Lower triangle
// for (let i = N - 1; i >= 1; i--) {
//   let line = "";
//   for (let j = 1; j <= i; j++) {
//     line += "* ";
//   }
//   console.log(line);
// }

// let N = 5;
// let fact = 1;

// for (let i = 1; i <= N; i++) {
//   fact *= i;
// }

// console.log("Factorial =", fact);

// let N = 5;
// let K = 2;   // power
// let sum = 0;

// for (let i = 1; i <= N; i++) {
//   sum += Math.pow(i, K);
// }

// console.log("Sum =", sum);


// let M = 4;
// let N = 6;

// for (let i = 1; i <= M; i++) {
//   let line = "";
//   for (let j = 1; j <= N; j++) {
//     line += "* ";
//   }
//   console.log(line);
// }

// let N = 5;

// for (let i = 1; i <= N; i++) {
//   let line = "";
//   for (let j = 1; j <= i; j++) {
//     line += "* ";
//   }
//   console.log(line);
// }

// let N = 10;
// let sum = 0;

// for (let i = 1; i <= N; i++) {
//   sum += i;
// }

// console.log("Sum =", sum);

// let N = 5, fact = 1;
// for (let i = 1; i <= N; i++) fact *= i;
// console.log(fact);

// let N = 5, K = 2, sum = 0;
// for (let i = 1; i <= N; i++) sum += Math.pow(i, K);
// console.log(sum);

// let M = 2, N = 5, product = 1;
// for (let i = M; i <= N; i++) product *= i;
// console.log(product);

// let N = 5;
// for (let i = 1; i <= 10; i++) {
//   console.log(N + " x " + i + " = " + (N * i));
// }

// let arr = [12, 45, 7, 30];
// let max = arr[0];
// for (let i = 1; i < arr.length; i++)
//   if (arr[i] > max) max = arr[i];
// console.log(max);

// let num = 28, sum = 0;
// for (let i = 1; i < num; i++)
//   if (num % i === 0) sum += i;
// console.log(sum === num ? "Perfect" : "Not Perfect");

// let N = 5;
// for (let i = 1; i <= N; i++) {
//   let line = "";
//   for (let j = 1; j <= N; j++) {
//     if (i === 1 || i === N || j === 1 || j === N) line += "* ";
//     else line += "  ";
//   }
//   console.log(line);
// }

// let N = 4, term = 0, sum = 0 ;
// for (let i = 1 ; i <=N; i++) {
//     term = term * 10 + 1;
//     sum +=term;
// }
// console.log(sum);

// let A = 1, B = 50, count = 0;
// for (let i = 1; i * i <= B; i++)
//   if (i * i >= A) count++;
// console.log(count);

// let N = 5;
// for (let i = 1; i <= N; i++) {
//   let line = "";
//   for (let j = 1; j <= i; j++) {
//     if (i === N || j === 1 || j === i) line += "* ";
//     else line += "  ";
//   }
//   console.log(line);
// }

// let x = 2, N = 4, sum = 0;
// for (let i = 1; i <= N; i++) {
//   let power = 2 * i - 1;
//   sum += (i % 2 === 1 ? 1 : -1) * Math.pow(x, power);
// }
// console.log(sum);

// // First 10 even
// let i = 1;
// while (i <= 10) { console.log(i * 2); i++; }

// for (let i = 1; i <= 10; i++)
//   console.log(i, i * i);

// let i = 10;
// while (i <= 300) { console.log(i); i += 10; }

// for (let i = 10; i >= 1; i--) console.log(i);

// let n = 17, prime = true;
// for (let i = 2; i <= n / 2; i++)
//   if (n % i === 0) prime = false;
// console.log(prime ? "Prime" : "Not Prime");

// let num = 123, sum = 0;
// while (num > 0) {
//   sum += num % 10;
//   num = Math.floor(num / 10);
// }
// console.log(sum);

// let num = 123, rev = 0;
// while (num > 0) {
//   rev = rev * 10 + num % 10;
//   num = Math.floor(num / 10);
// }
// console.log(rev);

// let n = 5, a = 0, b = 1;
// console.log(a, b);
// for (let i = 3; i <= n; i++) {
//   let c = a + b;
//   console.log(c);
//   a = b; b = c;
// }

// let n = 153, temp = n, sum = 0;
// while (temp > 0) {
//   let d = temp % 10;
//   sum += d * d * d;
//   temp = Math.floor(temp / 10);
// }
// console.log(sum === n ? "Armstrong" : "Not Armstrong");

// let bin = 1011, dec = 0, base = 1;
// while (bin > 0) {
//   dec += (bin % 10) * base;
//   base *= 2;
//   bin = Math.floor(bin / 10);
// }
// console.log(dec);

// let n = 121, temp = n, rev = 0;
// while (temp > 0) {
//   rev = rev * 10 + temp % 10;
//   temp = Math.floor(temp / 10);
// }
// console.log(n === rev ? "Palindrome" : "Not");

// let n = 12, i = 1;
// while (i <= n) {
//   if (n % i === 0) console.log(i);
//   i++;
// }

// for (let i = 1500; i <= 2700; i++)
//   if (i % 7 === 0 && i % 5 === 0) console.log(i);

// let n = 5;
// for (let i = 1; i <= n; i++)
//   console.log(i * i);

// for (let i=0;i <= 5; i++ ) {
//     console.log(i)
// }

// function greet(name) {
//     console.log("Hello" + name);
// }
// greet("Astha");
// greet("Friend");


// function add(a,b) {
//     console.log(a+b);
// }

// add(5, 3); 
// add(10, 20);

// function add(a, b) {
//     return a + b;
// }
// let result1 = add(6, 6);
// let result2 = add(5, 5);
// let result3 = add(10, 100);

// console.log(result1);
// console.log(result2);
// console.log(result3);

// function greet(name) {
//     console.log("Good " + name);
// }

// greet("Morning");
// greet("After Noon");
// greet("Night");

// function multi(a, b) {
//     return a * b;
// }

// let value1 = multi(25, 5);

// console.log(value1);

// function paste(name) {
//     console.log("Welcome " + name);
// }

// paste("Astha");
// paste("Sujii");

// function add(a, b) {
//     return a + b;
// }
// console.log(add(3, 4));

// const add = (a, b) => a + b;
// console.log(add(5, 5));

// const greet = (name) => {
//     console.log("Hello " + name);
// };
// greet("Sujii");


// const multi = (a, b) => a * b;
// console.log(multi(10, 5));

// const welcome = name => "Welcome " + name;
// console.log(welcome("aashu"));

// let string = "Aashu";
// // console.log(string.length);
// // console.log(string.toUpperCase());
// // console.log(string.slice(2,4));
// // console.log(string.slice(-2));  // It will print the last caracters of the string
// let name = "Sujii";
// console.log(string.concat(name));