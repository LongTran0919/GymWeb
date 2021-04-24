import React, { useState } from 'react';
import FormLogin from './FormLogin';
import '../Form.css';
import FormSuccess from '../FormRegister/FormSuccess';



const FormLoginMain = () => {
    const [isSubmitted,setIsSubmitted]=useState(false);

    function submitFormLogin(){
        setIsSubmitted(false);
    }
    return (
        <>
        <div className="form-container">
            <div className="form-content-left">
               
            </div> 
            {!isSubmitted ? <FormLogin submitForm=
            {submitFormLogin}/> :<FormSuccess/>}
        </div>
        </>
    );
};

export default FormLoginMain;