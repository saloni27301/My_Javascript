console.log("This is Ajax Demo")

//select id of ftechbtn

let fetchbtn=document.getElementById('fetchbtn')
fetchbtn.addEventListener('click',buttonClickHandler)
function buttonClickHandler(){
    //institate aa xhr object
    console.log('You have clicked the fetchbtn')
    let xhr=new XMLHttpRequest();

    //open the object
    //xhr.open('Get','https://jsonplaceholder.typicode.com/todos/1',true)
    //now for post request
    xhr.open('POST','http://localhost:54118/api/UserApi',true)
    xhr.getResponseHeader('Content-type','application/x-www-form-urlencoded')
    //what to do in progress
    xhr.onprogress=function(){
        console.log('On progress')
    }
    //onreadystatusChange
    xhr.onreadystatechange=function(){
        console.log('ready state is', xhr.readyState)
    }
    xhr.onload=function(){
        if(this.status===200){
            console.log(this.responseText)
        }
        else{
            console.log('Some Error occured')  
        }
        
    }
    params=
        `{
            "name": unamdsjbjase,
            "username": uloginname,
            "email": uemail,
            "password": upwd
        }`
     
    xhr.send(params)
    console.log("We are done!")
}