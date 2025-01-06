// var arr1=[10,20,30,40]
// var arr2=[]

// for (var i=0;i<arr1.length;i++){
//     arr2[i]=arr1[i]+5
// }
// console.log(arr2)



//filter map and reduce methods in js
// arr1=[10,11,12,13,4,15]
// var newarr=arr1.filter(function(ele){
//     if (ele%2===0){
//         return ele
//     }
// })
// console.log("orginal Array",arr1)
// console.log("Even array:",newarr)

// var years=[1996,2000,1997,1994]
// var leapyear=years.filter(function(ele){
//     if ((ele%4===0 && ele%100!==0) || (ele%400===0)){
//         return ele
//     }
// })

// console.log("Leap Years:", leapyear);

// var array =[1,2,3,4,5,6]
// var sq_arr=array.map(function(ele){
//     return ele*ele
// })
// console.log(sq_arr)

// var array=[1,2,3,4,5,6]
// var sq_arr= array.map((ele)=>ele*ele)
// console.log(sq_arr)

// var arr=[1,2,3,4,5]
// var sum=arr.reduce((acc,ele)=>acc+ele,0)
// console.log(sum)


//working of forEachloop

var array=[1,2,3,4]
array.forEach((ele,idx,array)=>console.log(ele,idx,array))