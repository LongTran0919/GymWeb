import React,{useContext,useState} from 'react';
import { useParams } from 'react-router-dom';
import {DataContext} from './data/DataProvider';
import img from '../../IMG/spatan.jpg'
import './Card.css'

export default function Details(){
    const{id} = useParams();
    const[products, setProducts] = useContext(DataContext);

    return(
      
        <div className="Container">
             <div className="row">
                 <div className="col-md-8">
                     <div className="row">
                         <img src={img} alt="soi..." className="img_title"/>
                     </div>  
                     <div className="row">
                        <h2 className="text-dark">Title</h2>
                     </div>  
                    <div className="row">
                         <p className="text-muted"> sub</p>
                     </div>  
                     {/* session */}
                     <div>
                     {
                             <div className="card-fluid">
                             
                                 <div className="card_body">
                                     <h2 className="text-dark">Content</h2>
                                 </div>
                                 <div className="card_body">
                                     <p className="text-muted">Desc</p>
                                 </div>
                                 <img src={img} alt="soi..." className="img_content"/>
                             </div>
                     }
                     </div>
                 </div>
              
                 <div className="col-md-4">
                         <h4 className="text-dark">Cac bai tap tuong tu</h4>                     
                         <div className="card-fluid w-100 p-3 container">
                             <div className="row">
                                 <div className="card_img col-md-6">
                                     <img src={img} alt="soi..." className="img_sugg"/>
                                 </div>
                                 <div className="card_block col-md-6">
                                         <p className="card-title text-dark text-truncate"> Session_Name</p>
                                         <p className="card-text text-muted mx-auto text-truncate"> Session_descSession</p>
                                     <div className="btn btn-success">
                                         <a className="text-dark" href="/detail"> Detail </a>
                                     </div>
                                 </div>
                             </div>
                         </div>                      
                 </div>
          </div>



          {/* Comment */}    
                {/* Your comment */}
                <div className="row">

                    <div className="col-md-8">
                        <form >
                            {/* input textbox */}
                            <div>
                            <h3 className="text-dark">Comment</h3>
                            <input
                                className='form-control'
                                type='text'
                                name='comment'
                                placeholder='Enter your Comment'
                            />
                            </div>

                            <div>
                                <p>Rating by star</p>
                            </div>            
                            <button className='btn-primary' type='submit'>Comment</button>
                        </form>
                    </div>
                    </div>


                    {/* Other comment */}
                    <div className="row">

                        <div className="card-fluid w-100 p-3 container">
                            <div className="row">
                                    <div className="card_img col-md-2">
                                        <img src={img} className="img_avatar" alt="soi..." />
                                    </div>
                                    <div className="card_block col-md-10">
                                        <p className="card-title text-dark text-truncate"> userName</p>
                                        <p>rating</p>
                                        <p>dayOfComment</p>
                                        <p className="card-text text-muted mx-auto text-truncate">Comment content</p>
                                </div>
                            </div>
                        </div>

                </div>
</div>

    )
}
