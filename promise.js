// let myPromise = new Promise((resolve, reject) => {
//  let age = 15;

//  if(age >= 18){
//     resolve("You can vote");
//  }else{
//     reject("You cannot vote");
//  }
// });

// myPromise
//  .then((result) =>{
//     console.log(result);
//  })
//  .catch((error) => {
//     console.log(error);
//  });


// =========================================================================

// let myPromise = new Promise((resolve, reject) => {

//  let marks = 20;

//  if (marks >= 33){
//     resolve("You passed the exam");
//  }else{
//     reject("You failed the exam");
//  }

// });

// myPromise
// .then((result) => {
//     console.log(result);
// })
// .catch((error) => {
//     console.log(error);
// });

// =========================================================================

// let myPromise = new Promise((resolve, reject) => {

//     setTimeout(()=>{
//         resolve("Data loaded successfully");
//     },2000)

// });

// myPromise
// .then((result) =>{
//     console.log(result);
// })
// .catch((error) => {
//     console.log(error);
// });

// =========================================================================

// let myPromise = new Promise((resolve, reject) => {

//     setTimeout(()=>{
//         reject("Server error");
//     },2000)

// });

// myPromise
// .then((result) => {
//     console.log(result);
// })
// .catch((error) => {
//     console.log(error);
// });

// =========================================================================

// let promise = new Promise((resolve, reject) => {
//     resolve(10)
// })

// promise
// .then((num) => {
//     console.log(num)
//     return num * 2
// })
// .then((num) => {
//     console.log(num)
//     return num * 3
// })
// .then((num) => {
//     console.log(num)
// });

// =========================================================================

// let promise = new Promise((resolve, reject) => {
//     resolve(5)
// })

// promise.then((num) =>{
//     return num + 5
// })
// .then((num) => {
//     return num * 2
// })
// .then((num) =>{
//     console.log(num)
// });

// =======================================================================

// let promise = new Promise((resolve, reject) =>{
//     resolve(5)
// })

// promise
// .then((num) => {
//     throw new Error("Something went wrong")
// })
// .then((num) =>{
//     console.log(num)
// })
// .catch((err) => {
//     console.log(err.message)
// });

// ===============================================================

// let promise  = new Promise((resolve, reject) => {
//     let success = true;

//     if(success){
//         resolve("Task completed");
//     }else{
//         reject("Task failed");
//     }
// });

// promise 
// .then((result) =>{
//     console.log(result);
// })
// .catch((error) =>{
//     console.log(error);
// });

// =====================================================================

// let promise = new Promise((resolve, reject) => {

//     let age = 15;

//     if(age > 18){
//         resolve("Adult");
//     }else{
//         reject("Not Adult")
//     }
// });

// promise
// .then((res)=>{
//     console.log(res);
// })
// .catch((err)=>{
//     console.log(err);
// });

// ===================================================================

// let orderFood = new Promise((resolve, reject)=>{
//     console.log("Order placed");

//     setTimeout(()=>{
//         resolve("Food delivered");
//     },3000)
// });

// orderFood
// .then((res)=>{
//     console.log(res);
// })
// .catch((err)=>{
//     console.log(err);
// });

// =======================================================================

// let promise = new Promise((resolve, reject)=>{
//     resolve(2)
// })

// promise
// .then((num)=>{
//     console.log(num)
//     return num * 2 
// })
// .then((num)=>{
//     console.log(num)
//     return num * 3
// })
// .then((num)=>{
//     console.log(num)
// });

// ==========================Tasks 1==================================

// let promise = new Promise((resolve, reject) =>{
//    let num = 12;

//     if(num > 10){
//         resolve("Number is big")
//     }else{
//         reject("Number is small")
//     }
// });

// promise
// .then((res)=>{
//     console.log(res)
// })
// .catch((err)=>{
//     console.log(err)
// });

// ==========================Tasks 2==================================

// let agechekpromise = new Promise((resolve, reject)=>{
//     let age = 17;

//     if(age >= 18){
//         resolve("You can drive")
//     }else{
//         reject("You cannot drive")
//     }
// });

// agechekpromise
// .then((res)=>{
//     console.log(res)
// })
// .catch((err)=>{
//     console.log(err)
// });

// ==========================Tasks 3==================================

// let lodingpromise = new Promise((resolve, reject)=>{
//     console.log("Loading...");

//     setTimeout(()=>{
//         resolve("Loading complete")
//     },2000)
// });

// lodingpromise
// .then((res)=>{
//     console.log(res);
// })
// .catch((err)=>{
//     console.log(err)
// })

// ==========================Tasks 4==================================

// let promise = new Promise((resolve, reject)=>{

//     resolve(4)
// });

// promise
// .then((num)=>{
//     console.log(num);
//     return num * 3
// })
// .then((num)=>{
//     console.log(num)
//     return num + 2
// })
// .then((num)=>{
//     console.log(num)
//     return num - 1
// })
// .then((num)=>{
//     console.log(num)
// });

// ==========================Tasks 5==================================

// let passwordpromise = new Promise((resolve, reject)=>{
//     let password = "12345";

//     if(password === "admin123"){
//         resolve("Login Successful")
//     }else{
//         reject("Wrong Password")
//     }
// });

// passwordpromise
// .then((res)=>{
//     console.log(res);
// })
// .catch((err)=>{
//     console.log(err);
// });

// ==========================Tasks 6==================================

// let paymentPromise = new Promise((resolve, reject)=>{
//     let success = Math.random();

//     if(success > 0.5){
//         resolve("Payment successful")
//     }else{
//         reject("Payment failed")
//     }

