import React from "react"
import TaskList from "./AdminAddSession"
import axios from 'axios';
import { NotificationContainer, NotificationManager } from 'react-notifications';
import ExerciseService from '../../../Backend/Service/ExerciseService'
class AdminAddLesson extends React.Component {
    state = {
      
        taskList: [{ TitleSession: "", DesSession: ""}],
        excName: "",
        title:"",
        compound: "",
        calories:"",
        imgUrl:""
    }
  
    handleChange = (e) => {
        if (["TitleSession", "DesSession"].includes(e.target.name)) {
            let taskList = [...this.state.taskList]
            taskList[e.target.dataset.id][e.target.name] = e.target.value;
        } else {
            this.setState({ [e.target.name]: e.target.value })
        }
     
    }
    addNewRow = () => {
        this.setState((prevState) => ({
            taskList: [...prevState.taskList, {   TitleSession: "", DesSession: ""}],
        }));
    }


    deteteRow = (index) => {
        this.setState({
            taskList: this.state.taskList.filter((s, sindex) => index !== sindex),
        });
        // const taskList1 = [...this.state.taskList];
        // taskList1.splice(index, 1);
        // this.setState({ taskList: taskList1 });
    }
    handleSubmit = (e) => {
            e.preventDefault();
            let data = {formdata:this.state};
            console.log(data.formdata)
            ExerciseService.AddExercise(data.formdata).then(
                data=>{
                    console.log(data)
                }
          
              )
    }
    imgHandler = (e)=>{
      const reader = new FileReader();
      reader.onload =() =>{
        if(reader.readyState === 2){
          this.setState({lessonImage: reader.result})
        }
      }
      reader.readAsDataURL(e.target.files[0])
    }
    clickOnDelete(record) {
        this.setState({
            taskList: this.state.taskList.filter(r => r !== record)
        });
    }
    render() {
      const   {lessonImage,LessionDes,LessionTitle} = this.state
        let { taskList } = this.state//let { notes, date, description, taskList } = this.state
        return (
            <div className="content">
                <NotificationContainer/>
                <form onSubmit={this.handleSubmit} onChange={this.handleChange} >
                    <div className="row" style={{ marginTop: 10 }}>
                        <div className="col-sm-1"></div>
                        <div className="col-sm-10">
                            <div className="card">
                                <div className="card-header text-center">Add Your Daily Task</div>
                                <div className="card-body">
                                    <div className="row">
                                    <form className="col-md-12 form-add">
                                        {/* input title */}
                                        <div className="form-group">
                                        <label for="exampleInputEmail1">Ex Name</label>
                                        <input type="text" className="form-control" required name="excName" id="excName" placeholder="Enter Lesson Title"/>
                                        </div>
                                        <div className="form-group">
                                        <label for="exampleInputEmail1">Title</label>
                                        <input type="text" className="form-control" required name="title" id="title" placeholder="Enter Lesson Title"/>
                                        </div>
                                        {/* input desc */}
                                        <div className="form-group">
                                        <label for="exampleInputEmail1">Compound </label>
                                        <textarea className="form-control" aria-label="With textarea" required name="compound" id="compound" placeholder="Enter Lesson Description"></textarea>
                                        </div>
                                        <div className="form-group">
                                        <label for="exampleInputEmail1">Level </label>
                                        <input className="form-control" type="number" required name="level" id="level" placeholder="Enter Lesson Level" min="1" max="3"></input>
                                        </div>
                                        <div className="form-group">
                                        <label for="exampleInputEmail1">Calories </label>
                                        <input className="form-control" type="number" required name="calories" id="calories" placeholder="Enter Lesson Calories" ></input>
                                        </div>
                                        
                                        {/* choose image from device */}
                                        <div className="con-img">
                                          <div className="img-holder">
                                            <img src={lessonImage} id="img" className="img added-img"></img>
                                            {/* <input class="form-control form-control-lg" id="formFileLg" type="file" />     */}
                                          </div>
                                          <input type="file" name="img-upload" id="imgUrl"  onChange={this.imgHandler}/>
                                        </div>
                                        </form>
                                    </div>
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th className="required" >Session</th>
                                                
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <TaskList add={this.addNewRow} delete={this.clickOnDelete.bind(this)} taskList={taskList} />
                                        </tbody>
                                        <tfoot>
                                            <tr><td colSpan="4">
                                                <button onClick={this.addNewRow} type="button" className="btn btn-primary text-center"><i className="fa fa-plus-circle" aria-hidden="true">Add</i></button>
                                            </td></tr>
                                        </tfoot>
                                    </table>
                                </div>
                                <div className="card-footer text-center"> <button type="submit" className="btn btn-primary text-center">Submit</button></div>
                            </div>
                        </div>
                        <div className="col-sm-1"></div>
                    </div>
                </form>
            </div>
        )
    }
}

export default AdminAddLesson
