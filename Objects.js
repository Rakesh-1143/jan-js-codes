//Data Types : Object,string, number, boolean, null,undefined
//Objects:
//1.Json object{key:valuepair}
//Array Object [ele1,ele2,...]
//3.Functions

const s1={
    Name:"Rakesh",
    Age:24,
    Fees_paid:34000.00,
    Work_experience:{
        abc:"3 months",
        xyz:"2 months"
    },
    Marks:{
        Maths:45,
        science:56,
    },
    percentage:["sem-I:84","sem-II:86","sem_III=88"],
    performance:()=>console.log("good")

}
console.log("name of student:",s1.Name,typeof s1)
console.log("Percentage of marks",s1.percentage)
s1.performance()