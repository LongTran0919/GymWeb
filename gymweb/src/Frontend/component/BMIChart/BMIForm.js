import React, { useState ,useContext} from "react"
import './BMIChart'
import UserService from '../../../Backend/Service/UserService'
import notfound from '../404page/404'
import {AuthContext} from '../../../Backend/Context/AuthContext'
export default function   BMIForm () {
  
    const {isAuthenticated,user,setisAuthenticated,setUser,info,setinfo} = useContext(AuthContext); 
    const [height,setheight]= useState()
    const [weight,setweight]= useState()

 

 
    const  handlerHight=(e)=>{
        setheight(  e.target.value)
    }

    const handlerWeight=(e)=>{
       setweight( e.target.value)
    }
    const handleSubmit = (e) => {
            e.preventDefault();
       
         
               var    Bmi = (parseInt(weight)/((parseFloat(height)*2))).toFixed(2)

            var curTimenew = new Date().toLocaleDateString()
            
         
             let data = {
                Bmi:Bmi,
                curTime:curTimenew,
                weight:  weight,
                height:  height,
             };
  
            console.log(data)
            
            UserService.Bmi(data).then(
             data=>{
                 console.log(data)
                 UserService.info().then(data=>{
                     setinfo(data.Userinfo)
                })
             }
       
           )
    }
        return (
            <div className="content">
                
                <form onSubmit={handleSubmit} >
                    <div className="row" style={{ marginTop: 10 }}>
                        <div className="col-sm-1"></div>
                        <div className="col-sm-10">
                            <div className="card">
                                <div className="card-header text-center">Add BMI Chart</div>
                                <div className="card-body">
                                    <div className="row justify-content-center">
                                    <form className="col-md-12 form-add form-group  ">
                                        {/* input title */}
                                        <div className="form-group  form-check ">
                                        <label for="exampleInputEmail1">Height</label>
                                        <input min="0" type="number" className="form-control styled-select" required name="hight" id="hight" placeholder="Enter your height(m)" onChange={handlerHight}/>
                                        </div>
                                        <div className="form-group form-check">
                                        <label for="exampleInputEmail1">Weight</label>
                                        <input min="0" type="number" className="form-control styled-select " required name="weight" id="weight" placeholder="Enter your weight(kg)" onChange={handlerWeight}/>
                                        </div>
                                       
                                        </form>
                                    </div>
                                </div>
                                <div className="card-footer text-center"> 
                                    <button type="submit" className="btn-sub">Submit</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-1"></div>
                    </div>
                </form>
                
               
            </div>
            
        )
        
}
 