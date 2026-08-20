// A steel is graded according to:
// Rockwell hardness > 50
// Carbon content > 0.7
// Tensile strength > 5600 kg/cm²
// Grades:
// Grade 10: All three conditions satisfied
// Grade 9: Conditions (i) and (ii)
// Grade 8: Conditions (ii) and (iii)
// Grade 7: Conditions (i) and (iii)
// Grade 0: Otherwise-----------------------------------------------


// const hardness = 60
// const carbon = 0.2
// const tensile = 6000

// let h = hardness > 50
// let c = carbon > 0.7
// let t = tensile > 5600

// if(h && c && t){
//     console.log("Grade 10");
// }else if(h && c){
//     console.log("Grade 9")
// }else if(c && t){
//     console.log("Grade 8")
// }else if(h && t){
//     console.log("Grade 7")
// }else{
//     console.log("Grade 0")
// }



// Take the three properties of 5 steel samples using a loop and determine the grade of each sample.

// for(i = 0; i <= 5; i++){
//     const hardness = 60
//     const carbon = 0.2
//     const tensile = 6000

//     let h = hardness > 50
//     let c = carbon > 0.7
//     let t = tensile > 5600

//     if(h && c && t){
//         console.log("Grade 10");
//     }else if(h && c){
//         console.log("Grade 9")
//     }else if(c && t){
//         console.log("Grade 8")
//     }else if(h && t){
//         console.log("Grade 7")
//     }else{
//         console.log("Grade 0")
//     }
// }