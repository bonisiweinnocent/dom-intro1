// get a reference to the sms or call radio buttons

// get refences to all the settings fields
var callCostSettingElement = document.querySelector(".callCostSetting");
var smsCostSettingElement = document.querySelector(".smsCostSetting");
var warningLevelSettingElement = document.querySelector(".warningLevelSetting");
var criticalLevelSettingElement = document.querySelector(".criticalLevelSetting");
var callTotalSettingsElement = document.querySelector(".callTotalSettings");
var smsTotalSettingsElement =document.querySelector(".smsTotalSettings");
var totalSettings =document.querySelector(".totalSettings")

//get a reference to the add button
var addOnBtnElement = document.querySelector(".addOnBtn")
//get a reference to the 'Update settings' button
var updateSettingsElement = document.querySelector(".updateSettings");
// create a variables that will keep track of all the settings
var callSet = 0;
var smsSet = 0;
var warningSet = 0;
var criticalSet = 0;
// create a variables that will keep track of all three totals.
var totalCall = 0;
var totalSms = 0;
var grandTotal = 0;
//add an event listener for when the 'Update settings' button is pressed

//add an event listener for when the add button is pressed

//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the call / sms total
// * add the appropriate value to the overall total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen.
// * check the value thresholds and display the total value in the right color.
function calculateBtnClicked() {
 var billItemTypeWithSettingsElement = document.querySelector("input[name='billItemTypeWithSettings']:checked");

if (billItemTypeWithSettingsElement){

    
    var billString = billItemTypeWithSettingsElement.value;
    //split the string
    var billItems = billString.split(",");

    // a variable for the total phone bill.
    var billTotal = 0;
    // console.log("bonny")
    //loop over all the bill items
    for (var i = 0; i < billItems.length; i++) {

        var billItem = billItems[i].trim();

        if(grandTotal<criticalSet){
            if (billItem ===
                 "call") {
                // console.log("call")
                totalCall += callSet;
                grandTotal += callSet;
                
            }
            else if (billItem === "sms") {
                // console.log("sms")
                totalSms =+ smsSet;
                grandTotal += smsSet ;
                // console.log(smsSet);
            }
        }
       
      
    }
add();
}
    // get the string entered in the textArea
  
    //round to two decimals
    // var roundedBillTotal = billTotal.toFixed(2);
    // billTotalElement.innerHTML = roundedBillTotal;
    console.log(callSet)
    callTotalSettingsElement.innerHTML = totalCall.toFixed(2);

    smsTotalSettingsElement.innerHTML = totalSms.toFixed(2);
    console.log(totalSms)
    // grandTotal = totalCall + totalSms;
    totalSettings.innerHTML = grandTotal.toFixed(2);

}
function settings() {

    callSet =parseFloat(callCostSettingElement.value);
    smsSet=parseFloat(smsCostSettingElement.value);
    criticalSet =parseFloat(criticalLevelSettingElement.value);
    warningSet=parseFloat( warningLevelSettingElement.value);



add()

}
function add() {

    
    if (grandTotal >= criticalSet) {
        // adding the danger class will make the text red
        totalSettings.classList.add("danger");
    }
    else if (grandTotal > warningSet) {
        totalSettings.classList.add("warning");
    }
    else {
        totalSettings.classList.remove("danger");
        totalSettings.classList.remove("warning")
    }
}
updateSettingsElement.addEventListener ('click',settings);
addOnBtnElement.addEventListener('click',calculateBtnClicked);