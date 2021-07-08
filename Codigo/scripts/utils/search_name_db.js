//TODO: refactor to return user and receive name as param
import {db} from '../../scripts_db/index.js'
export function searchNameInDataBase() {
    const quantityOfUsers = db.users.length
    for (let x = 0; x < quantityOfUsers; ++x) {
        if (db.users[x].name == userName.value)
            return true;
    }
    return false;
}
