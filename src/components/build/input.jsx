import React, { useState, useRef, useEffect } from 'react';
// PLUGIN
import { Calendar } from 'react-date-range';
import { format } from 'date-fns';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
//
//
//
export default function Input({
    type,
    icon,
    text,
    fonction,
    search,
    data,
}) {
//
// VARIABLE
//
const [isInputFocused, setInputFocus] = useState(false);    
const [selectedDate, setSelectedDate] = useState("");
const regexDate = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/;
const calendarRef = useRef(null);
//
// FONCTION FOCUS INPUT
//
const handleBlur = () => {
  if (regexDate.test(selectedDate) === false){
    setSelectedDate("")
  }
};
//
// FONCTION ANALYSE VALUE INPUT
//
const handleonChange = (e) =>{
  setSelectedDate(e.target.value)
  fonction(text.replace(/\s/g, '_').toLowerCase(), e.target.value)
}
//
// FONCTION POUR FERME CALENDAR
//
const handleClickOutside = (event) => {
  if (calendarRef.current && !calendarRef.current.contains(event.target)) {
    setInputFocus(false);
  }
};
useEffect(() => {
  document.addEventListener('mousedown', handleClickOutside); 
  return () => {
    document.removeEventListener('mousedown', handleClickOutside);
  };
}, []);
//
// FONCTION RECHERCHE
//
const handleonSearch = (e) =>{
  const value = e.target.value;
  search(data, value) 

}
//
// BUILDER
//
const contentInput = (
    <>
    {text == "Date of Birth" || text == "Start Date" ? (
      <>
      <div className={`inputBox ${isInputFocused ? "active" : ""}`}>
      <input
      type={type} 
      value={selectedDate} 
      onFocus={() => setInputFocus(true)} 
      onBlur={handleBlur}
      onChange={handleonChange} 
      required="required" />
      <icon.icon />
      <span>{text}</span>  
      </div>
      <div className="calendar" ref={calendarRef} >   
      <Calendar
      class={isInputFocused}
      dateDisplayFormat="dd/MM/yyyy"
      onChange={(date) =>{ 
      setSelectedDate(format(date, 'dd/MM/yyyy'));
      fonction(text.replace(/\s/g, '_').toLowerCase(), format(date, 'dd/MM/yyyy'));
      setInputFocus(false);
      }}
      />
      </div>
        </>
    ) : (
<>
      {fonction ? (
      <div className="inputBox">
      <input 
      type={type}
      onChange={handleonChange} 
      required="required" />
      <icon.icon />
      <span>{text}</span>
    </div>
      ) : (     
      <div className="inputBox">
      <input 
      type={type}
      onChange={handleonSearch} 
      required="required" />
      <icon.icon />
      <span>{text}</span>
    </div>     
      )}
 </>
    )}  
    </>
)
//
//
//
    return (
contentInput
    );
}