/* eslint-disable no-unreachable */
import React,{useContext}from "react"
import {Line} from 'react-chartjs-2'
import axios from 'axios';
import { NotificationContainer, NotificationManager } from 'react-notifications';
import ExerciseService from '../../../Backend/Service/ExerciseService'
import BMiForm from'./BMIForm'
import { AuthContext } from '../../../Backend/Context/AuthContext';
import Authservice from '../../../Backend/Service/AuthService'
import './BMIChart.css'
import notfound from '../404page/404'
function BMIChart() {

    
    const {isAuthenticated,user,setisAuthenticated,setUser,info} = useContext(AuthContext); 
    
    // const logout= e=>{
    //     e.preventDefault();
    //     Authservice.logout().then(data=>{
    //             const {isAuthenticated,user}=data;
    //             console.log("logout "+isAuthenticated)
    //             setUser(user);
    //             setisAuthenticated(isAuthenticated);
                
                
                
    //         }
    //       )
    // }
    // const chbmi = Object.values(info.Bmi).map(function(item) {
    //     return item.Bmi;
    //   })
    //let chbmi = Object.values(info.Bmi).map(res => res.Bmi);
    let chbmi = Object.assign([], info.Bmi).map(({Bmi}) => Bmi);
    let chdate = Object.assign([], info.Bmi).map(({curTime}) => curTime);
    console.log(chbmi,chdate)
    
    
    const unAuthenticatednav=()=>{
        return(<></>)
    }
    const data={
        labels:chdate,
        datasets:[
            {
                label:'BMI',
                data:chbmi
            }
        ]

    }
    const Authenticatednav=()=>{
        return(
            <>
            <BMiForm/>
            <div className="chart">
                <Line data={data}/>
            </div>
            </>
        )
    }

    return (
        !isAuthenticated ?notfound():Authenticatednav()
       
    );
}

export default BMIChart
