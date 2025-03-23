// Arrays Methods -> push(), pop(), toString();

//  Practice Questions
arr = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];
// arr.shift();                // Shift se pehla element delete hota hai and pop() se last element delete hoga
console.log(arr);
arr.splice(2, 1, "Ola");
console.log(arr);

arr.push("Amazon")                      // Push adds in the end and unshift adds in the start
console.log(arr);



// let arr = [250, 645, 300, 900, 50];
// let items = [];
// for(i=0;i<arr.length;i++){
//     items[i] = arr[i] - arr[i]/10;
//     console.log(items[i]);
// }                       
// console.log("\n");
// for(i=0;i<arr.length;i++){
//     arr[i] = arr[i] - arr[i]/10;
//     console.log(items[i]);
// }   


// let arr = [85, 97, 44, 37, 76, 60];
// let avg = 0;

// for(let i=0;i<arr.length;i++){
//     avg += arr[i]/arr.length;
// }
// console.log(`Average marks of the class is ${avg}`);


// let heroes = ["superman", "spiderman", 'ironman', "hulk"];

// //  for loop
// for(let i=0;i<heroes.length;i++){
//     console.log(heroes[i]);
// }
// //  for of loop
// for(let hero of heroes){
//     console.log(hero);
// }