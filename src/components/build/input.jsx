import React, { useState } from 'react';
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
}) {
//
//
const [isInputFocused, setInputFocus] = useState(false);    
const [selectedDate, setSelectedDate] = useState("");
const regexDate = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/;
//
//
const handleBlur = () => {
  setTimeout(() =>{
  setInputFocus(false)
  }, 100)
  if (regexDate.test(selectedDate) === false){
    setSelectedDate("")
  }
};
//
const handleonChange =(e) =>{
  setSelectedDate(e.target.value)
  fonction(text, e.target.value)
}
//
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
      <Calendar
      class={isInputFocused}
      dateDisplayFormat="dd/MM/yyyy"
      onChange={(date) =>{ 
      setSelectedDate(format(date, 'dd/MM/yyyy'));
      fonction(text, format(date, 'dd/MM/yyyy'))
      }}
      /> 
        </>
    ) : (
      <>
      <div className="inputBox">
      <input 
      type={type}
      onChange={handleonChange} 
      required="required" />
      <icon.icon />
      <span>{text}</span>
    </div>
      </>
    )}  
    </>
)
//
//
    return (
contentInput
    );
}