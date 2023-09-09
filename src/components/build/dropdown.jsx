import { useState } from 'react';
import Select from 'react-select';

export default function Dropdown({
    text,
    icon,
    list,
    fonction,
}) {
//
//
// VARIABLE
const [isOpen, setIsOpen] = useState(false); 
const [selectedOption, setSelectedOption] = useState(''); 
//
// FERME/OUVRE MODAL
const toggleDropdown = (e) => {
  e.preventDefault();
  setIsOpen(!isOpen);
};
const handleBlur = () => {
    setTimeout(() =>{
        setIsOpen(false)
    }, 100)
  };
//
// SELECTION OPTION
const handleOptionSelect = (option) => {
  setSelectedOption(option);
  fonction(text, option)
  setIsOpen(false);
};
//
//
//
return (
  <div className="dorpdownBox">
    <button 
    onClick={toggleDropdown}
    className={`inputBox ${isOpen || selectedOption ? "active" : ""}`}
    onBlur={handleBlur}
    children={selectedOption.name || ""}
    value={selectedOption.abbreviation}
    />
    {isOpen && (
      <ul className="dropdownMenu">
            {
             list.map((option, index) => (
<li key={index} onClick={() => handleOptionSelect(option)}>
{option.name}
</li>         
           ))}
      </ul>
    )}
        <span>{text}</span>
        <icon.icon />
  </div>
);
}























//     const [selectedOption, setSelectedOption] = useState(''); 
// //
// //
//     return (
//       <div className="dorpdownBox">
//         <select 
//         value={selectedOption} 
//         onChange={(e) => setSelectedOption(e.target.value)}>
//           {
//             list.map((option, index) => (

//             <option 
//             key={index} 
//             value={option.abbreviation}
//             >

//               {option.name}

//             </option>
//           ))}
//         </select>

//         <span>{text}</span>
//         <icon.icon />
//       </div>
//     );
//}
