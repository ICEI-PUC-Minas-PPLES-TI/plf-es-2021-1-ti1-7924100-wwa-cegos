import { searchEmailInDataBase } from './utils/search_email_db.js'
import { updateUserDb } from './utils/update_db.js'
import { validate_userPassword } from './validators/password.js'

window.onload = () => {
    forgotPasswordForm.onsubmit = (ev) => {
        ev.preventDefault()

        const userPassword = userNewPassword.value
        const isUserPasswordValid = validate_userPassword(userPassword)
        const userExist = searchEmailInDataBase()

        if (!isUserPasswordValid) {
            alert('Senha fraca!')
        } else if (!userExist) {
            alert('Email não encontrado!')
        } else {
            try {
                updateUserDb(userEmail.value, { 'password': userPassword })
                window.location = '../Tela_login/login.html'
            } catch (error) {
                alert('Impossível de alterar senha, tente novamente mais tarde')
            }
            
        }
    }
}