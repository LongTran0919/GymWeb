import React,{useContext,useState,useEffect} from 'react';
import { Redirect, useParams } from 'react-router-dom';
import {DataContext} from '../product/data/DataProvider';
import ExerciseService from '../../../Backend/Service/ExerciseService'
import { AuthContext } from '../../../Backend/Context/AuthContext';
import img from '../../IMG/Gym.jpg'
import '../product/Card.css'
import notfound from '../404page/404'
import '../AdminAddLesson/AdminAddLesson.css'
import {toast} from 'react-toastify';
import { NotificationContainer, NotificationManager } from 'react-notifications';
import {Link} from 'react-router-dom';
import { useHistory } from "react-router-dom";
import {FcAddImage} from "react-icons/fc";
import {IoIosAddCircle} from "react-icons/io";

const axios = require('axios');



export default function AdminUpdate(){
    
    const [state,setState]=useState([
        {
            TaskList: [{ TitleSession: "", DesSession: ""}],
            excName: "",
            title:"",
            compound: "",
            calories:"",
            imgUrl:""
        }
    ]);
    const{id} = useParams();
    const history = useHistory();
    // const[products, setProducts] = useContext(DataContext);
 
    const [flag,setflag]=useState('');
    const [exercise,setexercise]= useState('');
    const [taskList,settaskList]=useState([])
    const [taskform,settaskform]=useState('')
    const {isAuthenticated,user,setisAuthenticated,setUser,info,setinfo} = useContext(AuthContext); 
    useEffect(() => {
        if(!flag) ExerciseService.GetAll()
          .then(function(data){
              setflag(true)
                  const details= Object.values(data).filter((product, index)=>{
                    return product._id == id
                })
                setexercise(details[0])
                settaskList(details[0].taskList)
        });
        
    })  
    function imgHandler(e){
        const reader = new FileReader();
        reader.onload =() =>{
          if(reader.readyState === 2){
            this.setState({lessonImage: reader.result})
          }
        }
        reader.readAsDataURL(e.target.files[0])
      }
     
    const handleAddEx=()=>{
        console.log(taskList)
      settaskList([...taskList, {TitleSession: "", DesSession: ""}])
    }
    const handleDeleteEx=(index)=>{
        const value=[...taskList];
        value.splice(index, 1);
        settaskList(value)
    }

    useEffect(() => {
        setexercise({...exercise,"taskList":taskList} )
        console.log(taskList)
  
            settaskform(taskList.map((task,i) =>(
              
            <tr key={i} >
                 <div className="container container-ses">
                 <div className="row justify-content-center ">
                   <form className="col-md-12 form-add">
             {/* input title */}
                     <div className="form-group">
                         <div className="justify">
                         <label htmlFor="exampleInputEmail1">Title </label>
                         <button className="btn_delete" onClick={(e) =>{e.preventDefault(); handleDeleteEx(i)}}>X</button>
                         </div>
                         <input  onChange={(e) => handleChange(e)} type="text" value={task.TitleSession} className="form-control" name="TitleSession" data-id={i}    />
                     </div>
             {/* input desc */}
                     <div className="form-group ">
                         <label htmlFor="exampleInputEmail1">Description </label>
                         <textarea  onChange={(e) => handleChange(e)} className="form-control" value={task.DesSession}  name="DesSession"  data-id={i}  placeholder="Enter Session Description"/>
                     </div>
                 </form>
               </div>
             </div>
             </tr>
         
            )))
        
     }, [taskList]);
    
    function handleChange (e) {

        //    if (["TitleSession", "DesSession"].includes(e.target.name)) {
        //        let taskList = [...state.TaskList]
        //        taskList[e.target.dataset.id][e.target.name] = e.target.value;
        //    } else {
        //        setState({ [e.target.name]: e.target.value })
        //    }
        if (["TitleSession", "DesSession"].includes(e.target.name)){
          const values=[...taskList];
        //   taskList[e.target.dataset.id][e.target.name] = e.target.value;
          values[e.target.dataset.id][e.target.name] = e.target.value;

          settaskList(values)
        }
           else{
            const values={...exercise,[e.target.name]:e.target.value};
               console.log(values)
               console.log(e.target.name)
               setexercise({...exercise ,[e.target.name]:e.target.value} )
               
               ;}
          
     }
    // function handleClick() {
    //     return  window.location.reload();
    //   }
      function handleSubmit (e) {
        e.preventDefault();
       
         console.log(exercise)
         ExerciseService.Update(exercise).then(
             data=>{
                 console.log(data)
             }
           ).catch((error)=>{
               console.log(error)
           })
        
        }
        function handleRemove(id) {
            ExerciseService.DeleteId(id).then(
                data=>{
                    console.log(data)
                    if(data.status===200){
                        console.log(id);
                        toast.configure();
                        toast.success('Xóa bài tập thành công' ,{position:toast.POSITION.BOTTOM_LEFT});
                        setTimeout(() => {
                            window.location='/admin/management';
                        }, 2000);
                        
                        }
                        else{
                          toast.configure();
                          toast.success('Xóa bài tập thất bại' ,{position:toast.POSITION.BOTTOM_LEFT});
                        }
                }
                
              )
              
            }
    const isauth=()=>{
        return ( <div className="content">
        <NotificationContainer/>
        <form onSubmit={(e) => handleSubmit(e)} onChange={(e) => handleChange(e)}>
            <div className="row" style={{ marginTop: 10 }}>
                <div className="col-sm-1"></div>
                <div className="col-sm-10">
                    <div className="card">
                        <div className="card-header text-center">Add Your Exercise</div>
                        <div className="card-body">
                            <div className="row justify-content-center">
                            <form className="col-md-12 form-add form-group  ">
                                <div className="form-group  form-check ">
                                <label htmlFor="exampleInputEmail1">Exercise Name</label>
                                {/* <input type="text" className="form-control styled-select" required name="excName" id="excName" value="john"/> */}
                                <textarea type="text" className="form-control" required name="excName" id="exName" value={exercise.excName} placeholder="Enter Session Title"></textarea>
                                <div>{exercise.excName}</div>
                                </div>
                                <div className="form-group form-check">
                                <label htmlFor="exampleInputEmail1">Title</label>
                                <textarea type="text" className="form-control"  value={exercise.title} required name="title" id="title" ></textarea>
                                </div>
                 
                                <div className="form-group  form-check">
                                <label htmlFor="exampleInputEmail1">Compound </label>
                                <textarea className="form-control"  required value={exercise.compound} name="compound" id="compound" ></textarea>
                                </div>
                                <div className="form-group  form-check">
                                <label htmlFor="exampleInputEmail1">Level </label>
                                <input className="form-control" type="number" value={exercise.level} required name="level" id="level" ></input>
                                </div>
                                <div className="form-group  form-check">
                                <label htmlFor="exampleInputEmail1">Calories </label>
                                <input className="form-control " type="number" value={exercise.calories} required name="calories" id="calories" ></input>
                                </div>
                                
                    
                                <div className="con-img mt-2 form-group  form-check ">
                                <label  >Lesson Image</label>
                                  <div className="img-holder ">
                            
                                    <img  src={exercise.imgUrl} id="img" className="img added-img  "></img>
                               
                                  </div>
                                  <input type="file" name="imgUrl" class="form-control-file" id="imgUrl"  onChange={() => imgHandler()}/>
                                 <label htmlFor='imgUrl' class="mb-2">
                                 <FcAddImage size={36}/>
                                 </label>
                               
                                </div>
                                
                                </form>
                            </div>
                            <table className="w100">
                                        <thead>
                                            <tr>
                                                <th className="required" >Session</th>
                                            </tr>
                                        </thead>
                                       
                                      <tbody className="w100">
                                       
                                               {taskform}
                                                
                                     </tbody>                        
                                          
                                     
                                    <tfoot>
                                            <tr><td colSpan="4">
                                            <button onClick={() => handleAddEx()} type="button" className="btn btn-primary text-center text-dark"> Add Session <IoIosAddCircle size={20}/></button>
                                            </td></tr>
                                        </tfoot>
                                    </table>
                                   
                        </div>
                        <div className="card-footer text-center"> 
                            <button type="submit" className="btn btn-primary text-center text-dark">Submit</button>
                            <button type="submit" className="btn btn-warning text-center text-dark" onClick={() => handleRemove(exercise._id)}>Delete</button>
                        </div>
                    </div>
                </div>
                <div className="col-sm-1"></div>
            </div>
        </form>
    </div>
        )


    }
    const noauth=()=>{
        return (  notfound() )

    }
    return(
        
        isAuthenticated ?   isauth() :noauth()
        )
        

    
}
