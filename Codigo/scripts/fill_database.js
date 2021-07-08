import { db } from '../scripts_db/index.js'

localStorage.setItem('users',JSON.stringify(db.users))
localStorage.setItem('articles',JSON.stringify(db.articles))
console.log('so de teste')
console.log('so de teste2')