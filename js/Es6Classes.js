console.log("This is Es6 classes Demo")

class Employee{
    //Construtor is something which is invoked when we create the object of that class
    constructor(GivenName,GivenExperience,GivenCompany){
        this.name=GivenName;
        this.experience=GivenExperience
        this.company=GivenCompany
    }
    //Arrow function
     Slogan=()=>console.log(`${this.experience} year is your Total Experience`)
     
     JoiningYear(){
        let e=2022-this.experience
        console.log(e +"is your jonning year And " + `${this.name} is my Nickname`);
     }

     //static function is that function which ca be called without object (it can be called directly with the class name Employee)
     static NameCount(n){
        let count;
        for(let i=0;i<n.length;i++){
            count=1;
            count+=i;
        }
        console.log("You name contains " + count + "Characters")
     }
}
//Object of that class
emp=new Employee("Saloni",2,"Harman")
console.log(emp)
emp.Slogan()
emp.JoiningYear()
//static function calling
Employee.NameCount('saloni')


//New class Programmer
class Programmer extends Employee{
    constructor(GivenName,GivenExperience,GivenCompany,GivenSalary){
        super(GivenName,GivenExperience,GivenCompany)
        this.salary=GivenSalary

    }
    static checkgit(githubAccount){
        if(githubAccount=="Yes"){
            console.log("Saloni27301 is your Github Account")
            
        }
        else{
            console.log("You have No Github Profile!")
        }
    }
}

//new object

prog=new Programmer("saloni",80,"Harman",3637874)
console.log(prog)
Programmer.checkgit("NO")