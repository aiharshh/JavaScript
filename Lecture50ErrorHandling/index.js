// try{
//     console.log("try block starts here");
//     console.log(x);
//     console.log("try block ends here");
// }
// catch(err){
//     console.log("In am inside catch block");
//     console.log("Your error is here : ", err);
    
// }
// finally{
//     console.log("I will run everytime");
// }

try{
    console.log(x);
}
catch(Err){
    throw new Error("Bhai x ki value de pehle");
}
