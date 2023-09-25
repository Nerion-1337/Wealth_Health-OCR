// REDUX
import { store } from "#/reducers/store";
import { getUser } from '#/actions/user_action'
//
//
//
export default function Search(user, value){
//
//
const resultat = user.filter(object =>{
    for (const prop in object) {
        if (object[prop] && object[prop].toString().includes(value)) {
            return true; 
        }
    }
    return false;
})
//
//
store.dispatch(getUser(resultat));    
}