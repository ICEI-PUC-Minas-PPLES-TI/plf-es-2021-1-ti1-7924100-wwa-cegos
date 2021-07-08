import { searchEmailInDataBase } from '../scripts/utils/search_email_db.js'
import { updateUserDb } from '../scripts/utils/update_db.js'
import { validate_userPassword } from '../scripts/validators/password.js'

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
                window.location = './login.html'
            } catch (error) {
                alert('Impossível de alterar senha, tente novamente mais tarde')
            }
            
        }
    }
}