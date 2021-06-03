import React, { useState } from "react";
import DatePicker from "react-datepicker";
import moment from "moment";
import './Plan.css'
import "react-datepicker/dist/react-datepicker.css";

function AddPlan() {
    const [plan,setplan]=useState([
    ])
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);

  const handleCheckInDate = (date) => {
    setCheckInDate(date)
    setCheckOutDate(null);
  };

  const handleCheckOutDate = (date) => {
    setCheckOutDate(date)
    
  };
  function handleSubmit(e){
    e.preventDefault();
    
    console.log(plan)
    
}
function handleChange(e){
 // const values={...plan,[e.target.name]:e.target.value};
              //  console.log(values)
              //  console.log(e.target.name)
               setplan({...plan ,[e.target.name]:e.target.value} )
}
  return (
    <></>
  );
}

export default AddPlan;