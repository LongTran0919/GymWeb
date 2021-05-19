import React from "react";
import './AdminAddLesson.css'
const AdminAddSession = (props) => {
   

 
  return (
  
    props.taskList.map((val, idx) => {
      
      var TitleSession = `TitleSession-${idx}`, DesSession = `DesSession-${idx}` ,imageSession = `imageSession-${idx}` 
      const imgHandler = (e)=>{
        const reader = new FileReader();
        reader.onload =() =>{
          if(reader.readyState === 2){
            imageSession= reader.result
          }
        }
        reader.readAsDataURL(e.target.files[0])
      }
      return (
        <tr key={val.index}>
          <div className="container container-ses">
            <div className="row">
              <form className="col-md-12 form-add">
        
        {/* input title */}
                <div className="form-group">
                    <label for="exampleInputEmail1">Title</label>
                    <input type="text" className="form-control" required name="TitleSession" data-id={idx} placeholder="Enter Session Title"/>
                </div>
        
        {/* input desc */}
                <div className="form-group">
                    <label for="exampleInputEmail1">Description </label>
                    <textarea className="form-control" required name="DesSession" data-id={idx}  aria-label="With textarea" placeholder="Enter Session Description"></textarea>
                </div>
        

                <div  className="form-group">
                    <div className="img-holder">
                        <img  src={imageSession} id="img" className="img added-img" atl="imageSession"></img>
           
                    </div>
                    <input type="file" name="imageSession" id="imageSession"  onChange={imgHandler}/>
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
