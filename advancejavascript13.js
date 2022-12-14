//.function is a callback function.
//how many time button is clicked 
function attachEventListeners(){
    let count=0;
    document.getElementById("type").addEventListener("click",function xyz(){
    console.log("button clicked",count++);
    
});

}
attachEventListeners();
