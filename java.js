// function sayHello() {
//     const h1 = document.createElement("h1");
//     h1.innerText = "Hello World";
//     document.body.appendChild(h1);
// }

// sayHello();

// function createSquareApp() {
//     const input = document.createElement("input");
//     input.type = "number";
//     input.placeholder = "Enter a number";
//     input.style.margin="5px"

//     const button = document.createElement("button");
//     button.innerText = "Find Square";

//     const result = document.createElement("p");

//     button.addEventListener("click", function(){
//       const number = Number(input.value);
//       const Square = number * number;
//       result.innerText = "Square is: " + Square;
//     });

//     document.body.appendChild(input);
//     document.body.appendChild(button);
//     document.body.appendChild(result);
// }

// createSquareApp();


// function createSumApp() {
//     const input1 = document.createElement("input");
//     input1.type = "number";
//     input1.placeholder = "Enter first number";
//     input1.style.margin="5px"

//     const input2 = document.createElement("input");
//     input2.type = "number";
//     input2.placeholder = "Enter Second number";

//     const result = document.createElement("p");
//     const btn=document.createElement("button");
//     btn.innerText="Calculate Sum"


//     btn.addEventListener("click", function(){
//         const num1 = Number(input1.value);
//         const num2 = Number(input2.value);
//         result.innerText = "Sum is: " + (num1 + num2);
//     });

//     document.body.appendChild(input1);
//     document.body.appendChild(input2);
//     document.body.appendChild(result);
//     document.body.appendChild(btn)
// }


// createSumApp();



// function createEvenOddApp() {
//     const input = document.createElement("input");
//     input.type = "number";
//     input.placeholder = "Enter a number";
//     input.style.cssText = "display: block; margin: 20px";

//     const button = document.createElement("button");
//     button.innerText = "Find Even or Odd";
//     button.style.cssText = "display: block; margin: 20px"; 

//     const result = document.createElement("p");

//     button.addEventListener("click", function(){
//       const number = Number(input.value);
   
//       if (input.value === ""){
//         result.innerText = "Plese enter a number";
//       } else if (number % 2 === 0) {
//         result.innerText = number + " is Even";
//       } else {
//         result.innerText = number + " is Odd";
//       }
//     });
    
//     document.body.appendChild(input);
//     document.body.appendChild(button);
//     document.body.appendChild(result);

// }



// createEvenOddApp();




// const form = document.createElement("form");

// const nameInput = document.createElement("input");
// nameInput.type = "text";
// nameInput.placeholder = "Enter your name";
// nameInput.id = "nameInput";

// const submitBtn = document.createElement("button");
// submitBtn.type ="submit";
// submitBtn.textContent = "Submit";

// form.appendChild(nameInput);
// form.appendChild(submitBtn);

// document.body.appendChild(form);

// const displayDiv = document.createElement("div");
// displayDiv.id = "displayName";
// displayDiv.style.marginTop = "20px";
// document.body.appendChild(displayDiv);

// form.addEventListener("submit", function(e){
//     e.preventDefault();
//     const name = nameInput.value.trim();
//     if(name !== "") {
//       displayDiv.textContent = `Hello, ${name}!`;
//       nameInput.value = "";
//     } else {
//       displayDiv.textContent = "Plese enter your name.";
//     }
// });





// let h1 = document.createElement("h1");
// h1.textContent = "Welcome to DOM practice";
// document.body.appendChild(h1);


// let container = document.createElement("div")

// let h2 = document.createElement("h2");
// h2.textContent = "DOM Practice";

// let p = document.createElement("p")
// p.textContent = "I am learning DOM"

// container.appendChild(h2);
// container.appendChild(p);

// document.body.appendChild(container)

// let Btn = document.createElement("button")
// Btn.textContent = "Click Me";
// document.body.appendChild(Btn)

// let btn2 = document.createElement("button")
// btn2.textContent ="Show Message"

// let p2 = document.createElement("p")

// document.body.appendChild(btn2)
// document.body.appendChild(p2)

// btn2.addEventListener("click", function(){
//   p2.textContent = "Button Clicked!";
// });


// let changetext = document.createElement("button")
// changetext.textContent = "Change Text";

// let para = document.createElement("p");

// document.body.appendChild(changetext);
// document.body.appendChild(para);

