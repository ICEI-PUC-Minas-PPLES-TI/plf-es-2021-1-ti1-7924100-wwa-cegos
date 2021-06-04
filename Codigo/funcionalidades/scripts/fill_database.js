import { db } from '../database/index.js'

localStorage.setItem('users',JSON.stringify(db.users))
