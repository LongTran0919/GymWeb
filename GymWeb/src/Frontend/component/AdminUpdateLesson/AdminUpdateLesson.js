import React, { Component } from 'react'
import  img from '../../IMG/authen.png'

export class AdminUpdateLesson extends Component {
  state={
    lessonImage: 'https://cokhichinhxac29.cactusvnweb.com/wp-content/themes/cokhi29/assets/images/img-default.jpg'
  }


  // funtion add an add session card when user clicked Button AddSession
  clickAddHandler= (e)=>{
    console.log("Clicked!!!");
    return(
      <div>
        Clicked!!!
      </div>
    )
  }

  imgHandler = (e)=>{
    const reader = new FileReader();
    reader.onload =() =>{
      if(reader.readyState === 2){
        this.setState({lessonImage: reader.result})
      }
    }
    reader.readAsDataURL(e.target.files[0])
  }

  render() {

    const   {lessonImage} = this.state

    return (
      <div className="container">
      <div className="row">
      <form className="col-md-12 form-add">
        
        {/* input title */}
        <div className="form-group">
        <label for="exampleInputEmail1">Title</label>
        <input type="text" className="form-control"  placeholder="Enter Lesson Title"/>
        </div>
        
        {/* input desc */}
        <div className="form-group">
        <label for="exampleInputEmail1">Description </label>
        <textarea className="form-control" aria-label="With textarea" placeholder="Enter Lesson Description"></textarea>
        </div>
        
        {/* choose image from device */}
        <div className="con-img">
          <div className="img-holder">
            <img src={lessonImage} id="img" className="img added-img"></img>
            {/* <input class="form-control form-control-lg" id="formFileLg" type="file" />     */}
          </div>
          <input type="file" name="img-upload" id="input"  onChange={this.imgHandler}/>
        </div>

        <div><h2>SESSION</h2></div>


    {/* SESSION */}
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
        

                <div>
                    <div className="img-holder">
                        <img src={lessonImage} id="img" className="img added-img"></img>
            {/* <input class="form-control form-control-lg" id="formFileLg" type="file" />     */}
                    </div>
                    <input type="file" name="img-upload" id="input"  onChange={this.imgHandler}/>
                </div>
            </form>
        </div>
    </div>




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
        

                <div>
                    <div className="img-holder">
                        <img src={lessonImage} id="img" className="img added-img"></img>
            {/* <input class="form-control form-control-lg" id="formFileLg" type="file" />     */}
                    </div>
                    <input type="file" name="img-upload" id="input"  onChange={this.imgHandler}/>
                </div>
            </form>
        </div>
    </div>


    
    {/* END LOAD OLD SESSION */}



    
        {/* add new session for lesson  */}
        {/* click to show new session form */}
        <div className="btn-content-right">
          <button type="button" class="btn-primary-add" onClick= {this.clickAddHandler}>Add Session</button>
        </div>

        {/* add new lession
        click to confirm  */}
        <div className="btn-content-left">
          <button type="submit" class="btn-primary-add">Add Lesson</button>
        </div>

      </form>
      </div>
    </div>
    )
  }
}

export default AdminUpdateLesson
