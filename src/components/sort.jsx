// REDUX
import { store } from "#/reducers/store";
import { getUser, postUserSec } from '#/actions/user_action';
// REACT
import { useState } from "react";
//
//
//
export default function Sort({text, active, fonction}){
//
// VARIABLE
//
const [isAscending, setIsAscending] = useState(true);
//
// FUNCTION
//
function tri(data){   
//    
const data_text = text.replace(/\s/g, '_').toLowerCase();
const newData = [...data]
//
newData.sort((a, b) => {
        let nameA;
        let nameB;
if(text === "Department" || text === "State"){
  nameA = a[data_text].abbreviation.toLowerCase();
  nameB = b[data_text].abbreviation.toLowerCase();
} else{
  nameA = a[data_text].toLowerCase();
  nameB = b[data_text].toLowerCase();
}
        if (isAscending) {
            // Tri ascendant
            if (nameA < nameB) {              
              return -1;
            }
            if (nameA > nameB) {
              return 1;
            }
          } else {
            // Tri descendant
            if (nameA > nameB) {
              return -1;
            }
            if (nameA < nameB) {
              return 1;
            }
          }
          return 0;
        });
  //      
  return newData;      
}
//
function handleClick(){
//
const state = store.getState();
//
store.dispatch(postUserSec(tri(state.userReducer)));
store.dispatch(getUser(tri(state.updateReducer)));
//
fonction(text);
setIsAscending(!isAscending) 
}
//
//
return(
    <th onClick={handleClick}>
     {text}
     {active == text ? (
      <>
     {isAscending ? " ↓" : " ↑"}
     </>
     ):(<> </>)
     }
    </th>
)
}