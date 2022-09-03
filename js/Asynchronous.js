console.log("this is Asynschronous Demo")


/*Asynchornous said ki tum aage ka function ko 
dekhlo but jo bhi tumne settimeout  function kai andr likha hai woh 
tumhare set kiye hue time pr chal jayega tum bs aage ka function handle karo karo*/
setTimeout(()=>{
for(let i=0;i<10;i++){
    console.log("this is Index Element" + i)
}
},500)
console.log("This is not going to end")