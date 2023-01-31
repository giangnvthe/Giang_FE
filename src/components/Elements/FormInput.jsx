import React from "react";
import { useState } from "react";
import '../../style/authen.css'

const FormInput = (props) =>{
    const [focused,setFocused] = useState(false);
    const {label,errorMessage,onChange,id, ...inputProps} = props;

    const handleFocus = (e)=>{
        setFocused(true)
    };

    return (
        <>
            <label className="semiBold">{label}</label>
            <input {...inputProps} onChange={onChange} onBlur={handleFocus} focused={focused.toString()}/>
            <span className="spanError" >{errorMessage}</span>
        </>
    );
};

export default FormInput;