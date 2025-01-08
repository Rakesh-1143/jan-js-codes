class Student{
    constructor(s_name,s_age,s_email){
        this.name=s_name
        this.age= s_age
        this.email=s_email
    }
    eat(){
        console.log(this.name,"is eating")
    }
    learn(){
        console.log(this.name,"is learning")
    }
}
s1=new Student("Rakesh",25,'rakeshreddy261002@gmail.com')
console.log(s1.name,s1.age,s1.email)
s1.eat()
s1.learn()
