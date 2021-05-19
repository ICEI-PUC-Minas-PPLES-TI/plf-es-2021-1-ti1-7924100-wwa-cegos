onload = () => {


    // REGISTER_BUTTON FUNCTIONS
    function enable_registerButton(){
        register_button.removeAttribute('disabled');
        register_button.style.background = '#007bff';
        register_button.style.border = '#007bff'
    }

    function disable_registerButton(){
        register_button.setAttribute('disabled', true);
        register_button.style.background = 'gray';
        register_button.style.border = '#3a3a3a'
    }

    // VALIDATION FUNCTIONS
    function validate_userName(userName){
        let regex = /^(?=[a-zA-Z0-9_]{3,20}$)(?!.*[_.]{2})[^_.].*[^_.]$/;
        return regex.test(userName);
    }

    function validate_userEmail(userEmail){
        let regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
        return regex.test(userEmail);
    }

    function validate_userPassword(userPassword){
        let regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/;
        return regex.test(userPassword);
    }


    var userName_check = false;
    var userEmail_check = false;
    var userPassword_check = false;
    var userConfirmPassword_check = false;

    //
    // checkData() --> CONFIRMS IF ALL DATA IS CORRECT TO REGISTER
    //
    let checkData = () => {return (userName_check && userEmail_check && userPassword_check && userConfirmPassword_check);}
    

    disable_registerButton();


    alert(`Requisitos para cadastrar usuário:
            Nome de usuário:
                    - mínimo de 3 Caracteres;
                    - máximo de 20 Caracteres;
                    - não utilizar Caracteres especiais no final do nome;

            Senha:
                    - mínimo de 8 Caracteres;
                    - pelo menos 1 Número;
                    - pelo menos 1 Letra maiúscula;
                    - pelo menor 1 Letra minúscula;
                    - pelo menos 1 Caractere especial;`);


    user_name.oninput = () =>{
        userName_check = validate_userName(user_name.value);


        if(checkData())     return enable_registerButton();
        else                return disable_registerButton();
    }

    user_email.oninput = () =>{
        userEmail_check = validate_userEmail(user_email.value);

        if(checkData())     return enable_registerButton();
        else                return disable_registerButton();
    }

    user_password.oninput = () =>{
        userPassword_check = validate_userPassword(user_password.value);

        if(checkData())     return enable_registerButton();
        else                return disable_registerButton();
    }

    user_passwordConfirm.oninput = () =>{
        userConfirmPassword_check = (user_password.value == user_passwordConfirm.value);

        if(checkData())     return enable_registerButton();
        else                return disable_registerButton();
    }


    register_button.onclick = () =>{

        let user = {
            user_name: user_name.value,
            user_email: user_email.value,
            user_password: user_password.value
        }

        localStorage.setItem(user_name.value, JSON.stringify(user));

        user_name.value = '';
        user_email.value = '';
        user_password.value = '';
        user_passwordConfirm.value = '';

    }

















}