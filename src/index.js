//get bill input 
const tipForm = document.getElementById("tip-form");//global scope

tipForm.addEventListener("submit", function(e){
    e.preventDefault();
    const billAmount = NUmber(document.querySelector("#bill-amount").value);//scoped to function,
    //function scope
    const tipPercentage = Number(document.querySelector("#tip-amount").value);
    //do some math for the tip
    //do some math for the tip plus bill
    const tipAmount = document.querySelector("#final-tip");
    tipAmount.innerHTML = '${tipPercent}-'
})

