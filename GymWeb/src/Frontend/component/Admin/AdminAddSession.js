import React, { Component } from 'react'
import  img from '../../IMG/authen.png'

export class AdminAddSession extends Component {
  state={
    lessonImage: 'https://cokhichinhxac29.cactusvnweb.com/wp-content/themes/cokhi29/assets/images/img-default.jpg'
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
    )
  }
}

export default AdminAddSession
