import { db } from '../../scripts_db/index.js'
import { isUserPropertiesValid } from '../../scripts/utils/valid_user_properties.js'
import {getLoggedUser} from './get_logged_user.js'

export function updateUserDb(email, updateValues) {
    try {
        const [
            isAllPropertiesValues,
            quantityOfSearchProperties,
            wrongProperties
        ] = isUserPropertiesValid(updateValues)

        if (isAllPropertiesValues) {
            const { users } = db
            const userIndex = users.findIndex(user => user.email === email)
            const user = users[userIndex]
            for (const keyToUpdate in updateValues) {
                user[keyToUpdate] = updateValues[keyToUpdate]
            }
            localStorage.setItem('users', JSON.stringify(db.users))
        } else {
            throw new Error()
        }
    } catch (error) {
        throw new Error(error)
    }

}

export function updateLoggedUser(updateValues) {
    try {
        const user = getLoggedUser()
        const [
            isAllPropertiesValues,
            quantityOfSearchProperties,
            wrongProperties
        ] = isUserPropertiesValid(updateValues)

        if (isAllPropertiesValues) {
            for (const keyToUpdate in updateValues) {
                user[keyToUpdate] = updateValues[keyToUpdate]
            }
        }else{
            throw new Error()
        }
        sessionStorage.setItem('currentUser', JSON.stringify(user))

    } catch (error) {
        throw new Error(error)
    }
}