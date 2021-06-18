import React,{useContext,useState,useEffect} from 'react';
import { Redirect, useParams } from 'react-router-dom';
import {DataContext} from './data/DataProvider';
import ExerciseService from '../../../Backend/Service/ExerciseService'
import { AuthContext } from '../../../Backend/Context/AuthContext';
import img from '../../IMG/Gym.jpg'
import './Card.css'
import {toast} from 'react-toastify';
import {Link} from 'react-router-dom';
import { useHistory } from "react-router-dom";
const axios = require('axios');


export default function Details(){
    const{id} = useParams();
    const history = useHistory();
    // const[products, setProducts] = useContext(DataContext);
    const [data,setdata]=useState("");
    const [flag,setflag]=useState('');
    const [exercise,setexercise]= useState( {comment:[]});
    const [same,setsame]=useState('')
    const [cmt,setcmt]=useState()
    const [Comment,setComment]=useState()
    const [taskList,settaskList]=useState('')
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
                settaskList(details[0].taskList.map((task)=>{
                    return (
                    <div>
                        <span className=" bg-light">{task.TitleSession}</span> : <div className="divStep">{task.DesSession}</div>  <br></br>
                    </div>)
                }))
                setComment(details[0].comment.map((cmt)=>{
                    return (
                    <div className="cmtBox">
                        <div className="cmt">
                            <div className="UserCmt">{cmt.user}:</div>
                            <div className="contetCmt">{cmt.content}</div> 
                        </div> 
                    </div>)
                }))

                // console.log(details[0].taskList)   
                // console.log(details[0])            
        });
        
   
      
    })
    useEffect(()=>{
        console.log(exercise)
        setComment(exercise.comment.map((cmt)=>{
            return (
            <div className="cmtBox">
                <div className="cmt">
                    <div className="UserCmt">{cmt.user}:</div>
                    <div className="contetCmt">{cmt.content}</div> 
                </div> 
            </div>)
        }))
    },[exercise])

    function handleClick() {
        return   window.location=`/product/${same._id}`;
      }

      function comment( ) {
        var date = new Date().toLocaleDateString()  
        if(isAuthenticated){ 
            console.log(Comment)
            setexercise({...exercise,comment:[...exercise.comment,({
             "content":cmt,"date":date,'user':user.username
            })]})

           
      
            ExerciseService.Comment({

                id:id,
                comment:{"content":cmt,"date":date}
            })
           
        
        }
       else{
        toast.configure();
        toast.error('Bạn phải đăng nhập để comment' ,{position:toast.POSITION.BOTTOM_LEFT});
       }
       
        
      }
    const isauth=()=>{
        return ( 
        
        
        <div className="Container-detail">
        <div className=" ml-2 row">
            <div className="col-md-8">
             
                <div className="row">
                    <h2 className="text-dark titltTask mb-20">{exercise.excName}</h2>
                </div>  
                <div className="row">
                    <div className="float-right">{exercise.author} </div>
                    <img src={exercise.lessonImage?exercise.lessonImage:'https://images8.content-hci.com/commimg/myhotcourses/blog/post/myhc_94121.jpg'} alt="soi..." className="img_title"/>
                </div>  
                
            
                <div>
                {
                        <div className="card-fluid">
                            <div className="card_body">
                                <h2 className="titltTask mt-20">TaskList</h2>
                                    {
                                        taskList
                                    }
                            </div>
                        </div>
                }
                </div>
            </div>
        
            <div className="col-md-4 mt-10" >
            <Link to={`/product/${same._id}`} style={{textDecoration: 'none'}}>
                    <h4 className="text-dark">Anotherc</h4>                     
                    <div className="card-fluid w-100 p-3 container">
                        <div className="row">
                            <div className="card_img col-md-6">
                                <img src={img} alt="soi..." className="img_sugg"/>
                            </div>
                            <div className="card_block col-md-6">
                                    <p className="card-title text-dark text-truncate"> {same.excName}</p>
                                    <p className="card-text text-muted mx-auto text-truncate"> {same.title}</p>
                                    <button className='btn-sub-detail' type='submit' onClick={handleClick}>Detail</button>
                            </div>
                        </div>
                    </div>           
                 </Link>
            </div>
    </div>

            <div className="row">
            
                <div className="col-md-12 boder">
                    <form className="form-cmt">
                        <div class='row'>
                        <h3 className="badge badge-dark tiltleCmt">Comment</h3>
                        <input
                            className='form-control '
                            type='text'
                            name='comment'
                            placeholder='Enter your Comment' 
                             onChange={(e)=>setcmt( e.target.value)}  />
                           
                        </div>      
                        <button className='btn-sub-comment mt-10' onClick={(e)=>{ e.preventDefault();comment()}}  >Comment</button>
                    </form>
                    <div class='ml-2 mt-10'>
                      {
                          Comment
                      }
                      </div>  
                </div>
                </div>
            </div> 
        )


    }
    const noauth=()=>{
        return (  <div className="Container-detail">
        <div className=" ml-2 row">
            <div className="col-md-8">
             
                <div className="row">
                    <h2 className="text-dark titltTask mb-20">{exercise.excName}</h2>
                </div>  
                <div className="row">
                    <div className="float-right">{exercise.author} </div>
                    <img src={img} alt="soi..." className="img_title"/>
                </div>  
                
            
                <div>
                {
                        <div className="card-fluid">
                            <div className="card_body">
                                <h2 className="titltTask mt-20">TaskList</h2>
                                    {
                                        taskList
                                    }
                            </div>
                        </div>
                }
                </div>
            </div>
        
            <div className="col-md-4 mt-10" >
            <Link to={`/product/${same._id}`} style={{textDecoration: 'none'}}>
                    <h4 className="text-dark">Anotherc</h4>                     
                    <div className="card-fluid w-100 p-3 container">
                        <div className="row">
                            <div className="card_img col-md-6">
                                <img src={img} alt="soi..." className="img_sugg"/>
                            </div>
                            <div className="card_block col-md-6">
                                    <p className="card-title text-dark text-truncate"> {same.excName}</p>
                                    <p className="card-text text-muted mx-auto text-truncate"> {same.title}</p>
                                    <button className='btn-sub-detail' type='submit' onClick={handleClick}>Detail</button>
                            </div>
                        </div>
                    </div>           
                 </Link>
            </div>
    </div>

            <div className="row">
            
                <div className="col-md-12 boder">
                    <form className="form-cmt">
                        <div class='row'>
                        <h3 className="badge badge-dark tiltleCmt">Comment</h3>
                        <input
                            className='form-control '
                            type='text'
                            name='comment'
                            placeholder='Enter your Comment' 
                             onChange={(e)=>setcmt( e.target.value)}  />
                           
                        </div>      
                        <button className='btn-sub-comment mt-10' onClick={(e)=>{ e.preventDefault();comment()}}  >Comment</button>
                    </form>
                    <div class='ml-2 mt-10'>
                      {
                          Comment
                      }
                      </div>  
                </div>
                </div>
            </div> 

           
        )

    }
    return(  isAuthenticated ?   isauth() :noauth())
        

    
}
