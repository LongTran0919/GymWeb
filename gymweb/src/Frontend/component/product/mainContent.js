import React, {useState,useContext} from 'react';
import IMg from '../../IMG/tay-removebg-preview.png';
import '../../../App.css';
import {Link} from 'react-router-dom';
import {DataContext} from './data/DataProvider';


export default function MainContent(){
    const [products,setProducts]=useContext(DataContext);
    console.log(products);
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
                    <div className="card" key={product.id}>
                        <Link to={`/product/${product.id}`}>
                        <div className="card_img">
                            <img src={IMg} alt="soi..."/>
                        </div>
                        <div className="card_header">
                            <h2 className="text-dark">{product.name}</h2>
                            <p>{product.description}</p>
                            <p className="price">{product.price}<span>{product.currency}</span></p>
                        </div>
                        </Link>
                    </div>
                ))  
            }
            </div>
        </div>
    )
}