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
}) {
//
//
const [isInputFocused, setInputFocus] = useState(false);    
const [selectedDate, setSelectedDate] = useState("");
//
//
const contentInput = (
    <>
    {text == "Date of Birth" || text == "Start Date" ? (
      <>
      <div className={`inputBox ${isInputFocused ? "active" : ""}`}>
      <input
      type={type} 
      value={selectedDate ? format(selectedDate, 'dd/MM/yyyy') : ''} 
      onFocus={() => setInputFocus(true)} 
      onBlur={() => setInputFocus(false)} 
      required="required" />
      <icon.icon />
      <span>{text}</span>  
      </div>   
      <Calendar
      className={isInputFocused}
      dateDisplayFormat="dd/MM/yyyy"
      onChange={(date) => setSelectedDate(date)}
      /> 
        </>
    ) : (
      <>
      <div className="inputBox">
      <input 
      type={type} 
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