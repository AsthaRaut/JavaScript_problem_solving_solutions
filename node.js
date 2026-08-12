// let str = "aashu"
// let rev ="";

// for(let i = str.length -1; i >= 0; i--){
//     rev += str[i]
// };
// console.log(rev)


// let str = "mada";
// let rev = "";
// for(let i = str.length -1; i >= 0; i--){
//     rev += str[i];
// }
// if(str === rev){
//     console.log("palindrome")
// }else{
//     console.log("not palindrome")
// }

// let a = "astha Yuvraj Raut";
// let vowels = "aeiouAEIOU";
// let count = 0;

// for(let i = a.length -1; i >= 0; i++){
    
// }

fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json))
