import React,{useContext,useState,useEffect} from 'react';
import { Redirect, useParams } from 'react-router-dom';
import {DataContext} from '../product/data/DataProvider';
import ExerciseService from '../../../Backend/Service/ExerciseService'
import { AuthContext } from '../../../Backend/Context/AuthContext';
import img from '../../IMG/Gym.jpg'
import '../product/Card.css'
import '../AdminAddLesson/AdminAddLesson.css'
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
    const [data,setdata]=useState("");
    const [flag,setflag]=useState('');
    const [exercise,setexercise]= useState('');
    const [same,setsame]=useState('')
    const [taskList,settaskList]=useState([{TitleSession: "", DesSession: ""}])
    const {isAuthenticated,user,setisAuthenticated,setUser,info,setinfo} = useContext(AuthContext); 
    useEffect(() => {
        if(!flag) ExerciseService.GetAll()
          .then(function(data){
              setflag(true)
              setdata(data)
                  const details= Object.values(data).filter((product, index)=>{
                    return product._id == id
                })
                setsame(Object.values(data)[Math.floor(Math.random()*Object.values(data).length)] )
                setexercise(details[0])
                settaskList(details[0].taskList)
                console.log(details[0].taskList)        
        });
        
    })
    function handleChange (e) {
        //    if (["TitleSession", "DesSession"].includes(e.target.name)) {
        //        let taskList = [...state.TaskList]
        //        taskList[e.target.dataset.id][e.target.name] = e.target.value;
        //    } else {
        //        setState({ [e.target.name]: e.target.value })
        //    }
        if (["TitleSession", "DesSession"].includes(e.target.name)){
          const values=[...exercise.taskList];
          values[e.target.dataset.id][e.target.name] = e.target.value;
        }
          else{setexercise({[e.target.name]:e.target.value});}
          
     }
    function handleClick() {
        return  window.location.reload();
      }
      function handleSubmit (e) {
        e.preventDefault();
         let data = {formdata:exercise};
         console.log(data.formdata)
        //  ExerciseService.AddExercise(data.formdata).then(
        //      data=>{
        //          console.log(data)
        //      }
        //    )
        
        }
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
            setexercise([...exercise.taskList,{
                  TitleSession: "", DesSession: ""
            }])
        }
        const handleDeleteEx=(index)=>{
            const value=[...exercise.taskList];
            value.splice(index, 1);
            setexercise(value);
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
                                <label for="exampleInputEmail1">Exercise Name</label>
                                {/* <input type="text" className="form-control styled-select" required name="excName" id="excName" value="john"/> */}
                                <textarea type="text" className="form-control" required name="exName" id="exName" value={exercise.excName} placeholder="Enter Session Title"></textarea>
                                <div>{exercise.excName}</div>
                                </div>
                                <div className="form-group form-check">
                                <label for="exampleInputEmail1">Title</label>
                                <textarea type="text" className="form-control"  value={exercise.title} required name="title" id="title" ></textarea>
                                </div>
                 
                                <div className="form-group  form-check">
                                <label for="exampleInputEmail1">Compound </label>
                                <textarea className="form-control"  required value={exercise.compound} name="compound" id="compound" ></textarea>
                                </div>
                                <div className="form-group  form-check">
                                <label for="exampleInputEmail1">Level </label>
                                <input className="form-control" type="number" value={exercise.level} required name="level" id="level" ></input>
                                </div>
                                <div className="form-group  form-check">
                                <label for="exampleInputEmail1">Calories </label>
                                <input className="form-control " type="number" value={exercise.calories} required name="calories" id="calories" ></input>
                                </div>
                                
                    
                                <div className="con-img mt-2 form-group  form-check ">
                                <label  >Lesson Image</label>
                                  <div className="img-holder ">
                            
                                    <img  src={exercise.imgUrl} id="img" className="img added-img  "></img>
                               
                                  </div>
                                  <input type="file" name="imgUrl" class="form-control-file" id="imgUrl"  onChange={() => imgHandler()}/>
                                 <label for='imgUrl' class="mb-2">
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
                                            
                               
                                           {taskList.map((task,i) =>(
                                               <tr>
                                                <div className="container container-ses">
                                                <div className="row justify-content-center ">
                                                  <form className="col-md-12 form-add">
                                            {/* input title */}
                                                    <div className="form-group">
                                                        <div className="justify">
                                                        <label for="exampleInputEmail1">Title</label>
                                                        <button className="btn_delete" onClick={() => handleDeleteEx(i)}>X</button>
                                                        </div>
                                                        <input type="text" className="form-control" name="TitleSession" data-id={i}    />
                                                    </div>
                                            {/* input desc */}
                                                    <div className="form-group ">
                                                        <label for="exampleInputEmail1">Description </label>
                                                        <textarea className="form-control"  name="DesSession"  data-id={i}  placeholder="Enter Session Description"/>
                                                    </div>
                                                </form>
                                              </div>
                                            </div>
                                            </tr>
                                           ))}
                                          
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
        return ( <div className="Container">
        <div className=" ml-2 row">
            <div className="col-md-8">
             
                <div className="row">
                    <h2 className="text-dark">{exercise.excName}</h2>
                </div>  
                <div className="row">
                    <div className="float-right">{exercise.author} </div>
                    <img src={img} alt="soi..." className="img_title"/>
                </div>  
                
                {/* session */}
                <div>
                {
                        <div className="card-fluid">
                        
                            <div className="card_body">
                                <h2 className="text-dark">TaskList</h2>
                            </div>
                          
                            
                        </div>
                }
                </div>
            </div>
        
            <div className="col-md-4">
                    <h4 className="text-dark">Các bài tập Khác</h4>                     
                    <div className="card-fluid w-100 p-3 container">
                        <div className="row">
                            <div className="card_img col-md-6">
                                <img src={img} alt="soi..." className="img_sugg"/>
                            </div>
                            <div className="card_block col-md-6">
                                    <p className="card-title text-dark text-truncate"> {same.excName}</p>
                                    <p className="card-text text-muted mx-auto text-truncate"> {same.title}</p>
                                    
                                        <div onClick={handleClick} className="btn btn-success">
                                            <a className="text-dark"  href={`/product/${same._id}`}> Detail </a>
                                        </div>
                                    
                            </div>
                        </div>
                    </div>                      
            </div>
    </div>



    {/* Comment */}    
            {/* Your comment */}
            <div className="row">

                <div className="col-md-8">
                    <form >
                        {/* input textbox */}
                        <div>
                        <h3 className="text-dark">Comment</h3>
                        <input
                            className='form-control'
                            type='text'
                            name='comment'
                            placeholder='Enter your Comment'
                        />
                        </div>

                        <div>
                            <p>Rating by star</p>
                        </div>            
                        <button className='btn-primary' type='submit'>Comment</button>
                    </form>
                </div>
                </div>


                {/* Other comment */}
            <div className="row">

                    <div className="card-fluid w-100 p-3 container">
                        <div className="row">
                                <div className="card_img col-md-1">
                                    <img src={img} sizes="16" className="img_avatar" alt="soi..." />
                                </div>
                                <div className=" col-md-11">
                                    <p className="card-title text-dark text-truncate">username</p>
                                    <p>rating</p>
                                    <p>dayOfComment</p>
                                    <p className="card-text text-muted mx-auto text-truncate">Comment content</p>
                            </div>
                        </div>
                    </div>
            </div> 
            </div> 
        )

    }
    return(
        
        isAuthenticated ?   isauth() :noauth()
        )
        

    
}
