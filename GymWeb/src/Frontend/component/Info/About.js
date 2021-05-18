import React from 'react';
import img2 from '../../IMG/FB_IMG_1600351816677.jpg'
import img3 from '../../IMG/thanh.jpg'
import img1 from '../../IMG/soi.jpg'
import './About.css'
export default function About(props) {
    return (

        <div className="container">
            <div className="row mt-20">
                <h1>About Our Team</h1>
            </div>
            <div className="row">

                <div className="col-md-4 ava-border mb-20">
                    <img alt="avatar" className="dev-ava" src={img1}/>
                    <h2>Trần Gia Phúc</h2>
                    <h4>Working</h4>
                </div>
                
                
                <div className="col-md-4 ava-border mb-20">
                    <img alt="avatar" className="dev-ava" src={img2}/>

                    <h2>Trần Hoàng Long</h2>
                    <h4>Working</h4>
                </div>
                

                <div className="col-md-4 ava-border mb-20">
                    <img alt="avatar" className="dev-ava" src={img3}/>

                    <h2>Trần Nhật Thành</h2>
                    <h4>Working</h4>
                </div>

            </div>
        </div>
    );
}
