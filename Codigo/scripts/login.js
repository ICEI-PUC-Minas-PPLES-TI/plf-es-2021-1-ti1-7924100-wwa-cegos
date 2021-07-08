import { findUserByPropertieAndValue } from '../scripts/utils/find_user.js'
window.onload = () => {
    loginForm.onsubmit = (ev) => {
        try {
            ev.preventDefault()
            const [user] = findUserByPropertieAndValue({
                'email': userEmail.value,
                'password': userPassword.value
            })
            if (user) {
                delete user.password
                sessionStorage.setItem('currentUser', JSON.stringify(user))
                alert('Login efetuado com sucesso!')
                console
                window.location.href = 'user_logged.html'
            } else {
                alert('Usuário não encontrado!\nEmail ou senha incorretos')
            }

        } catch (error) {
            console.error(error)
            alert('Erro ao efeturar login, tente novamente mais tarde')
        }
    }
}