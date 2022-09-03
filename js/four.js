console.log('this is Fourth Javascript file')
let cont=document.querySelector('.container')
//console.log(cont.childNodes);
//console.log(cont.children);


let nodeName=cont.childNodes[7].nodeName;
let nodeType=cont.childNodes[8].nodeType;
//console.log(nodeName);
//console.log(nodeType)
/*Node types
1.Element
2.attribute
3.Text Node
8.Comment
9.document
10.Doctype*/

let container=document.querySelector('div.container')
console.log(container.children[0].children[1].children);

console.log(container.children)
console.log(container.children[1].children)
console.log(container.firstChild)

console.log(container.firstElementChild)
console.log(container.lastChild)
console.log(container.lastElementChild)
console.log(container.childElementCount)
console.log(container.firstElementChild.nextElementSibling.nextElementSibling)