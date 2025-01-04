// There a 4 Types of Functions

//1.Function without input and without return
function add(){
    var a=10;
    var b=20;
    console.log(a+b)
}
add();
//2.Function with input and without return
function sub(x,y){
    console.log(x-y)

}
sub(200,30)


//3.Function without input and with return
function mul(){
    var p =300
    var q=3
    return p*q
}
console.log(mul())


//4.Function with input and with return
function div(x,y){
    return x*y
}
console.log(div(10,20))