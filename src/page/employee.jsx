// DATA
import { Form, ShowEntrie } from "#/data/links";
//BUILDER
import Typo from "#/components/build/global/typography";
import Input from "#/components/build/input";
import Dropdown from "#/components/build/dropdown";
import Sort from "#/components/sort";
import Button from "#/components/build/global/button"
// REDUX
import { useSelector } from "react-redux";
//FUNCTION
import Search from "#/components/search";
// REACT
import { useState, useEffect } from "react";
// KEY
import { v4 as uuidv4 } from "uuid";
//
//
//
export default function Employee() {
//
// VARIABLE
//
const user = useSelector((state) => state.userReducer);
const updateUser = useSelector((state) => state.updateReducer);
const [active, setActive] = useState();
const [ShowEntries, setShowEntries] = useState(10);
const [page, setPage] = useState(1);
let numberOfElements = updateUser.length;
let numberPaginate = Math.ceil(numberOfElements / ShowEntries);
const ShowEntriesMIN =  Math.ceil((page - 1) * ShowEntries);
const ShowEntriesMAX =  Math.ceil(page * ShowEntries);
//
// REFRESH VARIABLE
//
useEffect(()=>{
numberOfElements = updateUser.length
numberPaginate = Math.ceil(numberOfElements / ShowEntries)
setPage(1)
}, [updateUser]);
//
//BUILDER 
//
const Thead = Form.slice(0, 9).map((item, index)=>(
<Sort key={index} text={item.text} active={active} fonction={setActive} />
));
const Tbody = (
  <>
  {(updateUser === null || Object.keys(updateUser).length === 0) ? (
    
 user.slice(ShowEntriesMIN, ShowEntriesMAX).map((item)=>(
  <tr key={uuidv4()}>
<th>{item.first_name}</th>
<th>{item.last_name}</th>
<th>{item.date_of_birth}</th>
<th>{item.start_date}</th>
<th>{item.department.abbreviation}</th>
<th>{item.street}</th>
<th>{item.city}</th>
<th>{item.zip_code}</th>
<th>{item.state.abbreviation}</th>
</tr>))

) : (
  
  updateUser.slice(ShowEntriesMIN, ShowEntriesMAX).map((item)=>(
  <tr key={uuidv4()}>
<th>{item.first_name}</th>
<th>{item.last_name}</th>
<th>{item.date_of_birth}</th>
<th>{item.start_date}</th>
<th>{item.department.abbreviation}</th>
<th>{item.street}</th>
<th>{item.city}</th>
<th>{item.zip_code}</th>
<th>{item.state.abbreviation}</th>
</tr>))

)}
</>)
//
const Paginate = [];
for (let i = 1; i <= numberPaginate; i++) {
  Paginate.push(
    <Button 
    variant="t1"
    size="s2"
    fontSize="s2"
    className={`${page === i ? "active" : ""}`}
    key={i} 
    fonction={() =>setPage(i)}>{i}</Button>
  );
}
//
const nextPage = () =>{
if(page < numberPaginate){
  setPage(page + 1)
}
}
//
const previousPage = () =>{
  if(page > 1){
    setPage(page - 1)
  }
  }
//
//
//
    return (
<main className="employee">
<section>
<Typo
  balise="div"
  color="cb"
  size="s7"
  children="Current Employees"
  className="titleEmployee"
  />
  <div className="filter">
  <Input type={Form[9].type} icon={Form[9].icon} text={Form[9].text} search={Search} data={user} />
  <Dropdown icon={Form[10].icon} text={Form[10].text} list={ShowEntrie} fonction={setShowEntries} show={true}/>
  </div>

  <table>
    <thead>
      <tr>
      {Thead}
      </tr>
    </thead>
    <tbody>
    {user.length == 0 && 
    <tr>
    <Typo 
    balise="td" 
    color="cb" 
    size="s7" 
    transform="maj"
    children="There are no employees"
    className="emptyTable"  
    />
    </tr>
    }
      {Tbody}
    </tbody>
  </table>
  <div className="paginate">
    <Button
    variant="t3"
    fontSize="s1"
    item_i={true}
    fonction={previousPage}>Previous</Button>
    {Paginate}
    <Button 
    variant="t2"
    fontSize="s1"
    item_i={true}
    fonction={nextPage}>Next</Button>
  </div>
</section>
</main>
    );
}