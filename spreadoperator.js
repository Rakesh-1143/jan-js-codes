//it cover comes the disadvantages of arguments
const mul=(...args)=>{
    let res=args.reduce((acc,ele)=>acc*ele,1)
    console.log("Result is",res)
}
mul(10,20)
mul(10,2030)