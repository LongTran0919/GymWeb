import React, {useState,useContext,useEffect}  from 'react';
import '../product/Card.css';
import {Link} from 'react-router-dom';
import {DataContext} from '../product/data/DataProvider';
import img from '../../IMG/unnamed.jpg';
import {AuthContext} from '../../../Backend/Context/AuthContext'
import {IoIosAddCircle} from 'react-icons/io';
import {MdUpdate} from 'react-icons/md';
import {RiDeleteBin5Line} from 'react-icons/ri';
const axios = require('axios');

export default function AdminPro(){
    const [data,setdata]=useState("")
    const [flag,setflag]=useState('');
    const [seachTerm,setSearchTerm]=useState('');
    const {isAuthenticated,user,setisAuthenticated,setUser} = useContext(AuthContext);

    useEffect(() => {
        if(!flag) axios.get('http://localhost:5000/exercise/all')
          .then(function(data){
              setflag(true)
                return setdata (data.data)})
        });
        console.log(data)
  return(
    <div className = "container">
        <div className="box_search mt-10">
                <input type="text" className="input_search" placeholder="  Enter the exercise name or part of the body" onChange={event=>{setSearchTerm(event.target.value)}}/>
        </div>
        <div className="btn-content-right">
            <a type="button" class="btn-add-les" href="/admin/add">Add Lesson <IoIosAddCircle size={20}/></a>
        </div>
        {
            Object.values(data).filter((a)=>{
                if(seachTerm ==""){
                    return a
                }else if(a.excName.toLowerCase().includes(seachTerm.toLowerCase())||a.compound.toLowerCase().includes(seachTerm.toLowerCase())||a.level.toLowerCase().includes(seachTerm.toLowerCase())){
                     return a
                }
                }).map(a =>(
                    <div classNameName="row">                   
                    <div className="card card-lesson d-flex flex-row justify-content-between pt-10">         
                        <img className="" src={img} alt="Card image cap"/>
                        <div className="flex-fill">
                            <h4>{a.excName}</h4>
                            <div className="text-muted">{a.compound}</div>
                            <div className="text-muted">{a.level}</div>
                        </div>
                        
                            <div className="edit">
                            <Link to={`/admin/product/update/${a._id}`}style={{textDecoration: 'none'}}>
                                <button className="btnEdit">
                                    Update<MdUpdate/>
                                </button>
                            </Link>
                                <button className="btnDelete">
                                    Delete<RiDeleteBin5Line/>
                                </button>
                            </div>
                        
                    </div>      
                </div>
                ))
        }
       
    </div>
    )
}