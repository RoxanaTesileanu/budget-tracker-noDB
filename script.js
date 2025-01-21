const statusElement= document.getElementById("status");
let transactionListElement = document.getElementById("transaction-list");
const formElement= document.getElementById("transaction-form");
let transactionElement = document.getElementById("transaction-aim");
let amountElement= document.getElementById("amount");
let transIndex=0;
let transactions= []; 

function updateStatus(){
    let sum = 0;
    for (const inputs of transactions) {   
        console.log(inputs)
        sum += inputs.amount;
        console.log(sum)
        statusElement.textContent= `${sum}`;
        console.log(statusElement.textContent)
    }
       
    }
    

function addTransaction (e){
e.preventDefault();
let transaction = transactionElement.value;
let amount = parseFloat(amountElement.value);
const li= document.createElement('li');
li.textContent=transaction+ " : "+amount;
const newButton=document.createElement('button');

transactionListElement.appendChild(li);
    transactions.push({transaction,amount,li, transIndex, newButton}); 
    transIndex+= 1;
    updateStatus();
 

newButton.setAttribute('id', 'added button');
newButton.textContent= " x ";
li.appendChild(newButton);
newButton.addEventListener('click', deleteTransaction); 

 }


 function deleteTransaction(e) {
    e.preventDefault();
    
    // Finde die Transaktion im Array anhand des Listenelements (li)
    const li = e.target.parentElement;
    const index = transactions.findIndex(t => t.li === li);

    // Entferne die Transaktion aus dem Array
    if (index !== -1) {
        transactions.splice(index, 1);
    }
    li.remove();
    if (transactions.length===0) {return statusElement.textContent="0.00";} else {
        updateStatus();}
    
}

 /*
 function deleteTransaction (e) {
    e.preventDefault();
    e.target.parentElement.remove();
    e.target.remove();
   */ 
    

 
formElement.addEventListener('submit', addTransaction); //program starts if there is an event e
