// function add(){
//     console.log("inside add function")
// }
// add()
// add("hello")

// function add(){
//     console.log(arguments[0],arguments[1],arguments[2])
// }
// add()
// add(10)
// add(10,20)
// add(10,20,30,40,50)

function mul(){
    var m=1
    if(arguments.length<2 || arguments.length>4){
        console.log("error")
    }
    else{
        for(var i=0;i<=arguments.length;i++){
            m=m*arguments[i]
        }
        console.log(m)
    }
}
mul(1)
mul(1,2)
mul(1,2,3)

//array function cannot be used for aruments

// var mul=()=>{
//     var m=1
//     if(arguments.length<2 || arguments.length>4){
//         console.log("error")
//     }
//     else{
//         for(var i=0;i<=arguments.length;i++){
//             m=m*arguments[i]
//         }
//         console.log(m)
//     }
// }
// mul(1)
// mul(1,2)
// mul(1,2,3)

//araguments cannot be used in filter map reduce and forEach