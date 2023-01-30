import React, { useState } from "react";
import '../style/login.css'
import { Link as RouterLink } from "react-router-dom";
import axios from "axios";

import FullButton from "../components/Buttons/FullButton";
import AuthenNavbar from "../components/Nav/AuthenNavbar"


export default function Login(props) {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [message, setMessage] = useState("");

  //Declaring the rule of characters to be used. Applying rule to current state. Verifying the result.
  const emailRegex = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;
  //    length 6 to 16.
  //    One Alphabet in Password.
  //    One Special Character in Password.
  const passwordRegEx = "^(?=.*[a-z])(?=.*[$@$#!%*?&])[A-Za-z\\d$@$#!%*?&]{6,16}";

  const emailValidation = () => {
    const regEx = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;
    if (regEx.test(email)) {
      setMessage("Email is Valid");
    } else if (!regEx.test(email) && email !== "") {
      setMessage("Email is Not Valid");
    } else {
      setMessage("");
    }
  };

  const handleOnChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post('http://localhost:8080/login', {
      'username': email,
      'password': pass
    })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  return (
    <>
      <AuthenNavbar></AuthenNavbar>
      <div className="Wrapper">
        <div className="auth-form-container" style={{ marginTop: "100px"
}}>
        <h2>Login</h2>
        <form className="login-form" onSubmit={handleSubmit}>
          <label className="semiBold" htmlFor="email">Email</label>
          <input id="email" className="input" type="email" placeholder="email" value={email} onChange={handleOnChange} />

          <label className="semiBold " htmlFor="password">Password</label>
          <input className="marginBot" value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
          <FullButton title="Get Started" />

        </form>
        <button className="link-btn " onClick={(emailValidation) => props.onFormSwitch('register')}>Don't have an account?  <span className="semiBold"> Register here.</span></button>
      </div>
    </div>
    </>
  )
}
