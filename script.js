function calculateTip() {
    const billAmount = parseFloat(document.getElementById("billAmount").value);
    const tipPercentage = parseFloat(document.getElementById("tipPercentage").value);
    const numberOfGuests = parseFloat(document.getElementById("numberOfGuests").value);


    if (isNaN(billAmount) || isNaN(tipPercentage) || isNaN(numberOfGuests)) {
        alert("Please enter a valid number, thanks.");
        return;
    }

    const tipAmount = (tipPercentage / 100 * billAmount).toFixed(2);
    const totalBill = ((billAmount + parseFloat(tipAmount)) / numberOfGuests).toFixed(2);
    const eachTip = (tipAmount / numberOfGuests).toFixed(2);

    document.getElementById("tipAmount").textContent = `${tipAmount}`;
    document.getElementById("totalBill").textContent = `${totalBill}`;
    document.getElementById('eachTip').textContent = `${eachTip}`;
}

function getBill() {
    const button1 = document.getElementById("button1");
    button1.addEventListener('click', calculateTip);
}

getBill();

function clearInput() {
    document.getElementById('billAmount').value = "";
    document.getElementById('tipPercentage').value = "";
    document.getElementById('numberOfGuests').value = "";
    document.getElementById('tipAmount').textContent = "0.00";
    document.getElementById('totalBill').textContent = "0.00";
    document.getElementById('eachTip').textContent = "0.00";
}


function removeInputs() {
    const button2 = document.getElementById("button2");
    button2.addEventListener('click', clearInput);
}

removeInputs();