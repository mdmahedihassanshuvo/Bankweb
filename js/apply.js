// 1st step
document.getElementById('submit-btn').addEventListener('click', function(){
    const email = document.getElementById('email-field').value;
    const password = document.getElementById('password-field').value;

    if((email === 'mhshuvo6795@gmail.com') && (password === 'shuvo007')){
        window.location.href = 'bank.html'
    }
    else{
        alert('Input the valid email and password');
    }
})