//Function Declaratio :Hosted
function greet(name){
    return `Hello,${name}`
}
console.log(greet("rakesh"))

//Function Expression:Not hosted
let greet2=function(name){
    return `hello,${name}`
}
console.log(greet2("Vamsi"))

//Arrow Function:callbacks
let greet3=(name)=>{
    return `hello,${name}`
}
console.log(greet3("abhi"))