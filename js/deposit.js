document.getElementById('deposit-btn').addEventListener('click', function(){
    const depositField = document.getElementById('deposit-field');
    const newDepositString = depositField.value;
    const newDeposit = parseFloat(newDepositString);

    const depositText = document.getElementById('previous-deposit');
    const previousDepositString = depositText.innerText;
    const previousDeposit = parseFloat(previousDepositString);

    const currentDeposit = previousDeposit + newDeposit;
    depositText.innerText = currentDeposit;

    const balance = document.getElementById('previous-balance');
    const previousBalanceString = balance.innerText;
    const previousBalance = parseFloat(previousBalanceString);

    const currentBalance = previousBalance + newDeposit;
    balance.innerText = currentBalance;
    
    depositField.value = '';

})