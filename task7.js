var itemList = document.querySelector('#items');
//parentElement
console.log(itemList.parentElement);
itemList.parentElement.style.backgroundColor = '#f4f4f4';
//console.log(itemList.childNodes);
console.log(itemList.children);
itemList.children[1].style.backgroundColor ="green";
//lastelementchild
console.log(itemList.lastElementChild);
itemList.lastElementChild.style.backgroundColor ="yellow";
//firstelementchild
console.log(itemList.firstElementChild);
itemList.firstElementChild.textContent="hello 1";
//lastElementchild
console.log(itemList.lastElementChild);
itemList.lastElementChild.textContent="hello 1";

//nextSibling
console.log(itemList.nextSibling);
//nextElementSibling
console.log(itemList.nextElementSibling);
//It shows null because we didnot have any sibling:-;
//previousSibling
console.log(itemList.previousSibling);
//previousElementSibling
console.log(itemList.previousElementSibling);
itemList.previousElementSibling.textContent="ishan";

//create Element
var newDiv = document.createElement('div');
//create class
newDiv.className="hello";
//create id
newDiv.id=01;
console.log(newDiv);
//create textnode
var newDivText = document.createTextNode('hello world');
newDiv.appendChild(newDivText);
console.log(newDiv);