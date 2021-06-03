import React, {useState,useContext,useEffect}  from 'react';
import '../product/Card.css';
import {Link} from 'react-router-dom';
import {DataContext} from '../product/data/DataProvider';
import img from '../../IMG/unnamed.jpg';
import {AuthContext} from '../../../Backend/Context/AuthContext'
import {IoIosAddCircle} from 'react-icons/io';
import {MdUpdate} from 'react-icons/md';
import {RiDeleteBin5Line} from 'react-icons/ri';
import notfound from '../404page/404'
import {toast} from 'react-toastify';
import ExerciseService from '../../../Backend/Service/ExerciseService'
const axios = require('axios');


export default function AdminPro(){
    const [data,setdata]=useState("")
  
    const [seachTerm,setSearchTerm]=useState('');
    const {isAuthenticated,user,setisAuthenticated,setUser} = useContext(AuthContext);

    useEffect(() => {
         axios.get('http://localhost:5000/exercise/all')
          .then(function(data){
         
                return setdata (data.data)})
    });
    function handleRemove(id) {
        ExerciseService.DeleteId(id).then(
            data=>{
                console.log(data)
                if(data.status===200){
                    console.log(id);
                    toast.configure();
                    toast.success('Xóa bài tập thành công' ,{position:toast.POSITION.BOTTOM_LEFT});
                    }
                    else{
                      toast.configure();
                      toast.success('Xóa bài tập thất bại' ,{position:toast.POSITION.BOTTOM_LEFT});
                    }
            }
            
          )
          
        }
        
   if(!user)     
    return notfound()
   if(user.role=='admin' )return(<div className = "container">
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
               <div className="cardd card-lesson d-flex flex-row justify-content-between pt-10">         
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
                           <button className="btnDelete" onClick={() => handleRemove(a._id)}>
                               Delete<RiDeleteBin5Line/>
                           </button>
                       </div>
                   
               </div>      
           </div>
           ))
   }
  
</div>)
else    return notfound()

}
