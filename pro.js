// let myPromise = new Promise((resolve, reject) =>{
//     let isdataLoaded = false;

//     setTimeout(() => {
//         if(isdataLoaded){
//         resolve("Data loaded successfully")
//     }else{
//         reject("Data failed to load")
//     }
//     }, 2000);
// });

// myPromise
//  .then(result => console.log(result))
//  .catch(error => console.log(error))
//  .finally(() => console.log("always run")) // success ho jaye ya fail ho jaye hamesha run hoga




// function step1(){
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve("step 1 completed")
//         },1000);
//     });
// }

// function step2(){
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve("Step 2 completed");
//         }, 1000);
//     });
// }

// function step3(){
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve("Step 3 completed")
//         },1000)
//     });
// }

// step1()
//     .then((result1) => {
//         console.log(result1);
//         return step2();
//     })
//     .then((result2) => {
//         console.log(result2);
//         return step3();
//     })
//     .then((result3) => {
//         console.log(result3);
//     });




// function logingUser(){
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve("User logged in")
//         },1000)
//     });
// }
// function getUserData(){
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve("User data fetched")
//         },1000)
//     });
// }
// function showDashboard(){
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve("Dashboard loaded")
//         },1000)
//     });
// }
// logingUser()
//   .then((result) => {
//     console.log(result);
//     return getUserData();
//   })
//   .then((result2) => {
//     console.log(result2);
//     return showDashboard();
//   })
//   .then((result3) => {
//     console.log(result3);
//   });



// function placeOrder(){
//     return new Promise((resolve, reject) => {
//         let promise1 = true;
//         setTimeout(() => {
//             if(promise1){
//                 resolve("Order placed successfully")
//             }else{
//                 reject("Order failed")
//             }
//         },1000)
//     });
// }
// function processPayment(){
//     return new Promise((resolve, reject) => {
//         let promise2 = false;
//         setTimeout(() =>{
//             if(promise2){
//                 resolve("Payment successful")
//             }else{
//                 reject("Payment failed")
//             }
//         },1000)
//     });
// }
// function orderConfirmation(){
//     return new Promise((resolve, reject) => {
//         let promise3 = true;
//         setTimeout(() => {
//             if(promise3){
//                 resolve("Order confirm and shipped")
//             }else{
//                 reject("Order cancle")
//             }
//         },1000)
//     })
// }
// placeOrder()
//   .then((result) => {
//     console.log(result);

//     processPayment()
//     .then((result2) => {
//         console.log(result2);

//         orderConfirmation()
//         .then((result3) => {
//             console.log(result3);
//         })
//         .catch((error3) => {
//             console.log(error3)
//         });
//     })
//     .catch((error2) => {
//         console.log(error2)
//     });

//   })
//   .catch((error1) => {
//     console.log(error1)
//   });



// function getMessage(){
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve("Hello from promise")
//         },2000)
//     })
// }
// async function fetchMessage(){
//     let result = await getMessage();
//     console.log(result);
// }
// fetchMessage();




// function getUser(){
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve("User loaded")
//         },1000)
//     })
// }
// function getPost(){
//     return new Promise((resolve) => {
//         setTimeout(() =>{
//             resolve("Post loaded")
//         }, 1000)
//     })
// }
// async function fetchData(){
//     console.log("start");

//     let user = await getUser();
//     console.log(user);

//     let post = await getPost();
//     console.log(post);

//     console.log("end")
// }
// fetchData();


// function getUser() {
//     return new Promise((resolve,reject) => {
//         let sucess = false;
        
//         setTimeout(() => {
//             if(sucess){
//                 resolve("User loaded");
//             }else{
//                 reject("Failed to load user")
//             }
//         }, 1000)
//     });
// }
// async function fetchUser(){
//     try{
//         let result = await getUser();
//         console.log(result);
//     }catch(error){
//         console.log(error)
//     }
// }
// fetchUser();

// function num1(){
//     return new Promise((resolve) => {
//         setTimeout(() =>{
//             resolve(5)
//         }, 1000)
//     })
// }
// function num2(){
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve(10)
//         }, 1000)
//     })
// }
// async function calculate(){
//     try{
//         let one = await num1();
//         let two = await num2();

//         let sum = one + two;
//         console.log(sum);
//     }catch(error){
//         console.log(error);
//     }
// }
// calculate();


// function checkNum(num){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if(num >10){
//                 resolve("Number is greater than 10")
//             }else{
//                 reject("Number is not greater than 10")
//             }
//         }, 1000)
//     })
// }
// async function result(){
//     try{
//         let greater = await checkNum(88);
//         console.log(greater)
//     }catch(error){
//         console.log(error)
//     }
// }
// result();

// function checkUser(){
//     return new Promise((resolve, reject) => {
//         let verify = true;

//         setTimeout(() => {
//             if (verify) {
//                 resolve("User verified");
//             } else {
//                 reject("User not verified");
//             }
//         }, 1000);
//     });
// }

// function getData(){
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve("Data loaded");
//         }, 1000);
//     });
// }

// async function task(){
//     try {
//         let user = await checkUser();
//         console.log(user);

//         console.log("Access granted");

//         let data = await getData();
//         console.log(data);

//     } catch (error) {
//         console.log(error);
//     }
// }

// task();


// myPromise = new Promise((resolve, reject) =>{
//     let isdataLoaded = false;

//     setTimeout(() => {
//         if(isdataLoaded){
//         resolve("Data loaded successfully")
//     }else{
//         reject("Data failed to load")
//     }
//     }, 2000);
// });

// myPromise
//  .then(result => console.log(result))


// let p = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         if (Math.random() > 0.5) {
//             resolve("Success");
//         } else {
//             reject("Fail");
//         }
//     }, 1000);
// });

// p.then((result) => console.log(result))
//  .catch((error) => console.log(error));



// spreade Oprater
// let arr1 = [1, 2, 3];
// let arr2 = [...arr1, 4, 5];

// console.log(arr2);


// Rest oprater
// function sum(...numbers) {
//   console.log(numbers);
// }

// sum(1, 2, 3, 4);

