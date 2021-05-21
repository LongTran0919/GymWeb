import React from "react"
import './BMIChart'
class BMIForm extends React.Component {
    state = {
        BMI: [{ hight: "", weight: "",Bmi:""}],
       //  hight: "",
       //  weight:"",
       //  Bmi:""
       
   }
   
   handlerHight=(e)=>{
       this.setState({
           hight: e.target.value
       })
   }
   handlerWeight=(e)=>{
       this.setState({
           weight: e.target.value
       })
   }
   handleSubmit = (e) => {
           e.preventDefault();
           this.setState({Bmi : parseInt(this.state.weight)/((parseInt(this.state.hight))*2)})
           e.preventDefault();
           let data = {formdata:this.state};
           console.log(data.formdata)
   
   }
  
    render() {
        const { wight, weight} = this.state
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
                                        <label for="exampleInputEmail1">Hight</label>
                                        <input type="number" className="form-control styled-select" required name="hight" id="hight" placeholder="Enter your hight(m)" onChange={this.handlerHight}/>
                                        </div>
                                        <div className="form-group form-check">
                                        <label for="exampleInputEmail1">Weight</label>
                                        <input type="number" className="form-control styled-select " required name="weight" id="weight" placeholder="Enter your weight(kg)" onChange={this.handlerWeight}/>
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