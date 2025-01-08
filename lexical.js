var global=200
console.log(outer)
    console.log(gobal)
    console.log(inner)
function Outer(){
    var outer=300
    console.log(outer)
    console.log(gobal)
    console.log(inner)

    function Inner(){
         var inner=400
        console.log(outer)
        console.log(gobal)
        console.log(inner)
}
Inner()
}
Outer()