import React,{useContext,useState} from 'react';
import { useParams } from 'react-router-dom';
import {DataContext} from './data/DataProvider';
import IMg from '../../IMG/soi.jpg'
import '../Form.css'

export default function Details(){
    const{id} = useParams();
    const[products, setProducts] = useContext(DataContext);

    const details=products.filter((product, index)=>{
            return product._id==id;
    })

   console.log(details);



    return(
      
        <div className="Container">
             <div className="row">
                 <div className="col-md-8">
                     <div className="row">
                         <img src={IMg} alt="soi..." className="img-fluid"/>
                     </div>  
                     <div className="row">
                        <h2 className="text-light">Title</h2>
                     </div>  
                    <div className="row">
                         <p className="text-muted"> sub</p>
                     </div>  
                     {/* session */}
                     <div>
                     {
                         details.map(product =>(
                             <div className="card-fluid" key={product._id}>
                             
                                 <div className="card_body">
                                     <h2 className="text-light">{product.product_name}</h2>
                                 </div>
                                 <div className="card_body">
                                     <p className="text-muted">{product.description}</p>
                                 </div>
                                 <img src={IMg} alt="soi..." className="card-img-bottom"/>
                             </div>
                         ))  
                     }
                     </div>
                 </div>
              
                 <div className="col-md-4">
                         <h4 className="text-light">Cac bai tap tuong tu</h4>                     
                         <div className="card-fluid w-100 p-3 container">
                             <div className="row">
                                 <div className="card_img col-md-6">
                                     <img src={IMg} alt="soi..."/>
                                 </div>
                                 <div className="card_block col-md-6">
                                         <p className="card-title text-dark text-truncate"> Session_Name</p>
                                         <p className="card-text text-muted mx-auto text-truncate"> Session_descSession</p>
                                     <div className="btn btn-success">
                                         <a className="text-light" href="/detail"> Detail </a>
                                     </div>
                                 </div>
                             </div>
                         </div>                      
                 </div>
          </div>
         </div>
    )
}
