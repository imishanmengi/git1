var li = document.getElementsByTagName('li');
console.log(li);
li[1].style.backgroundColor="green";

for(var i=0;i<li.length;i++){
   li[i].style.backgroundColor="#f4f4f4";
}