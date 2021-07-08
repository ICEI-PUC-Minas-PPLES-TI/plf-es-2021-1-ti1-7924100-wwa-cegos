//TODO: refactor to return user and receive email as param
import {db} from '../../scripts_db/index.js'
export function searchEmailInDataBase() {
    const quantityOfUsers = db.users.length 
    for (let x = 0; x < quantityOfUsers; ++x) {
        if (db.users[x].email == userEmail.value)
            return true;
    }
    return false;
}
