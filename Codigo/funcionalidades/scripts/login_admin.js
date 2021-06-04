window.onload = () => {

    const db = {
        admin : [{
            name: "admin",
            email: "admin@admin.com",
            password: "Admin12345!"
        }]
    };

    localStorage.setItem("admin", JSON.stringify(db));

    // LOGIN_BUTTON FUNCTIONS
    function enable_loginButton(){
        login_button.removeAttribute('disabled');
        login_button.style.background = '#007bff';
        login_button.style.border = '#007bff'
    }

    function disable_loginButton(){
        login_button.setAttribute('disabled', true);
        login_button.style.background = 'gray';
        login_button.style.border = '#3a3a3a'
    }

    disable_loginButton();

    userEmail.oninput = () => {
        if( userEmail.value != '' && user_password.value != ''){
            enable_loginButton();
        }
        else{
            disable_loginButton();
        }
    }

    user_password.oninput = () => {
        if( userEmail.value != '' && user_password.value != ''){
            enable_loginButton();
        }
        else{
            disable_loginButton();
        }
    }

    login_button.onclick = () => {
        if( userEmail.value == db.admin[0].email && user_password.value == db.admin[0].password){
            alert("Login realizado com sucesso!");
        }
        else{
            alert("Dados inválidos.");

            userEmail.value = '';
            user_password.value = '';

            disable_loginButton();
        }
    }

}
