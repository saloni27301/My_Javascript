console.log(4+7);
//Single element selector
let element=document.getElementById('id1');
//element=element.parentNode;
//element=element.childNodes;
//element=element.className;
//element.style.color='red';
//element.innerText='hey you'
element.innerHTML='<b>This is Javascript practice</b>';
//console.log(element);


//single element selector by using QuerySelectors


let sel=document.querySelector('#id1');
sel=document.querySelector('.child');
sel=document.querySelector('div');
sel=document.querySelector('b');
sel=document.querySelector('button');
sel.style.color='green'
//console.log(sel);


//Multi Element selector
let ele=document.getElementsByClassName('child')
ele=document.getElementsByClassName('container')
//ele=document.getElementsByTagName('div');
//console.log(ele)
//console.log((ele[0]).getElementsByClassName('child'));
  /*  for(let i=0;i<ele.length;i++){
        const elem=ele[i];
        console.log(elem);
        elem.style.color='red';
    }*/

Array.from(ele).forEach(element => {
    console.log(element)
    element.style.backgroundColor='pink';
    element.style.textAlign='center';
});