export function getLoggedUser() {
    const user = sessionStorage.getItem('currentUser')
    return JSON.parse(user)
}
