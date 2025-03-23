let arr = [1,2,3,4,5];

// let calSquare = (num) => {
//     console.log(num*num);
// };

// arr.forEach(calSquare);

// arr.forEach((val)=>{
//     console.log(val*val);
// });

// let array = [1,2,3,4,5,6,7];

// let evenNum = array.filter((value) => {
//     return value % 2 === 0;
// });
// console.log(evenNum);

// Sum Calculator : 

const sum = arr.reduce((res, curr) => {
    return res + curr;
});
console.log(sum);

const sum1 = arr.reduce((res, curr) => res + curr, 0);
console.log(sum1); // Output: 0 if arr is empty

let arr1 = [5,8,6,3,1];

const greatest = arr1.reduce((prev,curr)=>{
    return prev>curr ? prev : curr;
});
console.log(greatest);


let marks = [87, 93, 64, 99, 86];

const ninetyPlus = marks.filter((val)=>{
    if(val>90) return val;
    else return 0;
})
console.log(ninetyPlus);
