import React from "react"
import TaskList from "./AdminAddSession"
import axios from 'axios';
import { NotificationContainer, NotificationManager } from 'react-notifications';
class AdminAddLesson extends React.Component {
    state = {
        taskList: [{ index: Math.random(), projectName: "", task: "", taskNotes: "", taskStatus: "" }],
        date: "",
        description: "",
    }
  
    handleChange = (e) => {
        if (["projectName", "task", "taskNotes", "taskStatus"].includes(e.target.name)) {
            let taskList = [...this.state.taskList]
            taskList[e.target.dataset.id][e.target.name] = e.target.value;
        } else {
            this.setState({ [e.target.name]: e.target.value })
        }
    }
    addNewRow = () => {
        this.setState((prevState) => ({
            taskList: [...prevState.taskList, { index: Math.random(), projectName: "", task: "", taskNotes: "", taskStatus: "" }],
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
        alert('Submit');
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
      const   {lessonImage} = this.state
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
                                        <label for="exampleInputEmail1">Title</label>
                                        <input type="text" className="form-control"  placeholder="Enter Lesson Title"/>
                                        </div>
                                        
                                        {/* input desc */}
                                        <div className="form-group">
                                        <label for="exampleInputEmail1">Description </label>
                                        <textarea className="form-control" aria-label="With textarea" placeholder="Enter Lesson Description"></textarea>
                                        </div>
                                        
                                        {/* choose image from device */}
                                        <div className="con-img">
                                          <div className="img-holder">
                                            <img src={lessonImage} id="img" className="img added-img"></img>
                                            {/* <input class="form-control form-control-lg" id="formFileLg" type="file" />     */}
                                          </div>
                                          <input type="file" name="img-upload" id="input"  onChange={this.imgHandler}/>
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