// changetext.addEventListener("click", function (){
//   para.textContent = "Hello DOM";
// });

// let chngClr = document.createElement("button")
// chngClr.textContent = "Change Color"

// document.body.appendChild(chngClr);

// chngClr.addEventListener("click", function () {
//   document.body.style.backgroundColor = "yellow";
// });


// let togl = document.createElement("button")
// togl.textContent = "Toggle Color"

// document.body.appendChild(togl)

// togl.addEventListener("click", function(){

//   if(document.body.style.backgroundColor === "yellow"){
//     document.body.style.backgroundColor = "white";
//   }
//   else{
//     document.body.style.backgroundColor = "yellow";
//   }

// });


// let btn = document.createElement("button")
// btn.textContent = "Make Text Red"

// let para = document.createElement("p")

// document.body.appendChild(btn);
// document.body.appendChild(para)

// btn.addEventListener("click", function() {
//   para.textContent = "Hello I am text"
//   para.style.color = "Red";
// })


// let togl = document.createElement("button")
// togl.textContent = "Toggle Text"

// let para = document. createElement("p")
// para.textContent = "Hello DOM"

// document.body.appendChild(togl);
// document.body.appendChild(para);

// togl.addEventListener("click", function(){

//   if(para.style.display === "none"){
//     para.style.display = "block";
//   }
//   else{
//     para.style.display = "none";
//   }
  
// })

// let btn = document.createElement("button")
// btn.textContent = "Change Message"

// let para = document.createElement("p")
// para.textContent = "Hello"

// document.body.appendChild(btn);
// document.body.appendChild(para);

// btn.addEventListener("click", function(){

//   if(para.textContent === "Hello"){
//     para.textContent = "Welcome";
//     para.style.color = "green";
//   }
//   else{
//     para.textContent = "Hello";
//     para.style.color = "blue";
//   }

// })

// let btn = document.createElement("button")
// btn.textContent = "Show / Hide"

// let para = document.createElement("p")
// para.textContent = "Hello DOM"

// document.body.appendChild(btn)
// document.body.appendChild(para)

// btn.addEventListener("click", function(){

//   if(para.style.display === "none"){
//     para.style.display = "";
//   }
//   else{
//     para.style.display = "none"
//   }
// })

// let btn = document.createElement("button")
// btn.textContent = "Add Box";

// document.body.appendChild(btn)

// btn.addEventListener("click", function(){

//   let box = document.createElement("div");

//   box.style.width = "100px";
//   box.style.height = "100px";
//   box.style.backgroundColor = "pink";
//   box.style.borderRadius = "50%";
//   box.style.margin = "10px";

//   document.body.appendChild(box);

// });

// let btn = document.createElement("button");
// btn.textContent = "Toggle Dark Mode";

// document.body.appendChild(btn);

// btn.addEventListener("click", function(){

//   if(document.body.style.backgroundColor === "black"){
//     document.body.style.backgroundColor = "white";
//     document.body.style.color = "black";
//     btn.textContent = "Dark mode"
//   }
//   else{
//     document.body.style.backgroundColor = "black";
//     document.body.style.color = "white";
//     btn.textContent = "Light mode"
//   }

// });

// =============================================================================

// let p = document.getElementById("para");
// p.textContent = "hey";

// let a = document.getElementsByClassName("para");
// a[0].textContent = "1" ;
// a[1].textContent = "2" ;
// a[2].textContent = "3" ;

// let paras = document.getElementsByTagName("p")
// for(let i = 0; i < paras.length; i++){
//   paras[i].style.color ="blue";
// }

// let btn = document.getElementsByTagName("button")
// btn[0].textContent = "use me"
// btn[1].textContent = "click me"

// for(let i =0; i < btn.length; i++){
//   btn[i].style.color = "red";
// }

// let item = document.querySelectorAll(".para");

// item.forEach(function(el){
//   el.textContent ="Changed Text";
//   el.style.color = "red"
// })

// item[0].textContent = "First only";

// let a = document.getElementById("hey");
// a.textContent ="Changed ID"

// let b = document.getElementsByClassName("para")
// b[0].textContent = "Class Text"

// let c = document.querySelectorAll(".para");

// c.forEach(function(el){
//   el.textContent = "Update";
// });




