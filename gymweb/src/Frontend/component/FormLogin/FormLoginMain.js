import React, { useState } from 'react';
import FormLogin from './FormLogin';
import '../Form.css';



const Form = () => {
    const [isSubmitted,setIsSubmitted]=useState(false);

    function submitForm(){
        setIsSubmitted(true);
    }
    return (
        <>
        <div className="form-container">
            <span className="close-btn"></span>
            <div className="form-content-left">
                <img className="form-img" src="img/img-2.svg" alt="spaceship"></img>
            </div>
           <FormLogin/>
        </div>
        </>
    );
};

export default Form;