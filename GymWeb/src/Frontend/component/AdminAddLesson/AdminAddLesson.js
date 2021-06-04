/* eslint-disable no-unreachable */
import React from "react"
import TaskList from "./AdminAddSession"
import axios from 'axios';
import { NotificationContainer, NotificationManager } from 'react-notifications';
import ExerciseService from '../../../Backend/Service/ExerciseService'
import {FcAddImage} from "react-icons/fc";
import {toast} from 'react-toastify';
import {IoIosAddCircle} from "react-icons/io";
import './AdminAddLesson.css'
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
              toast.configure();
              toast.success('Tạo bài tập thành công' ,{position:toast.POSITION.BOTTOM_LEFT});
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
                <form onSubmit={this.handleSubmit} onChange={this.handleChange} >
                    <div className="row" style={{ marginTop: 10 }}>
                        <div className="col-sm-1"></div>
                        <div className="col-sm-10">
                            <div className="">
                                <div className="card-header text-center">Add Your Exercise</div>
                                <div className="card-body">
                                    <div className="row justify-content-center">
                                    <form className="col-md-12 form-add form-group  ">
                                        {/* input title */}
                                        <div className="form-group  form-check ">
                                        <label for="exampleInputEmail1">Exercise Name</label>
                                        <input type="text" className="form-control styled-select" required name="excName" id="excName" placeholder="Enter Lesson Title"/>
                                        </div>
                                        <div className="form-group form-check">
                                        <label for="exampleInputEmail1">Title</label>
                                        <input type="text" className="form-control styled-select " required name="title" id="title" placeholder="Enter Lesson Title"/>
                                        </div>
                                        {/* input desc */}
                                        <div className="form-group  form-check">
                                        <label for="exampleInputEmail1">Compound </label>
                                        <textarea className="form-control" aria-label="With textarea" required name="compound" id="compound" placeholder="Enter Lesson Description"></textarea>
                                        </div>
                                        <div className="form-group  form-check">
                                        <label for="exampleInputEmail1">Level </label>
                                        <input className="form-control" type="number" required name="level" id="level" placeholder="Enter Lesson Level" min="1" max="3"></input>
                                        </div>
                                        <div className="form-group  form-check">
                                        <label for="exampleInputEmail1">Calories </label>
                                        <input className="form-control " type="number" required name="calories" id="calories" placeholder="Enter Lesson Calories" ></input>
                                        </div>
                                        
                                        {/* choose image from device */}
                                        <div className="con-img mt-2 form-group  form-check ">
                                        <label  >Lesson Image</label>
                                          <div className="img-holder ">
                                    
                                            <img src={lessonImage} id="img" className="img added-img  "></img>
                                            {/* <input class="form-control form-control-lg" id="formFileLg" type="file" />     */}
                                          </div>
                                          <input type="file" name="imgUrl" class="form-control-file" id="imgUrl"  onChange={this.imgHandler}/>
                                         <label for='imgUrl' class="mb-2">
                                         <FcAddImage size={36}/>
                                         </label>
                                       
                                        </div>
                                        </form>
                                    </div>
                                    <table className="">
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
                                                <button onClick={this.addNewRow} type="button" className="btn btn-primary text-center text-dark"> Add Session <IoIosAddCircle size={20}/></button>
                                            </td></tr>
                                        </tfoot>
                                    </table>
                                </div>
                                <div className="card-footer text-center"> 
                                    <button type="submit" className="btn btn-primary text-center text-dark">Submit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default AdminAddLesson
