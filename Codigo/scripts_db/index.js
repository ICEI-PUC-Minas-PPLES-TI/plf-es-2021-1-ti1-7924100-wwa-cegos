const users = localStorage.getItem('users')
const articles = localStorage.getItem('articles')

const db = {
    users: [{
        name: "Cris",
        email: "cris@gmail.com",
        password: "12345Cr!ss",
        favoritiesArticles: [],
        user_type: "normal"
    },
    {
        name: "admin",
        email: "admin@admin.com",
        password: "12345Admin!",
        favoritiesArticles: [],
        user_type: "admin"
    }],

    articles: [{
        id: 1,
        author: "fulano",
        data: "01/02/2021",
        title: "Menu acessível",
        category: "categoria1",
        content: '<p>\
                            <h1>Title</h1>\
                            lorem….\
                            <img src="" />\
                        </p>'
    }]
}

if (users) {
    db.users = JSON.parse(users)
    db.articles = JSON.parse(articles)
}

if(articles) {
    db.articles = JSON.parse(articles)
}

export { db }