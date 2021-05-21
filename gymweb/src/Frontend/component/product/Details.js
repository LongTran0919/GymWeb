import React,{useContext,useState,useEffect} from 'react';
import { Redirect, useParams } from 'react-router-dom';
import {DataContext} from './data/DataProvider';
import ExerciseService from '../../../Backend/Service/ExerciseService'
import { AuthContext } from '../../../Backend/Context/AuthContext';
import img from '../../IMG/Gym.jpg'
import './Card.css'
import {Link} from 'react-router-dom';
import { useHistory } from "react-router-dom";
const axios = require('axios');


export default function Details(){
    const{id} = useParams();
    const history = useHistory();

    // const[products, setProducts] = useContext(DataContext);
    const [data,setdata]=useState("");
    const [flag,setflag]=useState('');
    const [exercise,setexercise]= useState('');
    const [same,setsame]=useState('')
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
                console.log(details[0])
           
           
        });
        
   
      
    })
    function handleClick() {
        let link=`/product/${same._id}`
      return <Redirect to={link} />;
      }
    
    const isauth=()=>{
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
                                <h2 className="text-dark">Content</h2>
                            </div>
                         
                            <img src={img} alt="soi..." className="img_content"/>
                        </div>
                }
                </div>
            </div>
        
            <div className="col-md-4" >
            
           
                    <h4 className="text-dark">Các bài tập Khác</h4>                     
                    <div className="card-fluid w-100 p-3 container">
                        <div className="row">
                            <div className="card_img col-md-6">
                                <img src={img} alt="soi..." className="img_sugg"/>
                            </div>
                            <div className="card_block col-md-6">
                                    <p className="card-title text-dark text-truncate"> {same.excName}</p>
                                    <p className="card-text text-muted mx-auto text-truncate"> {same.title}</p>
                                <div className="btn btn-success">
                                    <a className="text-dark"  onClick={handleClick}> Detail </a>
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
                                <div className="card_img col-md-1 ">
                                    <img src={img} className="img_avatar" alt="soi..." />
                                </div>
                                <div className=" col-md-11 ">
                                    <p className="card-title text-dark text-truncate">username</p>
                                    <p>dayOfComment</p>
                                    <p className="card-text text-muted mx-auto text-truncate">Comment content</p>
                            </div>
                        </div>
                    </div>
            </div> 
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
                                <h2 className="text-dark">Content</h2>
                            </div>
                         
                            <img src={img} alt="soi..." className="img_content"/>
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
                                <div className="btn btn-success">
                                    <a className="text-dark" href="/detail"> Detail </a>
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
