//stap 1 add event listner to the diposite button
document.getElementById('btn-diposite').addEventListener('click', function () {
    //stap 2 get the deposite amount from deposit input field
    //always remember to use ---.value--- to get text from input field
    const depositField = document.getElementById('deposit-field')
    const newdipositeAmountString = depositField.value;
    const newdipositeAmount = parseFloat(newdipositeAmountString);
    //stap 3 get hte deposit current total amount 
    //for non input use innerText to get the text
    const diposoteTotalElement = document.getElementById('deposit-total');
    const previousDipositeTotalString = diposoteTotalElement.innerText;
    const previousDipositeTotal = parseFloat(previousDipositeTotalString);

    //stap4 add numbers to set the total value
    const currentDipositTotal = previousDipositeTotal + newdipositeAmount;
    //set the deposit total
    diposoteTotalElement.innerText = currentDipositTotal;

    //stap 5 get balance current total
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalancetotalString = balanceTotalElement.innerText;
    const previousBalancetotal = parseFloat(previousBalancetotalString);

    //stap6 calculate currrent total balance
    const currentBalanceTotal = previousBalancetotal + newdipositeAmount;
    // set current balance total
    balanceTotalElement.innerText = currentBalanceTotal;

    //stap 7 clear the diposite field
    depositField.value = '';
})