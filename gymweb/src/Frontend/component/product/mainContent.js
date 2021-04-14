import React, {useState} from 'react';
import product_card from "./data/product-data";
import IMg from '../../IMG/tay-removebg-preview.png';
import '../../../App.css';

const MainContent=()=>{
    const [nhomCo,setnhomCo]=useState("");
    const [lv,setLV]=useState("");
    const listItems=product_card.map((item)=>
        <div className="card" key={item.id}>
            <div className="card_img">
                <img src={IMg} alt="soi..."/>
            </div>
            <div className="card_header">
                <h2>{item.product_name}</h2>
                <p>{item.description}</p>
                <p className="price">{item.price}<span>{item.currency}</span></p>
                <div className="btn">Add to cart</div>
            </div>
        </div>
    );
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
                <select className="custom-select cbselect" onChange={(e)=>{
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
                {listItems}
            </div>
        </div>
    )
}
export default MainContent;