import { getUsersFromDb } from './get_users_db.js'

export function findUserByPropertieAndValue(propertiesAndValues) {
    let foundedUsers = []
    const users = getUsersFromDb()
    if (users) {
        const [
            isAllValidProperties,
            quantityOfSearchProperties,
            invalidPropertie
        ] = _isSearchPropertiesValid(propertiesAndValues)
        
        if (isAllValidProperties) {
            for (const [_, userData] of Object.entries(users)) {
                let matchedPropertiesValues = 0

                for (const propertie in propertiesAndValues) {
                    const searchValue = propertiesAndValues[propertie]
                    if (userData[propertie] === searchValue)
                        matchedPropertiesValues++
                }

                if (matchedPropertiesValues === quantityOfSearchProperties) {
                    foundedUsers.push(userData)
                }
            }
            return foundedUsers
        } else {
            throw new Error(`The propertie '${invalidPropertie}' does not exist in user properties'`)
        }

    }

    return foundedUsers
}

function _isSearchPropertiesValid(propertiesAndValues) {
    const userProperties = ['name', 'email', 'password']
    const searchProperties = Object.keys(propertiesAndValues)
    const quantityOfSearchProperties = searchProperties.length

    for (const propertie of searchProperties) {
        if (!userProperties.includes(propertie))
            return [false, quantityOfSearchProperties, propertie]
    }


    return [true, quantityOfSearchProperties]
}