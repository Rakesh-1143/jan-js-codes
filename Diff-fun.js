//function declaration
function add(a,b){
    console.log(a+b)
}
add(100,200)

//function expression
const sub=function(a,b){
    console.log(a-b)
}
sub(20,3)
//Arrow function
const mul =(a,b)=>{
    console.log(a*b)
}
mul(10,30)

//if only one starement we can use this statement
const msg=()=>"hello world"
console.log(msg())