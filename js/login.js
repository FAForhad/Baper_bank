//stap-1 add event handler with submit button

document.getElementById('btn-submit').addEventListener('click', function () {
    //stap-2 get the email into the input fiels
    //always remember to use ---.value--- to get text from input field
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    //stap-3 get password
    //3.a set id on the html element
    //3.b get the element
    //3.c get the value form element
    const passwordField = document.getElementById('user-password')
    const password = passwordField.value;

    //---DANGER----DO NOT VERIFY EMAIL PASSWORD ON THE CLINT SIDE

    //stap-4 vaify email and password
    if (email === "shontan@baap.com" && password === 'secret') {
        window.location.href='bank.html'
    }
    else {
        alert('tui password vule gesos----toke ami teijjo shontan goshona korlam')
    }
})