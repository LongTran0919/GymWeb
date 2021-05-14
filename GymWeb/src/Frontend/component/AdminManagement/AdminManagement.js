import React, {useState,useContext} from 'react';
import '../product/Card.css';
import {Link} from 'react-router-dom';
import {DataContext} from '../product/data/DataProvider';
import img from '../../IMG/unnamed.jpg';


export default function MainContent(){
  return(
    <div classNameName = "container">
    {/* we will have cards upto lessons, a card of lesson in a row */}

    <div className="title-bar">
        <h1 className="text-light">
            Admin Management
        </h1>
    </div>
    <div className="btn-content-right">
            <button type="button" class="btn-add-les" >Add Lesson</button>
    </div>
   
    

    {/* start card */}
        <div classNameName="row">                   
            <div className="card card-lesson d-flex flex-row justify-content-between">
                {/* image of lesson */}
                <img className="card-img-lesson" src={img} alt="Card image cap"/>
                {/* title and description of lesson */}
                <div className="flex-fill">
                    <h4>Title</h4>
                    <p className="text-muted">Desc</p>
                </div>
                {/* button Update Lesson */}
                <button type="button" class="btn-edit-les" ><h3>Update</h3> </button>     
            </div>      
        </div>
    {/* end card */}

    
    {/* start card */}
    <div classNameName="row">                   
            <div className="card card-lesson d-flex flex-row justify-content-between">
                {/* image of lesson */}
                <img className="card-img-lesson" src={img} alt="Card image cap"/>
                {/* title and description of lesson */}
                <div className="flex-fill">
                    <h4>Title</h4>
                    <p className="text-muted">Desc</p>
                </div>
                {/* button Update Lesson */}
                <button type="button" class="btn-edit-les" ><h3>Update</h3> </button>     
            </div>      
        </div>
    {/* end card */}

    
    {/* start card */}
    <div classNameName="row">                   
            <div className="card card-lesson d-flex flex-row justify-content-between">
                {/* image of lesson */}
                <img className="card-img-lesson" src={img} alt="Card image cap"/>
                {/* title and description of lesson */}
                <div className="flex-fill">
                    <h4>Title</h4>
                    <p className="text-muted">Desc</p>
                </div>
                {/* button Update Lesson */}
                <button type="button" class="btn-edit-les" ><h3>Update</h3> </button>     
            </div>      
        </div>
    {/* end card */}

    </div>
    )
}