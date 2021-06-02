import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import {useContext,useState,useEffect} from 'react';
import DatePicker from 'react-datepicker';
import { ViewState, EditingState } from '@devexpress/dx-react-scheduler';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
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

    const [state,setstate]=useState([
      {
        data: appointments,
        currentDate: Date().toLocaleString(),
      }
    ])
      
  const [data,setdata]=useState("");
  const [startDate, setStartDate] = useState(new Date());

  // function changeAddedAppointment(addedAppointment) {
  //   setdata({ addedAppointment });
  // }

  // function changeAppointmentChanges(appointmentChanges) {
  //   setdata({ appointmentChanges });
  // }

  // function changeEditingAppointment(editingAppointment) {
  //   setdata({ editingAppointment });
  // }

  // function commitChanges({ added, changed, deleted }) {
  //   setdata((state) => {
  //     let { data } = state;
  //     if (added) {
  //       const startingAddedId = data.length > 0 ? data[data.length - 1].id + 1 : 0;
  //       data = [...data, { id: startingAddedId, ...added }];
  //     }
  //     if (changed) {
  //       data = data.map(appointment => (
  //         changed[appointment.id] ? { ...appointment, ...changed[appointment.id] } : appointment));
  //     }
  //     if (deleted !== undefined) {
  //       data = data.filter(appointment => appointment.id !== deleted);
  //     }
  //     return { data };
  //   });
  // }
   useEffect(() => {
     setdata({data:appointments,currentDate:Date().toLocaleString(),addedAppointment:{},appointmenztChanges:{},editingAppointment:undefined});
     
 }, []);

  
    return (
      <div>
        <div>
        <a className="nav-link" href="/addplan">Add new</a>
        </div>
        <Paper>
          <Scheduler
            data={data.data}
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
        </Paper>
      </div>
    );
  }
