document.getElementById('withdraw-btn').addEventListener('click', function(){
    const withdrawField = document.getElementById('withdrow-field');
    const newWithdrawString = withdrawField.value;
    const newWithdraw = parseFloat(newWithdrawString);
    
    withdrawField.value = '';
    if(isNaN(newWithdraw)){
        alert('Please input a valid number');
        return
    }

    const balance = document.getElementById('previous-balance');
    const previousBalanceString = balance.innerText;
    const previousBalance = parseFloat(previousBalanceString);

    if(newWithdraw > previousBalance){
        alert("You don't have enough balance");
        return;
    }

    const withdrawText = document.getElementById('previous-withdraw');
    const withdrawString = withdrawText.innerText;
    const previousWithdraw = parseFloat(withdrawString);
    
    const currentWithdrew = previousWithdraw + newWithdraw;
    withdrawText.innerText = currentWithdrew;

    const currentBalance = previousBalance - newWithdraw;
    balance.innerText = currentBalance;



})