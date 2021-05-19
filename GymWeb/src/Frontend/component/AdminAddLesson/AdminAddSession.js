import React from "react";
import './AdminAddLesson.css'
import {FcAddImage} from "react-icons/fc";
import  {useState} from 'react';
const AdminAddSession = (props) => {
   
  const [image, setimage] = useState('');
  
  var imgHandler = (e)=>{
    const reader = new FileReader();
    reader.onload =() =>{
      if(reader.readyState === 2){
          props.taskList[e.target.dataset.id].imageSession    = reader.result;
         console.log(e.target.dataset.id)
        setimage(reader.result)
      
      }
    }
     reader.readAsDataURL(e.target.files[0])
  }
  return (
  
    props.taskList.map((val, idx) => {
    
      let TitleSession = `TitleSession-${idx}`, DesSession = `DesSession-${idx}` ,imageSession = `imageSession-${idx}` 
      
      return (
        <tr key={val.index}>
          <div className="container container-ses">
            <div className="row justify-content-center ">
              <form className="col-md-12 form-add">
        
        {/* input title */}
                <div className="form-group">
                    <label for="exampleInputEmail1">Title</label>
                    <input type="text" className="form-control" required name="TitleSession" data-id={idx} placeholder="Enter Session Title"/>
                </div>
        
        {/* input desc */}
                <div className="form-group ">
                    <label for="exampleInputEmail1">Description </label>
                    <textarea className="form-control" required name="DesSession" data-id={idx}  aria-label="With textarea" placeholder="Enter Session Description"></textarea>
                </div>
        

                <div  className="form-group ">
                    <div className="img-holder">
                        <img  src={image}   className="img added-img  form-control-file"  atl="imageSession"></img>
           
                    </div>
                    <input  type="file" name="imageSession" id="imageSession" data-id={idx}  onChange={imgHandler}/>
                    <label for="imageSession" class="mb-2">
                                         <FcAddImage size={36}/>
                                </label>
                </div>
            </form>
          </div>
        </div>
          
          <td>
            {
            idx===0?<div></div>
            : <button className="btn_delete" onClick={(() => props.delete(val))} >X</button>
            }
          </td>
        </tr >
      )
    })
  )
}
export default AdminAddSession
