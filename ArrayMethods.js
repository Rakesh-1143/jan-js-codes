var arr1= [10,20,30,40,21,45]

for (var i=0;i<=arr1.length;i++){
    if (arr1[i]%2===0){
        console.log(arr1[i])
    }
}
var arr2=[10,20,30]
arr2.push(30)
console.log("After push",arr2)
//insert at frist position
arr2.unshift(5)
console.log("After unshift",arr2)

arr2.pop()
console.log(arr2)
arr2.shift()
console.log(arr2)

console.log(arr2.includes(30))

console.log(arr2.indexOf(30))
