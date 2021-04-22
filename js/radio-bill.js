// get a reference to the sms or call radio buttons
var billItemTypeRadioElement = document.querySelector(".billItemTypeRadio");
var radioBillAddBtn = document.querySelector(".radioBillAddBtn");
var callTotalTwoElement = document.querySelector(".callTotalTwo");
var smsTotalTwoElement = document.querySelector(".smsTotalTwo");
var totalTwoElement = document.querySelector(".totalTwo");
var bill = 0;
var callsTot = 0;
var smsTot = 0;

//get a reference to the add button

//create a variable that will keep track of the total bill
var checkedRadioBtn = document.querySelector("input[name='billItemType']:checked");
if (checkedRadioBtn){
    var billItemType = checkedRadioBtn.value
    // billItemType will be 'call' or 'sms'
}
//add an event listener for when the add button is pressed
function textBillTotal(){
    // get the value entered in the billType textfield
    var billTypeEntered = billItemTypeRadioElement.value;
    // update the correct total
    if (billTypeEntered === "call"){
        callsTot += 2.75
    }
    else if (billTypeEntered === "sms"){
        smsTot += 0.75;
    }
    
    //update the totals that is displayed on the screen.
    callTotalTwoElement.innerHTML = callsTot.toFixed(2);
    smsTotalTwoElement.innerHTML = smsTot.toFixed(2);
     bill = callsTot + smsTot;
     totalTwoElement.innerHTML = bill.toFixed(2);
    addclasses()
}

function addclasses(){

    // ... other code here
    
    //update the totals that is displayed on the screen.
    // callsTotalElem.innerHTML = callsTotal.toFixed(2);
    // smsTotalElem.innerHTML = smsTotal.toFixed(2);
    // totalCostElem.innerHTML = totalCost.toFixed(2);
    
    //color the total based on the criteria
    if (bill > 50){
        // adding the danger class will make the text red
        totalTwoElement.classList.add("danger");
    }
    else if (bill > 30){
        totalTwoElement.classList.add("warning");
    }
}

radioBillAddBtn.addEventListener('click',textBillTotal);