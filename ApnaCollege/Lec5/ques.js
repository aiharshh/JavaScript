let n = prompt("Enter no. of Inputs : ");
let arr = [];

for(i=1;i<=n;i++){
    arr[i-1] = i;
}
console.log(arr);

const sum = arr.reduce((res, curr)=>{
    return res+curr;
});
console.log(sum);

const factorial = arr.reduce((res,curr)=>{
    return res * curr;
});
console.log(factorial);
