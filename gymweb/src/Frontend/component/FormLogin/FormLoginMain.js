import React, { useState } from 'react';
import FormLogin from './FormLogin';
import '../Form.css';
import FormSuccess from '../FormRegister/FormSuccess';



const FormLoginMain = () => {
    const [isSubmitted,setIsSubmitted]=useState(false);

    function submitFormLogin(){
        setIsSubmitted(true);
    }
    return (
        <>
        <div className="form-container">
            {/* {!isSubmitted ? <FormLogin submitForm=
            {submitFormLogin}/> :<FormSuccess/>} */}
            {!isSubmitted ? <FormLogin submitForm=
            {submitFormLogin}/> :<FormSuccess/>}
        </div>
        </>
    );
};

export default FormLoginMain;