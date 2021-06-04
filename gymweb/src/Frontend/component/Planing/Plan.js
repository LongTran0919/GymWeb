import * as React from 'react';
import "./Plan.css"
import Paper from '@material-ui/core/Paper';
import {useContext,useState,useEffect} from 'react';
import DatePicker from 'react-datepicker';
import { ViewState, EditingState,IntegratedEditing  } from '@devexpress/dx-react-scheduler';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import {IoIosAddCircle} from 'react-icons/io';
import Userservice from '../../../Backend/Service/UserService'
import Form from'./AddPlan'
import "react-datepicker/dist/react-datepicker.css";
import {
  Scheduler,
  Appointments,
  AppointmentForm,
  AppointmentTooltip,
  WeekView,
  DayView,
  MonthView,
  TodayButton,
  EditRecurrenceMenu,
  DateNavigator,
  ViewSwitcher,
  Toolbar,
  AllDayPanel,
  ConfirmationDialog,
} from '@devexpress/dx-react-scheduler-material-ui';

import { appointments } from './data/appointments';



export default class Demo extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      data:   [],
      currentDate: Date().toLocaleString(), };
     
    Userservice.info().then(d=> {
      let {data}=this.state
      console.log(Array.from(d.Userinfo.Plan))
      data= Array.from(d.Userinfo.Plan)
      this.setState((state)=>{
        return { data };
      })
    } )
    this.currentDateChange = (currentDate) => { this.setState({ currentDate }); };
    this.commitChanges = this.commitChanges.bind(this);
  }

  commitChanges({ added, changed, deleted }) {
    this.setState((state) => {
      let { data } = state;
 
      if (added) {
        const startingAddedId = data.length > 0 ? data[data.length - 1].id + 1 : 0;
        data = [...data, { id: startingAddedId, ...added }];
      }
      if (changed) {
        data = data.map(appointment => (
          changed[appointment.id] ? { ...appointment, ...changed[appointment.id] } : appointment));
      }
      if (deleted !== undefined) {
        data = data.filter(appointment => appointment.id !== deleted);
      }
      console.log(data)
      Userservice.Plan(data)
      return { data };

    });
  }

  render() {
    const { currentDate, data } = this.state;

    return (
      <Paper>
        <Scheduler
          data={data}
          height={660} 
        >
             <Toolbar />
             
          <ViewState
            onCurrentDateChange={this.currentDateChange}
            currentDate={currentDate}
            defaultCurrentViewName="Week"
          />
         {/* <MonthView    formatDate={String} startDayHour={6} endDayHour={23}/> */}
           <DayView
            startDayHour={6}
            endDayHour={23}
          />
          <WeekView
            startDayHour={6}
            endDayHour={23}
          />
          <DateNavigator />
              <TodayButton />
          <ViewSwitcher />
      
          <EditingState onCommitChanges={this.commitChanges}/>
          <IntegratedEditing />
          {/* <DragDropProvider allowDrag={true} allowResize={true}  /> */}
          <ConfirmationDialog />
          <Appointments />
          <AppointmentTooltip
            showOpenButton
            showDeleteButton
          />
          <AppointmentForm />
        </Scheduler>
      </Paper>
    );
  }
}

// export default function Plan(){
//   const [plan,setplan]=useState([])
//     const [state,setstate]=useState([{ data: plan,   currentDate: Date().toLocaleString(), }])
      
//   const [data,setdata]=useState([]);
//   const [startDate, setStartDate] = useState(new Date());
//   const appointments = [
//     { title: 'Mail New Leads for Follow Up', startDate: '2021-06-04T13:49','endDate':'2021-06-04T14:49' },
//     { title: 'Product Meeting', startDate: '2019-06-23T10:30', endDate: '2019-06-23T11:30' },
//     { title: 'Send Territory Sales Breakdown', startDate: '2019-06-23T12:35' },
//   ]; 


// function handleSubmit(e){

//   e.preventDefault();
 
//   setdata({...data,plan:[...data.plan,plan]})
//   console.log(plan)
  
// }
// function commitChanges(e,{ added, changed, deleted }){
//   setplan({...plan ,[e.target.name]:e.target.value} )

//   if (added) {
  
//      setdata({...data,plan :[...data.plan,plan] });
//   }
//   if (changed) {
//     data = data.map(appointment => (
//       changed[appointment.id] ? { ...appointment, ...changed[appointment.id] } : appointment));
//   }
//   if (deleted !== undefined) {
//     data = data.filter(appointment => appointment.id !== deleted);
//   }
//   return { data };
 
// }
// function handleChange(e){
//   setplan({...plan ,[e.target.name]:e.target.value} )
// }
//    useEffect(() => {
//      setdata({plan:[],currentDate:Date().toLocaleString(),addedAppointment:{},appointmenztChanges:{},editingAppointment:undefined});
     
//  }, []);
//     return (
//       <div className='mt-5'>
//         <div>
//         </div>
//         <Paper>
//           <Scheduler
//             data={data.plan}
//             height={875}>
//             <ViewState currentDate={data.currentDate}/>
//             <EditingState
//             onCommitChanges={commitChanges}
//           />
//             <MonthView  /> 
//             {/* startDayHour={6} endDayHour={11} */}
//             <AllDayPanel />
//             <Appointments />
//             <IntegratedEditing />
//             <AppointmentTooltip    showOpenButton
//             showDeleteButton />
//             <AppointmentForm />
           
//           </Scheduler>
//           {/* <div className="card-body cennter">
//         <form className="center"onSubmit={(e)=>handleSubmit(e)} onChange={(e)=> handleChange(e)}>
//         <input type="text" className="form-control styled-select"  name="title"  placeholder="Enter Title Plan"/>
//         <div className="form-group form-check">
//                     <div className="mt-10">
//                         <label className="mr-20">Date From : </label>
//                       <input  id="party" type="datetime-local" name="startDate" dateFormat="dd-MM-yyyy hh:mm:ss a" >
//                       </input>
//                     </div>
//                     <div className="mt-10 justify-content-center">
//                         <label className="mr-30">Date To : </label>
//                         <input   id="party" type="datetime-local" name="endDate" dateFormat="dd-MM-yyyy hh:mm:ss a" >
//                       </input>
//                     </div>
//             </div>
//             <button type="submit" className="btn btn-primary text-center text-dark">Submit</button>
//       </form>
//     </div> */}
//         </Paper>
       
//       </div>
//     );
//   }
