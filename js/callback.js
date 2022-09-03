console.log("This is CallBack Demo")
//pretend that this response is coming from the server
let students    =[
    {name:"Saloni",subject:"js"},
    {name:"rohan",subject:"wd"}
]
function enrollStudent(student,callback){
    setTimeout(()=>{
        students.push(student)
        console.log("Student has been enrolled")
        callback();
    },8000)
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
enrollStudent(newstudent,getStudent)
//getStudent()