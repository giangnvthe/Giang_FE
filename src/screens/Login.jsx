import React, { useState } from "react";
import '../style/authen.css'
import { Link as RouterLink } from "react-router-dom";
import axios from "axios";

import FullButton from "../components/Buttons/FullButton";
import AuthenNavbar from "../components/Nav/AuthenNavbar"


export default function Login(props) {
  // const [email, setEmail] = useState('');
  // const [pass, setPass] = useState('');
  const [message, setMessage] = useState("");

  const [values, setValues] = useState({
    email:'',
    password:''
  });


  // //Declaring the rule of characters to be used. Applying rule to current state. Verifying the result.
  // const emailRegex = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;
  // //    length 6 to 16.
  // //    One Alphabet in Password.
  // //    One Special Character in Password.
  // const passwordRegEx = "^(?=.*[a-z])(?=.*[$@$#!%*?&])[A-Za-z\\d$@$#!%*?&]{6,16}";

  const Validation = () => {
    const emailregEx = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;
    const passwordRegEx = "^(?=.*[a-z])(?=.*[$@$#!%*?&])[A-Za-z\\d$@$#!%*?&]{6,16}";
    if (emailregEx.test(values.email)&&passwordRegEx.test(values.password)) {
      setMessage("Email is Valid");
    } else if ((!emailregEx.test(values.email) && values.email !== "")||(!passwordRegEx.test(values.password) && values.password !== "")) {
      setMessage("Email is Not Valid");
    } else {
      setMessage("");
    }
  };

  const handleOnChange = (e) => {
    setValues({...values,[e.target.name]:e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    Validation();

    axios.post('http://localhost:8080/login', {
      'username' : values.email,
      'password' : values.pass
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
          <input id="email" name="email" className="input" type="email" placeholder="email" value={values.email} onChange={handleOnChange} />

          <label className="semiBold " htmlFor="password">Password</label>
          <input id="password" name="password" className="marginBot"  type="password" value={values.password} onChange={handleOnChange}  placeholder="********"  />
          <FullButton title="Get Started" />

          </form>
          <RouterLink to="/register">
            <button className="link-btn " >Don't have an account?  <span className="semiBold"> Register here.</span></button>
                
              </RouterLink>
          {/* <button className="link-btn " onClick={(emailValidation) => props.onFormSwitch('register')}>Don't have an account?  <span className="semiBold"> Register here.</span></button> */}
        </div>
      </div>
    </>
  )
}
