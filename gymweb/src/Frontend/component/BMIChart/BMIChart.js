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

function BMIChart() {
    const data={
        labels:['Weel 1','Weel 2','Week 3','Week 4','Week 5','Week 6'],
        datasets:[
            {
                label:'BMI',
                data:[3,5,8,4,5,9]
            }
        ]

    }
    const {isAuthenticated,user,setisAuthenticated,setUser} = useContext(AuthContext);
    const logout= e=>{
        e.preventDefault();
        Authservice.logout().then(
            data=>{
              const {isAuthenticated,user}=data;
                console.log("logout "+isAuthenticated)
                setUser(user);
                setisAuthenticated(isAuthenticated);
            }
      
          ) 
    }
    console.log(user)
    const unAuthenticatednav=()=>{
        return(<></>)
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
        !isAuthenticated ?unAuthenticatednav():Authenticatednav()
       
    );
}

export default BMIChart
