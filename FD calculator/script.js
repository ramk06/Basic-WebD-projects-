function calculateMaturityAmount(){
    // get the inputs values from the form elements
    const principle =parseFloat(document.getElementById('principle').value);
    const interestrate = parseFloat(document.getElementById('interestrate').value);
    const tenure =parseFloat(document.getElementById('tenure').value);

    // Perform the calculation

    const maturityAmount = principle + (principle*interestrate*tenure)/100;

    document.getElementById('result').innerText=`Maturity Amount :${maturityAmount.toFixed(2)}`;
}

//Attach the event listener to  the calculate button
document.getElementById('calculateBtn').addEventListener('click',calculateMaturityAmount);