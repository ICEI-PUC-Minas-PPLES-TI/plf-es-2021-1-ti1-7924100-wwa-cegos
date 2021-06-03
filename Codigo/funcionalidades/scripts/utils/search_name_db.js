export function searchNameInDataBase(){
    for(let x = 0; x < db.users.length; ++x){
        if(db.users[x].name == userName.value)
        return true;
    }
    return false;
}
