// calculate event handler or calculate button
document.getElementById('calculate-btn').addEventListener('click', function () {
    updateBalance();
});



// saving amount event handler or saving button
document.getElementById('saving-btn').addEventListener('click', function () {
    const savingsAmount = savings();
    const balanceTotal = updateBalance();

    if (savingsAmount > balanceTotal) {
        alert('You have not sufficient balance to save');
        return;
    }

    // to get remaining blance
    const remainingBalance = balanceTotal - savingsAmount;

    // handle not a number
    if (isNaN(remainingBalance)) {
        return;
    }

    // set update remaining blance on remaining blance
    const setRemainingBlance = document.getElementById('remaining-balance');
    setRemainingBlance.innerText = remainingBalance;
});



//update balance after expenses
function updateBalance() {
    const incomeAmount = getInputValue('income-input');

    // expense list
    const foodCost = getInputValue('food-cost');
    const rentCost = getInputValue('rent-cost');
    const clothCost = getInputValue('cloth-cost');

    // total expense
    const totalExpense = foodCost + rentCost + clothCost;

    // handle over expense input than income amount
    if (totalExpense > incomeAmount) {
        alert('You have not sufficient amount to expense more');
        return;
    }
    // handle not a number
    else if (isNaN(totalExpense)) {
        return;
    }

    // update total expense
    const expenseField = document.getElementById('total-expenses');
    expenseField.innerText = totalExpense;

    // balance
    const totalBalance = incomeAmount - totalExpense;

    // handle NaN error
    if (isNaN(totalBalance)) {
        return;
    }

    // update balance
    const balanceFieldAmount = document.getElementById('total-balance');
    balanceFieldAmount.innerText = totalBalance;

    return totalBalance;
};



// to get input value of every input
function getInputValue(inputId) {

    // access input field
    const inputField = document.getElementById(inputId);
    const inputValue = inputField.value;
    const newInputAmount = parseInt(inputValue);

    // handle 'negative' input
    if (newInputAmount < 0) {
        alert('You can not input the negative number here');
        return;
    }

    // handle 'string' input
    else if (isNaN(newInputAmount)) {
        alert('please input the number');
        return;
    }
    else {
        return newInputAmount;
    }
};



// savings part
function savings() {
    const incomeAmount = getInputValue('income-input');
    const savingsPercent = getInputValue('save-input');

    // get savings amount
    const savings = (incomeAmount * savingsPercent) / 100;

    // handle not a number
    if (isNaN(savings)) {
        return;
    }
    // update savings amount
    const saveField = document.getElementById('saving-amount');
    saveField.innerText = savings;

    return savings;
};