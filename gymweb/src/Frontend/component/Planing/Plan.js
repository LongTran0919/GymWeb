import * as React from 'react';
import "./Plan.css"
import Paper from '@material-ui/core/Paper';
import {useContext,useState,useEffect} from 'react';
import DatePicker from 'react-datepicker';
import { ViewState, EditingState } from '@devexpress/dx-react-scheduler';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import {IoIosAddCircle} from 'react-icons/io';
import Form from'./AddPlan'
import "react-datepicker/dist/react-datepicker.css";
import {
  Scheduler,
  Appointments,
  AppointmentForm,
  AppointmentTooltip,
  WeekView,
  MonthView,
  EditRecurrenceMenu,
  AllDayPanel,
  ConfirmationDialog,
} from '@devexpress/dx-react-scheduler-material-ui';
import { appointments } from './data/appointments';
export default function Plan(){
  const [plan,setplan]=useState([
  ])
    const [state,setstate]=useState([
      {
        data: plan,
        currentDate: Date().toLocaleString(),
      }
    ])
      
  const [data,setdata]=useState("");
  const [startDate, setStartDate] = useState(new Date());
  


function handleSubmit(e){

  e.preventDefault();
  console.log(plan)
  
}
function handleChange(e){
  setplan({...plan ,[e.target.name]:e.target.value} )
}
   useEffect(() => {
     setdata({data:plan,currentDate:Date().toLocaleString(),addedAppointment:{},appointmenztChanges:{},editingAppointment:undefined});
     
 }, []);
    return (
      <div>
        <div>
        </div>
        <Paper>
          <Scheduler
            data={data.plan}
            height={875}
          >
            <ViewState
              currentDate={data.currentDate}
            />
            <EditingState
            />
            <MonthView
            />
            <AllDayPanel />
            <Appointments />
            <AppointmentTooltip
            />
          </Scheduler>
          <div className="card-body cennter">
        <form className="center"onSubmit={(e)=>handleSubmit(e)} onChange={(e)=> handleChange(e)}>
        <input type="text" className="form-control styled-select"  name="title"  placeholder="Enter Title Plan"/>
        <div className="form-group form-check">
                    <div className="mt-10">
                        <label className="mr-20">Date From : </label>
                      <input 
                       
                        id="party" 
                        type="datetime-local" 
                        name="startDate" 
                        dateFormat="dd-MM-yyyy hh:mm:ss a"
                      
                        >
                      </input>
                    </div>
                    <div className="mt-10 justify-content-center">
                        <label className="mr-30">Date To : </label>
                        <input  
                        id="party" 
                        type="datetime-local" 
                        name="endDate" 
                        dateFormat="dd-MM-yyyy hh:mm:ss a"
                        >
                      </input>
                    </div>
            </div>
            <button type="submit" className="btn btn-primary text-center text-dark">Submit</button>
      </form>
    </div>
        </Paper>
       
      </div>
    );
  }
