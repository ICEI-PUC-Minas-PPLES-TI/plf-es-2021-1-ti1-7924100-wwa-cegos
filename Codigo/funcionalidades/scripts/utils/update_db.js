import { db } from '../../database/index.js'
import { isUserPropertiesValid } from '../utils/valid_user_properties.js'
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
            localStorage.setItem('users', JSON.stringify(db))
        } else {
            throw new Error()
        }
    } catch (error) {
        throw new Error(error)
    }

}