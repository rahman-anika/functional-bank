document.getElementById('login-submit').addEventListener('click', function () {

    // console.log('Button clicked');

    //get user email
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;
    // console.log(userEmail);

    //get user password

    const passwordField = document.getElementById('user-password');
    const userPassword = passwordField.value;
    // console.log(userPassword);

    //check user email and password
    if (userEmail == 'sontan@baap.com' && userPassword == 'secret') {
        // console.log('Valid User');
        window.location.href = 'banking.html';

    }

    else {
        console.log('Not Valid User');

    }

});



