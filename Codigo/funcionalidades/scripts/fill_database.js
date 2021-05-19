fetch('../database/users.json').then(file =>
    file.json()
).then(content => {
    localStorage.setItem('users', JSON.stringify(content))
})


