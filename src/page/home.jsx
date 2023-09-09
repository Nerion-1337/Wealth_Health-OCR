import { Form } from "#/data/links";
//BUILDER
import Input from "#/components/build/input";
import Typo from "#/components/build/global/typography";
import Dropdown from "#/components/build/dropdown";
// REACT
import { useRef, useState } from "react";
// REDUX
import { store } from "#/reducers/store";
import { postUser } from '#/actions/user_action'
//DATA
import Departments from '../data/Departments.json'
import States from '../data/States.json'
//
//
//

export default function Home() {
//
// VARIABLE
//
const [formData, setFormData] = useState("");
//
//
//
const handleChange = (fieldName, newValue) => {
  const updatedFormData = { ...formData };
  updatedFormData[fieldName] = newValue;
  setFormData(updatedFormData);
};
//
const handleSubmit = (e) =>{
//  
  e.preventDefault();
//  
//
console.log(formData)
store.dispatch(postUser(formData));
}
//
// BUILDER
//
const formulaire1 = Form.slice(0, 5).map((item, index)=>(
  <>
  {item.text == "Department" ? (
    <Dropdown key={index} icon={item.icon} text={item.text} list={Departments} fonction={handleChange} />
  ) : (
    <Input key={index} type={item.type} icon={item.icon} text={item.text} fonction={handleChange} />
  )
  }
  </>
));
const formulaire2 = Form.slice(5, 10).map((item, index)=>(
  <>
  {item.text == "State" ? (
    <Dropdown key={index} icon={item.icon} text={item.text} list={States} fonction={handleChange}/>
  ) : (
    <Input key={index} type={item.type} icon={item.icon} text={item.text} fonction={handleChange}/>
  )
  }
  </>
));
//
//
    return (
<main className="home">
<form onSubmit={handleSubmit}>
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