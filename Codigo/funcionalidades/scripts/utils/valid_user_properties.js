export function isUserPropertiesValid(propertiesAndValues) {
    const userProperties = ['name', 'email', 'password']
    const searchProperties = Object.keys(propertiesAndValues)
    const quantityOfSearchProperties = searchProperties.length

    for (const propertie of searchProperties) {
        if (!userProperties.includes(propertie))
            return [false, quantityOfSearchProperties, propertie]
    }
    return [true, quantityOfSearchProperties]
}
