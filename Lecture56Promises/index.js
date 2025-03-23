// let firstPromise = new Promise ((resolve, reject) => {
//     console.log("Harsh");
//     // resolve(1001);
//     reject(new Error("Internal Server Error"));
// });


// let SecondPromise = new Promise( (resolve, reject) => {
//     setTimeout(function sayMyName() {
//         console.log("Harsh");
//     },3000);
// })


// let promise1 = new Promise((resolve, reject) => {
//     let success = true;
//     if(success){
//         resolve("Promise Fulfilled");
//     }
//     else reject("Promise Rejected");
// })

// promise1.then((message)=>{
//     console.log("First message is ", message);
//     return "Promise fulfilled first message";
// /*)}.catch((error)=>{
//     console.log("Error"+error);
// })*/
// }).then((message)=>{
//     console.log("Second message",message);    
//     return "Promise Resolved second message";
// }).then((message)=>{
//     console.log("Third Message");
//     return "Promise Fulfilled THIRD";
// }).catch((error)=>{
//     console.log("Error",error);
// }).finally((message)=>{
//     console.log("Bhai mai toh final hu chalunga pakka");    
// })

let promise1 = new Promise((resolve, reject)=>{
    setTimeout(resolve, 1000,"First");
})
let promise2 = new Promise((resolve, reject)=>{
    setTimeout(resolve, 2000,"Second");
})
let promise3 = new Promise((resolve, reject)=>{
    setTimeout(resolve, 3000,"Third");
})
//Sab promise ki values lp access kar sakte hai with the help of Promises.all
Promise.all([promise1, promise2, promise3])
.then((value)=>{
    console.log(value);
}).catch((error)=>{
    console.error("Error : ",error);
})
