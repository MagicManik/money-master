document.getElementById('calculate-button').addEventListener('click', function () {
    updateBalance();
})




function getInputValue(inputId) {

    const inputField = document.getElementById(inputId);
    const inputValue = inputField.value;
    const newInputAmount = parseInt(inputValue);

    if (newInputAmount < 0) {
        alert('You can not input the negative number here');
        return;
    }
    else if (isNaN(newInputAmount)) {
        alert('please input the number');
        return;
    }
    return newInputAmount;
}


function totalExpenses() {

    const foodCost = getInputValue('food-cost');
    const rentCost = getInputValue('rent-cost');
    const clothCost = getInputValue('cloth-cost');
    const totalExpense = foodCost + rentCost + clothCost;
    const incomeAmount = getInputValue('income-input');

    if (totalExpense > incomeAmount) {
        alert('You have not sufficient amount to expense more');
        return;
    }
    else if (isNaN(totalExpense)) {
        return;
    }
    const expenseField = document.getElementById('expense-field');
    expenseField.innerText = totalExpense;

    return totalExpense;
}


function updateBalance() {
    const incomeAmount = getInputValue('income-input');
    const totalExpense = totalExpenses();

    const totalBalance = incomeAmount - totalExpense;


    if (isNaN(totalBalance)) {
        return;
    }
    const balanceFieldAmount = document.getElementById('total-balance');
    balanceFieldAmount.innerText = totalBalance;

    return totalBalance;
}