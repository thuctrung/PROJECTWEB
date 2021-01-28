var checkLogIn = false;

function signIn() {
    var mail = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    loadUser();
    saveUser();
    for (var i in user) {
        if (mail == user[i].email && password == user[i].pass) {
            console.log(mail + password)
            alert("sign success");
            checkLogIn = true;
            afterSignIn();
            break;
        }
    }
    if (!checkLogIn) {
        alert("Email or password incorrect!");
        return checkLogIn;
    }
    return checkLogIn;
}