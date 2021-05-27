import React, { useState } from "react";
import DatePicker from "react-datepicker";
import moment from "moment";
import './Plan.css'
import "react-datepicker/dist/react-datepicker.css";

function AddPlan() {
    const [plan,setplan]=useState([
        {   
            title:"",
            dateFrom:"",
            dateTo:""
        }
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
    <div className="card-body cennter">
    <form className="center"onSubmit={(e)=>handleSubmit(e)} onChange={(e)=> handleChange(e)}>
        <input type="text" className="form-control styled-select"  name="title"  placeholder="Enter Title Plan"/>
        <div className="form-group form-check">
                    <div className="mt-10">
                        <label className="mr-20">Date From : </label>
                        {/* <DatePicker 
                            name="dateFrom"
                            selected={ checkInDate }
                            minDate={new Date()}
                            onChange={ handleCheckInDate}
                            showTimeSelect
                            timeFormat="HH:mm"
                            timeIntervals={20}
                            timeCaption="time"
                            dateFormat="dd-MM-yyyy hh:mm:ss a"
                        /> */}
                      <input 
                        //onChange={ handleCheckInDate}
                        id="party" 
                        type="datetime-local" 
                        name="dateFrom" 
                        //selected={ checkInDate }
                        >
                      </input>
                    </div>
                    <div className="mt-10 justify-content-center">
                        <label className="mr-30">Date To : </label>
                        <input 
                        //onChange={ handleCheckOutDate}
                        id="party" 
                        type="datetime-local" 
                        name="dateTo" 
                        //selected={ checkOutDate }
                        >
                      </input>
                        {/* <DatePicker
                            name="dateTo"
                            selected={ checkOutDate }
                            minDate={checkInDate}
                            onChange={ handleCheckOutDate}
                            showTimeSelect
                            timeFormat="HH:mm"
                            timeIntervals={20}
                            timeCaption="time"
                            dateFormat="dd-MM-yyyy hh:mm:ss a"
                        /> */}
                    </div>
            </div>
            <button type="submit" className="btn btn-primary text-center text-dark">Submit</button>
      </form>
    </div>
  );
}

export default AddPlan;