export function searchEmailInDataBase(){
    for(let x = 0; x < db.users.length; ++x){
        if(db.users[x].email == userEmail.value)
        return true;
    }
    return false;
}
