import React, {useState,useContext} from 'react';
import './Card.css';
import {Link} from 'react-router-dom';
import {DataContext} from './data/DataProvider';


export default function MainContent(){
    const [products,setProducts]=useContext(DataContext);
    const [nhomCo,setnhomCo]=useState("");
    const [lv,setLV]=useState("");
    return(
        <div className="Container">  
            <div className="main_cbcontent">
                <select className="custom-select cbselect" value={nhomCo} onChange={(e)=>{
                    const selectNhomCo=e.target.value;
                    setnhomCo(selectNhomCo);
                }}>
                    <option value="tay">Tay</option>
                    <option value="nguc">Ngực</option>
                    <option value="bung">Bụng</option>
                    <option value="chan">Chân</option>
                    <option value="mong">Mông</option>
                </select>
                <select className="custom-select cbselect" value={lv} onChange={(e)=>{
                    const selectLv=e.target.value;
                    setLV(selectLv);
                }}>
                    <option value="lv1">1</option>
                    <option value="lv2">2</option>
                    <option value="lv3">3</option>
                </select>
                <button className="btnTim">Tìm kiếm</button>
            </div>
            <div className="main_content">
            {   
                products.map(product =>(
                    <div className="card_container" key={product._id}>
                        <Link to={`/product/${product._id}`}style={{textDecoration: 'none'}}>
                            <div className="img-container">
                                <img src="https://images.unsplash.com/photo-1477862096227-3a1bb3b08330?ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60" alt=""/>
                            </div>
                            <div className="card-content">
                                <div className="card_titlee">
                                    <h3>{product.product_name}</h3>
                                </div>
                                <div className="card_bodyy">
                                    <p>Mô tả: {product.description}</p>
                                    <p>Vị trí: {product.area}</p>
                                    <p>Level: {product.level}</p>
                                </div>
                            </div>
                            <div className="btnInfo">
                                <button>
                                    <a>View More</a>
                                </button>
                            </div>
                        </Link>
                    </div>
                ))  
            }
            </div>
        </div>
    )
}