import { db } from '../scripts_db/index.js'
import { validateUserEmail, validateUserName, validateUserPassword } from './validators/validate_user_data.js'

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

    function checkData() {
        const isUserEmailValidate = validateUserEmail(user_email.value);
        const isUserNameValidade = validateUserName(user_name.value);
        const isUserPasswordValidate = validateUserPassword(user_password.value);
        const isConfirmPasswordValidate = user_password.value === user_passwordConfirm.value;
        return isUserEmailValidate && isUserNameValidade && isUserPasswordValidate && isConfirmPasswordValidate;
    }


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
        const isValidData = checkData()
        if (isValidData) {
            enable_registerButton();
        } else {
            disable_registerButton();
        }
    }

    user_email.oninput = () => {
        const isValidData = checkData()
        if (isValidData) {
            enable_registerButton();
        } else {
            disable_registerButton();
        }
    }

    user_password.oninput = () => {
        const isValidData = checkData()
        if (isValidData) {
            enable_registerButton();
        } else {
            disable_registerButton();
        }
    }

    user_passwordConfirm.oninput = () => {
        const isValidData = checkData()
        if (isValidData) {
            enable_registerButton();
        } else {
            disable_registerButton();
        }
    }


    /*
    (Não  pode ter email e nome iguais.) -> Função para procurar email ou nome passado
    */

    register_button.onclick = () => {
        let user = {
            name: user_name.value,
            email: user_email.value,
            password: user_password.value
        }

        const { users } = db;
        users.push(user);
        localStorage.setItem("users", JSON.stringify(users));
        alert('Cadastro realizado com sucesso');
        window.location.href = 'index.html';
    }

    disable_registerButton();
}