// });

// paymentPromise
// .then((res)=>{
//     console.log(res);
// })
// .catch((err)=>{
//     console.log(err)
// });

// ==========================Promise AI==================================

// let promise = Promise.resolve(8)
// .then((num)=>{
//     console.log(num)
//     return num + 4;
// })
// .then((num)=>{
//     console.log(num)
// });


// Promise.resolve(6)
// .then((num)=>{
//     console.log(num);
//     return num * 2;
// })
// .then((num)=>{
//     console.log(num);
//     return num - 3;
// })
// .then((num)=>{
//     console.log(num);
// });

// Promise.reject("Payment failed")
// .catch((err)=>{
//     console.log(err);
// });

// Promise.reject("Error 404")
// .catch((err)=>{
//     console.log(err);
//     return "Default data";
// })
// .then((data)=>{
//     console.log(data);
// });

// Promise.reject("APi error")
// .catch((err)=>{
//     console.log(err);
//     throw new Error("Another error");
// })
// .then((res)=>{
//     console.log(res);
// })
// .catch((err)=>{
//     console.log(err.message);
// });

// ==============================Promise.all()====================================

// let p1 = Promise.resolve(10);
// let p2 = Promise.resolve(20);
// let p3 = Promise.resolve(30);

// Promise.all([p1, p2, p3])
// .then((result)=>{
//     console.log(result);
// });


// let p1 = new Promise((resolve)=>{
//     setTimeout(()=> resolve("Task 1"),1000);
// });

// let p2 = new Promise((resolve)=>{
//     setTimeout(()=> resolve("Task 2"),2000);
// });

// Promise.all([p1,p2])
// .then((res)=>{
//     console.log(res);
// });

// let p1 = Promise.resolve("A");
// let p2 = Promise.reject("Error");
// let p3 = Promise.resolve("C");

// Promise.all([p1,p2,p3])
// .then((res)=>{
//     console.log(res);
// })
// .catch((err)=>{
//     console.log(err)
// });

// let p1 = Promise.resolve(5);
// let p2 = Promise.resolve(10);
// let p3 = Promise.resolve(15);

// Promise.all([p1,p2,p3])
// .then((res)=>{
//     console.log(res);
// });

// let p1 = Promise.resolve(2);
// let p2 = Promise.resolve(4);
// let p3 = Promise.resolve(6);

// Promise.all([p1,p2,p3])
// .then((res)=>{
//     console.log(res[0] + res[1] + res[2]);
// });

// ==============================Promise.allSettled()=================================

// let p1 = Promise.resolve("Apple");
// let p2 = Promise.reject("Error");
// let p3 = Promise.resolve("Mango");

// Promise.allSettled([p1,p2,p3])
// .then((res)=>{
//     console.log(res);
// });

// let p1 = Promise.resolve(10);
// let p2 = Promise.reject("Failed");
// let p3 = Promise.resolve(30);

// Promise.allSettled([p1,p2,p3])
// .then((res)=>{
//     console.log(res)
// });

// ========================Promise.race()=========================

// let p1 = new Promise((resolve)=>{
//     setTimeout(()=>resolve("First"),2000)
// });

// let p2 = new Promise((resolve)=>{
//     setTimeout(()=>resolve("Second"),1000)
// });

// Promise.race([p1,p2])
// .then((res)=>{
//     console.log(res)
// });



// =========================================
// let arr = [1, 2, 3, 4, 5];
// let k = 2;

// for (let i = 0; i < k; i++) {
//     let last = arr.pop();     
//     arr.unshift(last);        
// }

// console.log(arr);

// ============================================

// let arr = [1, 2, 3, 4, 5];
// let k = 2;
// let n = arr.length;

// for (let i = 0; i < k; i++) {
//     let last = arr[n - 1];   

    
//     for (let j = n - 1; j > 0; j--) {
//         arr[j] = arr[j - 1];
//     }

//     arr[0] = last; 
// }

// console.log(arr);

// ====================================================

// let nums = [2, 4, 3, 5, 7, 8];
// let target = 10;

// let pairs = [];

// for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//         if (nums[i] + nums[j] === target) {
//             pairs.push([nums[i], nums[j]]);
//         }
//     }
// }

// console.log(pairs);

// ====================================================
// let nums = [2, 4, 3, 5, 7, 8];
// let target = 10;

// for (let i = 0; i < nums.length; i++) {
//     let need = target - nums[i];

//     for (let j = i + 1; j < nums.length; j++) {
//         if (nums[j] === need) {
//             console.log(nums[i], nums[j]);
//         }
//     }
// }

// ====================================================

// let arr = [0, 1, 0, 3, 12];
// let n = arr.length;

// for (let i = 0; i < n; i++) {
//     if (arr[i] === 0) {
        
//         for (let j = i + 1; j < n; j++) {
//             if (arr[j] !== 0) {
//                 let temp = arr[i];
//                 arr[i] = arr[j];
//                 arr[j] = temp;
//                 break;
//             }
//         }
//     }
// }

// console.log(arr);

// ===========================================

// let arr = [0, 1, 0, 3, 12];

// let nonZero = arr.filter(num => num !== 0); 
// let zero = arr.filter(num => num === 0);    
// let result = nonZero.concat(zero);

// console.log(result);

// ==============================================

// let arr = [0, 1, 0, 3, 12];

// let pos = 0; 

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] !== 0) {
//         let temp = arr[pos];
//         arr[pos] = arr[i];
//         arr[i] = temp;
//         pos++;
//     }
// }

// console.log(arr);