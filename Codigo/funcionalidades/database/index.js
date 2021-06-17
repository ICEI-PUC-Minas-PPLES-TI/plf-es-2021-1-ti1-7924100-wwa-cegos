const users = localStorage.getItem('users')

const db = {
    users: [{
        name: "Cris",
        email: "cris@gmail.com",
        password: "12345Cr!ss",
        user_type: "normal"
    },
    {
        name: "admin",
        email: "admin@admin.com",
        password: "12345Admin!",
        user_type: "admin"
    }]
}

if (users) {
    db.users = JSON.parse(users)
}

export { db }
