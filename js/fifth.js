console.log('This is Fifth Javascript')
//Create Element in js
let element=document.createElement('li')//creare Element
let text=document.createTextNode('thi is fav food list')//Insert Text inside element
element.appendChild(text)//add text in element
//element.innerText='Favourite Food';
//element.innerHTML='<b>Our Fav food</b>';
element.id='Newli'//create id
element.setAttribute('title','mytitle');//create attribute
element.className='Newclass';//crate classname
console.log(element);

//select where to set the element
let ul=document.querySelector('ul#this')
//ul.appendChild(element)
//console.log(element)
//console.log(ul);


//replace element in dom

let elem2=document.createElement('h3')
elem2.id='myh3';
elem2.className='myh3class'
let text1=document.createTextNode('This is H3 Heading');
elem2.appendChild(text1)
//console.log(elem2)
element.replaceWith(elem2)

//remove the element
let myul=document.getElementById('myul');
myul.replaceChild(element,document.getElementById('firstli'))
myul.removeChild(document.getElementById('lastli'));
console.log(element);
let pr=elem2.getAttribute('id')
pr=elem2.getAttribute('class')
pr=elem2.hasAttribute('href')
elem2.removeAttribute('id')
console.log(pr,elem2);


//Quick Assignment


let Firstheading=document.createElement('h2');
Firstheading.id='firstH';
Firstheading.className='FirstClass';
console.log(Firstheading)
let TextH=document.createTextNode("Go to CodewithHarry");
Firstheading.appendChild(TextH);
let h12=document.querySelector('h1#Heading1')
h12.appendChild(Firstheading)
console.log(h12)
console.log(Firstheading)
console.log(TextH)


let cont=document.querySelector('.container')
console.log(cont.children[0].children[1].children);



//create Anchor tag

let Anchor=document.createElement('a')
Anchor.id='MyA'
Anchor.className='MyAclass'
Anchor.innerText="Click here"
Anchor.setAttribute('href',"https://www.codewithharry.com");
console.log(Anchor)
let ele=document.getElementById('Heading1')
ele.appendChild(Anchor)












