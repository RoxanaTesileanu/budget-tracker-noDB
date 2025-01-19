const statusElement= document.getElementById("status");
let transactionListElement = document.getElementById("transaction-list");
const formElement= document.getElementById("transaction-form");
let transactionElement = document.getElementById("transaction-aim");
let amountElement= document.getElementById("amount");

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
transactionListElement.appendChild(li);
    transactions.push({transaction,amount}); 
    updateStatus();
 transaction="";
 amount="";
 }

 

 


formElement.addEventListener('submit', addTransaction); //program starts if there is an event e
updateStatus();