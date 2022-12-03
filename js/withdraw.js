//stap 1 add event listner to the withdraw button
document.getElementById('btn-withdraw').addEventListener('click', function () {

    //stap 2 get the deposite amount from withdraw input field
    //always remember to use ---.value--- to get text from input field
    //also ansure covert a intup(by defult string) to number by using parseFloat
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawAmountString = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);

    //stap 3 get hte withdraw current total amount
    //for non input use innerText to get the text
    const withdrawTotal = document.getElementById('withdraw-total');
    const previouswithdrawTotalString = withdrawTotal.innerText;
    const previousWithdrawetotal = parseFloat(previouswithdrawTotalString);

    //stap4 add numbers to set the total value
    const currentWithdrawTotal = newWithdrawAmount + previousWithdrawetotal;
    //set the deposit total
    withdrawTotal.innerText = currentWithdrawTotal;

    //stap 5 get balance current total
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalancetotalString = balanceTotalElement.innerText;
    const previousBalancetotal = parseFloat(previousBalancetotalString);

    //stap6 calculate currrent total balance
    const currentBalanceTotal = previousBalancetotal - newWithdrawAmount;
    // set current balance total
    balanceTotalElement.innerText = currentBalanceTotal;
    //stap 7 clear the diposite field
    withdrawField.value = '';
})