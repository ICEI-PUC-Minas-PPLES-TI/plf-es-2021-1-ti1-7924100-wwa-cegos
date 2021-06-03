const users = localStorage.getItem('users')

const db = {
    users: [{
        name: "Cris",
        email: "cris@gmail.com",
        password: "12345Cr!ss"
    }]
}

if (users) {
    db.users = JSON.parse(users)
}

export { db }