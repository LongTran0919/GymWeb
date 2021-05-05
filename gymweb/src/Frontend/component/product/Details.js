import React,{useContext} from 'react';
import { useParams } from 'react-router';
import {DataContext} from './data/DataProvider'
import img from '../../IMG/soi.jpg'
import './Card.css'

export default function Details(){
    const{id} = useParams();
    const[products, setProducts] = useContext(DataContext);

    const details= products.filter((product, index)=>{
        return product.id == id
    })


    return(
        <div className="Container">
            <div className="row">
                    {/* anh tieu de cua bai tap */}
                <div className="col-md-8">
                    <div className="row">
                        <img src={img} alt="soi..." className="img-fluid"/>
                    </div>  
                    <div className="row">
                        <h2 className="text-light">Title</h2>
                    </div>  
                    <div className="row">
                        <p className="text-muted"> sub</p>
                    </div>  
                    {/* end */}

                    {/* session cac dong tac cua bai tap */}
                    <div>
                    {
                            <div className="card-fluid">
                               
                                <div className="card_body">
                                    <h2 className="text-light">Content_name</h2>
                                </div>
                                <div className="card_body">
                                    <p className="text-muted">Content_Desc</p>
                                </div>
                                {/* img_content: img card content of lesson */}
                                <img src={img} alt="soi..." className="img_content"/>
                            </div>
                    }

                    {/* end */}
                    </div>
                </div>
                {/* cac bai tap de xuat */}
                <div className="col-md-4">
                        <h4 className="text-dark">Cac bai tap tuong tu</h4>                     
                        <div className="card-fluid w-100 p-3 container">
                            <div className="row">
                                <div className="card_img col-md-6">
                                    {/* img_sugg: img card suggest */}
                                    <img src={img} className="img_sugg" alt="soi..."/>
                                </div>
                                <div className="card_block col-md-6">
                                        <p className="card-title text-dark text-truncate"> Session_Name</p>
                                        <p className="card-text text-muted mx-auto text-truncate"> Session_descSession_descSession_descSession_descSession_descSession_descSession_descSession_desc</p>
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
