//get a reference to the calculate button
var billStringElement = document.querySelector(".billString");
//get a reference to the billTotal element
var calculateBtnElement = document.querySelector(".calculateBtn");
var billTotalElement = document.querySelector(".billTotal")
// add event listener
// add event listener
 var billTotalSpanElement = document.querySelector(".total");



    // logic goes here




//get a reference to the billString

function calculateBtnClicked(){
  // get the string entered in the textArea
  var billString = billStringElement.value;
  //split the string
  var billItems = billString.split(",");
  // a variable for the total phone bill.
  var billTotal = 0;
  //loop over all the bill items
  for (var i=0;i<billItems.length;i++){
      var billItem = billItems[i].trim();
      if (billItem === "call"){
          billTotal += 2.75;
      }
      else if (billItem === "sms"){
          billTotal  += 0.75;
      }
  }
  
  //round to two decimals
  var roundedBillTotal = billTotal.toFixed(2);
  billTotalElement.innerHTML = roundedBillTotal;

   
// if(roundedBillTotal <30 && roundedBillTotal >20){
//   billTotalSpanElement.classList.remove("danger")
// }else if
// (roundedBillTotal >=30){
//     billTotalSpanElement.classList.remove("danger")
// }
billTotalSpanElement.classList.remove("danger")
billTotalSpanElement.classList.remove("warning")
  if(roundedBillTotal >=30){
    billTotalSpanElement.classList.add("danger")
  
}else if
  (roundedBillTotal >=20){
    billTotalSpanElement.classList.add("warning")

}

}
calculateBtnElement.addEventListener('click', calculateBtnClicked);

//link the function to a click event on the calculate button
