document.getElementById('login-submit').addEventListener('click', function () {
    // get user email
    // const emailField = document.getElementById('user-email').value;
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;
    // console.log(userEmail);

    //get user password
    // const passwordField = document.getElementById('user-password').value;
    const passwordField = document.getElementById('user-password');
    const userPassword = passwordField.value;
    // console.log(userPassword);

    //check email & password
    if (userEmail == 'sontan@baap.com' && userPassword == 'secret' || 'admin@codermahabub.com' && userPassword == '12345') {
        window.location.href = "banking.html";
    }
    else {
        console.log('Invalid User!');
    }
});
