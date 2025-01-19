const statusElement= document.getElementById("status");
let transactionListElement = document.getElementById("transaction-list");
const formElement= document.getElementById("transaction-form");
const transactionElement = document.getElementById("transaction-aim");
const amountElement= document.getElementById("amount");

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
       
       /* transactions.forEach((inputs) => 
        {const li = document.createElement('li');
        li.textContent=inputs.transaction + " : ";
        li.textContent += inputs.amount;
        console.log(inputs.transaction)
        console.log(inputs.amount)
        transactionListElement.appendChild(li);}) */
        
    }
    

function addTransaction (e){
e.preventDefault();
let transaction = transactionElement.value;
let amount = parseFloat(amountElement.value);
const li= document.createElement('li');
li.textContent=transaction+ " : "+amount;
transactionListElement.appendChild(li);
    transactions.push({transaction,amount}); 

   transaction='';
   amount='';
    updateStatus();

 }


formElement.addEventListener('submit', addTransaction); //program starts if there is an event e
updateStatus();