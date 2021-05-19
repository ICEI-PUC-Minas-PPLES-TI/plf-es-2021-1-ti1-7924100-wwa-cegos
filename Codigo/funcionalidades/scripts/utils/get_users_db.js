export function getUsersFromDb(){
    return JSON.parse(localStorage.getItem('users'))
}