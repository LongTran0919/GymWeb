import React from "react";
import './Lession.css'
const AdminAddSession = (props) => {
  // imgHandler = (e)=>{
  //   const reader = new FileReader();
  //   reader.onload =() =>{
  //     if(reader.readyState === 2){
  //       this.setState({lessonImage: reader.result})
  //     }
  //   }
  //   reader.readAsDataURL(e.target.files[0])
  // }
  return (
    props.taskList.map((val, idx) => {
      
      let projectName = `projectName-${idx}`, task = `task-${idx}`, taskNotes = `taskNotes-${idx}`, taskStatus = `taskStatus-${idx}`
      return (
        <tr key={val.index}>
          <div className="container container-ses">
            <div className="row">
              <form className="col-md-12 form-add">
        
        {/* input title */}
                <div className="form-group">
                    <label for="exampleInputEmail1">Title</label>
                    <input type="text" className="form-control"  placeholder="Enter Session Title"/>
                </div>
        
        {/* input desc */}
                <div className="form-group">
                    <label for="exampleInputEmail1">Description </label>
                    <textarea className="form-control" aria-label="With textarea" placeholder="Enter Session Description"></textarea>
                </div>
        

                {/* <div>
                    <div className="img-holder">
                        <img  id="img" className="img added-img"></img>
           
                    </div>
                    <input type="file" name="img-upload" id="input"  onChange={this.imgHandler}/>
                </div> */}
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
