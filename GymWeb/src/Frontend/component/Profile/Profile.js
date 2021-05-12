import React,{useContext,useState} from 'react';
import { useParams } from 'react-router-dom';
import img from '../../IMG/spatan.jpg'
import './Profile.css'



export default function Profile(){
    return(
    <div className="container">
        <div className="row py-5">
                <div className="col-md-12 mx-auto">
                
                    {/* <!-- name and avatar --> */}
                    <div className="bg-white shadow rounded ">            
                        <div className="px-4 pt-0 pb-4 cover">
                            <div className="media align-items-end profile-head">
                            
                                {/* <!-- avatar image --> */}
                                <div className="profile mr-3">
                                    <img src={img} alt="avatar" className="rounded mb-2 img-thumbnail avatar"/>

                                    <button type="button" class="btn-outline-dark btn-sm btn-edit btn-block">Edit Profile</button>
                                </div>
                                <div className="media-body mb-5 text-white">
                                    {/* <!-- name of user  -->
                                    <!-- -> change here --> */}
                                    <h4 className="mt-0 mb-0">Mark Williams</h4>
                                    {/* <!-- Address --> */}
                                    <p className="small mb-4"> <i className="fas fa-map-marker-alt mr-2 "></i>New York</p>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                    {/* end avatar and name */}

                    

            {/* <!-- show height weight and bmi  --> */}
                    <div className="bg-light p-4 d-flex justify-content-end text-center">
                        <ul className="list-inline mb-0">
                            <li className="list-inline-item">
                                <h5 className="font-weight-bold mb-0 d-block">215</h5><small className="text-muted"> 
                                        <img className="fas fa-image mr-1"></img>Height</small>
                            </li>
                        <li className="list-inline-item">
                                        <h5 className="font-weight-bold mb-0 d-block">745</h5><small className="text-muted"> 
                                        <img className="fas fa-user mr-1"></img>Weight</small>
                            </li>

                            <li className="list-inline-item">
                                        <h5 className="font-weight-bold mb-0 d-block">340</h5><small className="text-muted"> 
                                        <img className="fas fa-user mr-1"></img>BMI</small>
                            </li>
                        </ul>
                    </div>              


                        {/* <!-- user profile  --> */}
                        <div className="px-4 py-3">
                            <h5 className="mb-0">About</h5>
                            <div className="p-4 rounded shadow-sm bg-light">
                                <p className="font-italic mb-0">user@gmail.com</p>
                                <p className="font-italic mb-0">date of birth</p>
                            </div>
                        </div>
                    
                
            </div>
        </div>
    </div>
    )
}