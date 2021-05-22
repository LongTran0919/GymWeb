import React, {useState,useContext,useEffect} from 'react';
import './Card.css';
import {Link} from 'react-router-dom';
import {DataContext} from './data/DataProvider';
import {AuthContext} from '../../../Backend/Context/AuthContext'
const axios = require('axios');
export default function MainContent(){


 
    const [data,setdata]=useState("")
    const [seachTerm,setSearchTerm]=useState('');
    const [flag,setflag]=useState('');
    const {isAuthenticated,user,setisAuthenticated,setUser} = useContext(AuthContext);
  
    useEffect(() => {
       

      if(!flag) axios.get('http://localhost:5000/exercise/all')
        .then(function(data){
            setflag(true)
              return setdata (data.data)})
      });
      
  
    return(
        <div className="Container">  
            <div className="box_search">
                <input type="text" className="input_search" placeholder="  Enter the exercise name or part of the body" onChange={event=>{setSearchTerm(event.target.value)}}/>
            </div>
            <div className="main_content">
            {      
               Object.values(data).filter((a)=>{
                if(seachTerm ==""){
                    return a
                }else if(a.excName.toLowerCase().includes(seachTerm.toLowerCase())||a.compound.toLowerCase().includes(seachTerm.toLowerCase())||a.level.toLowerCase().includes(seachTerm.toLowerCase())){
                     return a
                }
                }).map(a =>(
                        <div className="card_container" key={a._id}>
                                <div className="img-container">
                                    <img src="https://images8.content-hci.com/commimg/myhotcourses/blog/post/myhc_94121.jpg" alt=""/>
                                </div>
                                <div className="card-content">
                                    <div className="card_titlee">
                                        <h3>{a.excName}</h3>
                                    </div>
                                    <div className="card_bodyy">
                                        <p>Mô tả: {a.title}</p> 
                                        <p>Vị trí: {a.compound}</p>
                                        <p>Level: {a.level}</p>
                                    </div>
                                </div>
                                <Link to={`/product/${a._id}`}style={{textDecoration: 'none'}}>
                                    <div className="btnInfo">
                                        <button>
                                            View More
                                        </button>
                                    </div>
                                </Link>
                        </div>
                    ))  
            }
            </div>
        </div>
    )
}