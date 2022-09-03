console.log("Welcome to the Topic Event")

document.getElementById('Head').addEventListener
("mouseover",function(e){
    let variable;
    console.log('You clicked the Heading')
    variable=e.target;
    variable=e.target.id;
    variable=e.target.className;
    variable=e.target.classList;
    variable=Array.from(e.target.classList);
    variable=e.offsetX;
    variable=e.offsetY;
    variable=e.clientX;
    variable=e.clientY;
   // console.log(variable)
   
    //location.href='//google.com'
})


// let btn=document.getElementById('btn')
// btn.addEventListener('click',fun1);
// btn.addEventListener('dblclick',fun2);
// btn.addEventListener('mousedown',fun3)
// function fun1(e){
//     console.log('Thanks For clicking',e)
//     e.preventDefault();
// }

// function fun2(e){
//     console.log('Thanks For double clicking',e)
//     e.preventDefault();
// }
// function fun3(e){
//     console.log('Thanks this is mouse down',e)
//     e.preventDefault();
// }


document.querySelector('.container').addEventListener('mouseenter',function(e){
    console.log("You entered in the Window")
});

document.querySelector('.container').addEventListener('mouseleave',function(e){
    console.log("You leave in the Window")
    document.body.style.backgroundColor='pink';
});
document.querySelector('.container').addEventListener('mousemove',function(e){
    console.log("You triggered in the Window")
    document.body.style.backgroundColor='blue';
    console.log(e.offsetX)
});