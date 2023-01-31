import React, { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import axios from "axios";

//components
import FormInput from "../components/Elements/FormInput"
import AuthenNavbar from "../components/Nav/AuthenNavbar"

import '../style/authen.css'

import { useRef } from "react";
import FullButton from "../components/Buttons/FullButton";




export default function Register(props) {
    const [value, setValues] = useState({
        email: "",
        username: "",
        password: "",
        confirmPassword: ""
    })

    const inputs = [
        {
            id: 1,
            name: "email",
            type: "email",
            placeholder: "Email",
            label: "Email",
            errorMessage: "It should be a valid email address!",
            required: true,

        },
        {
            id: 2,
            name: "username",
            type: "text",
            placeholder: "User Name",
            label: "User Name",
            errorMessage: "Username should be 3-16 characters and should't include any special characters!",
            required: true,
            pattern: "^[A-Za-z0-9]{3,16}$",

        },
        {
            id: 3,
            name: "password",
            type: "password",
            placeholder: "Password",
            label: "Password",
            errorMessage: "Password should be 8-20 characters and include at least 1 letter, 1 number,1 special charaters",
            pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
            required: true,

        },
        {
            id: 4,
            name: "confirmPassword",
            type: "password ",
            placeholder: "Confirm Password",
            label: "Confirm Password",
            errorMessage: "Password don't match!",
            required: true,
            pattern: value.password
        }
    ]

    const handleSubmit = (e) => {
        e.preventDefault();
    }
    const onChange = (e) => {
        setValues({ ...value, [e.target.name]: e.target.value })
    }

    return (
        <>
            <AuthenNavbar></AuthenNavbar>
            <div className="Wrapper">
                <div className="auth-form-container">
                    <h2>Register</h2>
                    <form className="register-form" onSubmit={handleSubmit} >
                        {inputs.map((input) => (
                            <FormInput
                                key={input.id}
                                {...input}
                                value={value[input.name]}
                                onChange={onChange}
                            />
                        ))}
                        <FullButton title={"Register"} />

                    </form>

                    <RouterLink to="/login">
                        <button className="link-btn">Already have an account? Login here.</button>
                    </RouterLink>
                </div>
            </div>
        </>
    )
}