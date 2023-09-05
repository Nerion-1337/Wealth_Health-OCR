import { Form } from "#/data/links";
//BUILDER
import Input from "#/components/build/input";
import Typo from "../components/build/global/typography";
// REACT
import { useRef, useState } from "react";
// REDUX
import { store } from "#/reducers/store";
import { postUser } from '#/actions/user_action'
//
//
//

export default function Home() {
//
// VARIABLE
//
const [dateOfBirth, setDateOfBirth] = useState("");
const [selectedDate, setSelectedDate] = useState(null);
const form = useRef();
const formDataKeys = [
  'firstName',
  'lastName',
  'dateOfBirth',
  'startDate',
  'department',
  'street',
  'city',
  'zipCode',
  'state',
];
//
// BUILDER
//
const formulaire1 = Form.slice(0, 5).map((item, index)=>(
  <Input key={index} type={item.type} icon={item.icon} text={item.text} />
));
const formulaire2 = Form.slice(5, 10).map((item, index)=>(
    <Input key={index} type={item.type} icon={item.icon} text={item.text} />
));
//
//
//
const handdata = (e) =>{
//  
  e.preventDefault();
//  
const dataForm = formDataKeys.reduce((formData, key, index) => {
  formData[key] = form.current[index].value;
  return formData;
}, {});
//
store.dispatch(postUser(dataForm));
}
//
//
    return (
<main className="home">
<form onSubmit={handdata} ref={form}>
<Typo
  balise="div"
  color="cb"
  size="s7"
  children="Create Employee"
  className="titleForm"
  />
<section>
<div className="blocInput">
<Typo
  balise="div"
  color="cw"
  size="s5"
  children="User"
  className="titleInput"
  transform="maj"
  />
{formulaire1}
</div>
<div className="blocInput">
<Typo
  balise="div"
  color="cw"
  size="s5"
  children="address"
  className="titleInput"
  transform="maj"
  />
{formulaire2}  
</div>
</section>
<input type="submit" value="Save" className="submitForm maj size-typo5"/>
</form>

</main>
    );
}