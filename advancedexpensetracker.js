function saveToLocalStorage(event) {
    event.preventDefault();
    const Expenseamount = event.target.Expenseamount.value;
    const Description = event.target.Description.value;
    const Category = event.target.Category.value;

    const obj = {
        Expenseamount,
        Description,
        Category
    }
    // localStorage.setItem(obj.Description, JSON.stringify(obj));
    // showNewExpensesOnScreen(obj);
    axios.post("https://crudcrud.com/api/9c50c825c1cf46be9e68fb404931bcfd/expensetracker",obj)
    .then((Response)=>{
        showNewExpensesOnScreen(Response.data);
        console.log(Response)
    })
    .catch((error)=>{
        console.log(error)
    })
}

window.addEventListener('DOMContentLoaded', () => {
    axios.get("https://crudcrud.com/api/9c50c825c1cf46be9e68fb404931bcfd/expensetracker")
    .then((Response)=>{
        console.log(Response)
        for(var i=0;i<Response.data.length;i++){
            showNewExpensesOnScreen(Response.data[i])

        }
    })
    .catch((error)=>{
        console.log(error)
    })
})


//     const localStorageObj = localStorage;
//     const localStorageKeys = Object.keys(localStorageObj)

//     for (var i = 0; i < localStorageKeys.length; i++) {
//         const key = localStorageKeys[i]
//         const expensesDetailsString = localStorageObj[key];
//         const expensesDetailsObj = JSON.parse(expensesDetailsString);
//         showNewExpensesOnScreen(expensesDetailsObj)
//     }
// })

function showNewExpensesOnScreen(expense) {

    document.getElementById('Description').value = '';
    document.getElementById('Expenseamount').value = '';
    document.getElementById('Category').value = '';
    // console.log(localStorage.getItem(expense.Descriptions))
    if (localStorage.getItem(expense.Description) !== null) {
        removeExpensesFromScreen(expense.Description)
    }


    const parentNode = document.getElementById('TotalExpenses');
    const childHtml = `<li id=${expense._id}> ${expense.Expenseamount}-${expense.Description}-${expense.Category}
                           <button onclick = deleteExpenses('${expense._id}')> Delete </button>
                           <button onclick = editExpensesDetails('${expense.Description}','${expense.Expenseamount}','${expense.Category}','${expense._id}')>Edit </button> 


                      </li >`
                      parentNode.innerHTML=parentNode.innerHTML+childHtml;



    
}
//edit function

function editExpensesDetails(Descriptions, Expenseamount, Category,expenseId) {
    document.getElementById('Description').value = Descriptions;
    document.getElementById('Expenseamount').value = Expenseamount;
    document.getElementById('Category').value = Category;

    deleteExpenses(expenseId)

}

//delete function

function deleteExpenses(expenseId) {
    axios.delete(`https://crudcrud.com/api/9c50c825c1cf46be9e68fb404931bcfd/expensetracker/${expenseId}`)
    .then((Response)=>{
        removeExpensesFromScreen(expenseId)
    })
    .catch((err)=>{
        console.log(err)
    })
    // console.log(Descriptions)
    // localStorage.removeItem(Descriptions);
    // removeExpensesFromScreen(Descriptions);
}

function removeExpensesFromScreen(Descriptions) {
    const parentNode = document.getElementById('TotalExpenses');
    const childNodeToBeDeleted = document.getElementById(Descriptions);
    if (childNodeToBeDeleted) {
        parentNode.removeChild(childNodeToBeDeleted)
    }
}

