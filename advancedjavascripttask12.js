//this inside global scope
this.table ='window table';
console.log(window.table);

this.garage={
    table: 'garage table',
    cleansTable(){
        console.log(`cleaning ${this.table}`)
    }
}
this.garage.cleansTable();

//this inside an object
let johnsroom = {
    table:'johns table'
    
}
console.log(johnsroom.table);

// this inside an method
let johnroom = {
    table:'john table',
    cleanTable(){
        console.log(`cleaning ${this.table}`)
    }
}
johnroom.cleanTable();

//this indside a function
this.table='window table';
const cleanshoes = function(){
    console.log(`cleaning ${this.table}`)
}
cleanshoes.call(this);
