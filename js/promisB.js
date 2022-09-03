let students    =[
    {name:"Saloni",subject:"js"},
    {name:"rohan",subject:"wd"}
]
function enrollStudent(student,callback){
    return new Promise(function(resolve,reject){
        setTimeout(()=>{
            students.push(student)
            console.log("Student has been enrolled")
            const error=false
            if(!error){
                resolve()
            }
            else{
                reject()
            }
        },8000)
    })
    
}

function getStudent(){
    setTimeout(()=>{
    let str=''
    students.forEach(student => {
        str+=`<li>${student.name}</li>`
    });        
    document.getElementById('student').innerHTML=str;
    console.log("Students has been fetched ")

    },1000)
}
let newstudent={name:'Sunny',subject:'python'}
enrollStudent(newstudent).then(getStudent).catch(function(){
    console.log("Some error occured")
})
//getStudent()