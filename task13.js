function saveToLocalStorage(event) {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    //localStorage.setItem('name', name);
    //localStorage.setItem('email', email);
    const obj = {name,email}
    localStorage.setItem(obj.email, JSON.stringify(obj));
    showNewUserOnScreen(obj);
}

function showNewUserOnScreen (user) {

    document.getElementById('email').value='';
    document.getElementById('name').value='';


    const parentNode = document.getElementById('listOfUsers');
    const childHTML = `<li> ${user.name} - ${user.email} </li>`
    const childHTML = `<li id=${user.email}> ${user.name} - ${user.email}
        <button onclick=deleteUser('${user.email}')> Delete User </button> 
        <button onclick=editUser('${user.email}','${user.name}')> Edit User </button>
        </li>`

    parentNode.innerHTML = parentNode.innerHTML+childHTML;
}
}

function deleteUser(emailId){
    console.log(emailId)
    localStorage.removeItem(emailId);
    removeUserFromScreen(emailId);

}   

function removeUserFromScreen(emailId){
    const parentNode = document.getElementById('listOfUsers');
    const childNodeToBeDeleted = document.getElementById(emailId);

    parentNode.removeChild(childNodeToBeDeleted)
}

function editUser(emailId, name) {
    document.getElementById('email').value=emailId;
    document.getElementById('name').value=name;

    deleteUser(emailId)

}
