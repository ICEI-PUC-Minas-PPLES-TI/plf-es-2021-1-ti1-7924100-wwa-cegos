import { db } from '../database/index.js'
import { validate_userPassword } from './validators/password.js'
import { searchNameInDataBase } from '../scripts/utils/search_name_db'
import { searchEmailInDataBase } from '../scripts/utils/search_email_db'

window.onload = () => {
    console.log(db);

    // REGISTER_BUTTON FUNCTIONS
    function enable_registerButton() {
        register_button.removeAttribute('disabled');
        register_button.style.background = '#007bff';
        register_button.style.border = '#007bff'
    }

    function disable_registerButton() {
        register_button.setAttribute('disabled', true);
        register_button.style.background = 'gray';
        register_button.style.border = '#3a3a3a'
    }

    // VALIDATION FUNCTIONS
    function validate_userName(user_name) {
        let regex = /^(?=[a-zA-Z0-9_]{3,20}$)(?!.*[_.]{2})[^_.].*[^_.]$/;
        return regex.test(user_name);
    }

    function validate_userEmail(user_email) {
        let regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
        return regex.test(user_email);
    }

    db.users.push(user);
    localStorage.setItem("users", JSON.stringify(db));

    disable_registerButton();

    userName_check = false;
    userEmail_check = false;
    userPassword_check = false;
    userConfirmPassword_check = false;

    user_name.value = '';
    user_email.value = '';
    user_password.value = '';
    user_passwordConfirm.value = '';
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


    user_name.oninput = () => {
        userName_check = validate_userName(userName.value);


        if (checkData()) return enable_registerButton();
        else return disable_registerButton();
    }

    user_email.oninput = () => {
        userEmail_check = validate_userEmail(userEmail.value);

        if (checkData()) return enable_registerButton();
        else return disable_registerButton();
    }

    user_password.oninput = () => {
        userPassword_check = validate_userPassword(user_password.value);

        if (checkData()) return enable_registerButton();
        else return disable_registerButton();
    }

    user_passwordConfirm.oninput = () => {
        userConfirmPassword_check = (user_password.value == user_passwordConfirm.value);

        if (checkData()) return enable_registerButton();
        else return disable_registerButton();
    }


    /*
    (Não  pode ter email e nome iguais.) -> Função para procurar email ou nome passado
    */

    register_button.onclick = () => {

        let user = {
            name: userName.value,
            email: userEmail.value,
            password: user_password.value
        }

    }

    disable_registerButton();

    userName_check = false;
    userEmail_check = false;
    userPassword_check = false;
    userConfirmPassword_check = false;

    userName.value = '';
    userEmail.value = '';
    user_password.value = '';
    user_passwordConfirm.value = '';

}