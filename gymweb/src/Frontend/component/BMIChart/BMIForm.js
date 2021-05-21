import React from "react"
import './BMIChart'
import UserService from '../../../Backend/Service/UserService'
import notfound from '../404page/404'
import  {useState} from "react"
class BMIForm extends React.Component {
    constructor(props) {
        super(props);
        // Don't call this.setState() here!
        this.state =    {

             height: "0",
             weight:"0",
             Bmi:"0"
           
       }
    

      }

 
      handlerHight=(e)=>{
        this.setState({
            height: e.target.value
        })
     
    }
    handlerWeight=(e)=>{
        this.setState({
            weight: e.target.value
        })
    
    }
    handleSubmit = (e) => {
            e.preventDefault();
            console.log(parseInt(this.state.weight))
            console.log(((parseFloat(this.state.height)*2)))
         
            var    Bmi = (parseInt(this.state.weight)/((parseFloat(this.state.height)*2))).toFixed(2)

            var curTimenew = new Date().toLocaleDateString()
            
         
             let data = {
                Bmi:Bmi,
                curTime:curTimenew,
                weight: this.state.weight,
                height:  this.state.height,
             };
           
            console.log(data)
            UserService.Bmi(data).then(
             data=>{
                 console.log(data)
             }
       
           )
    }
 
  
    render() {
        const { height, weight} = this.state
        return (
            <div className="content">
                
                <form onSubmit={this.handleSubmit} >
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
                                        <input min="0" type="number" className="form-control styled-select" required name="hight" id="hight" placeholder="Enter your height(m)" onChange={this.handlerHight}/>
                                        </div>
                                        <div className="form-group form-check">
                                        <label for="exampleInputEmail1">Weight</label>
                                        <input min="0" type="number" className="form-control styled-select " required name="weight" id="weight" placeholder="Enter your weight(kg)" onChange={this.handlerWeight}/>
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
}
export default BMIForm