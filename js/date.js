// console.log("Hey");
// let D= new Date();
// D=new Date(' Aug 9 2022')
// console.log(D)
// console.log(D.getDate())
// console.log(D.getMinutes())
// console.log(D.getSeconds())
// console.log(D.getHours())
// console.log(D.getDay())
// console.log(D.getMonth())
// console.log(D.setDate(12))
// console.log(D)
// console.log(D.setMonth(7))
// console.log(D.getHours(42))
// console.log(D.setFullYear(1991))
// console.log(D)

//Object Literals

// obj={
//     'Name':'Saloni','course':'Btech','Rollno':120,
//     number:function(Grade){
//         console.log("this is Yours marks");
//     }
// }
// console.log(obj)

//constructor
// function Marks(NewName,Newcourse){
//     this.Name=NewName;
//     this.course=Newcourse;
//     this.run=function(){
//         console.log(`${this.course} is your course`)
//     }
//     this.analyze=function(){
//         console.log(`${this.Name} is your new Name`)
//     }
// }
// function Obj(NewCourse)
// {
//     this.course=NewCourse;
// }
// Obj.prototype.getName= function(){
//     return this.name
// }
// let obj1=new Obj('Ram');
// console.log(obj1)
//object calling constructor
// obj1=new Marks('priya','B.com');
// obj2=new Marks('Ritika','honours');

// console.log(obj,obj1,obj2)
// console.log(obj1)
// console.log(obj2)


//prototype Inheritance
// function flour(nbread,nbakingpowder,nwhitesugar){
//     this.bread=nbread
//     this.bakingpowder=nbakingpowder
//     this.whitesugar=nwhitesugar;
// }
// flour.prototype.Egg=function(){
//     return `This is Cake Recipe`
// }

// let obj3=new flour('Brown','3mm','5mm')
// console.log(obj3.Egg())


// function Cake(nbread,nbakingpowder,nwhitesugar,negg)
// {
//     flour.call(this,nbread,nbakingpowder,nwhitesugar)
//     this.egg=negg;
// }
// Cake.prototype=Object.create(flour.prototype)
// Cake.prototype.constructor=flour
// let obj4=new Cake('Brown','3mm','5mm','yes')
// console.log(obj4)
// console.log(obj4.Egg())