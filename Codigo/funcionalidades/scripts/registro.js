onload = () => {

    // REGISTER BUTTON FUNCTIONS
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

    // VALIDATE FUNCTIONS
    function validate_userName(userName){
        if (userName.value.length < 3)
        {
            //console.log("Nome inválido!");
            disable_registerButton();
        }
        else{
            //console.log("Nome válido!");
            enable_registerButton();
        }
    }

    disable_registerButton();

    user_name.onchange = () =>{
        validate_userName(user_name);
    }

    /*
    register_button.onclick = () =>{
        console.log("Clicou! Funcionou!");
    }
    */


















}