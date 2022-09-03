console.log('this is your console');
let a=document;
a=document.body;
a=document.forms;
a=document.images;
Array.from(a).forEach(function(element){
    console.log(element);
})
console.log(a);
a=document.forms[0];
a=document.all;
/*Array.from(a).forEach(function(element){
    console.log(element);
})*/
a=document.links[1];
//a=document.links;
a=document.scripts;
Array.from(a).forEach(function(element){
    console.log(element);
})
console.log(a);