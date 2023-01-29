<<<<<<< Updated upstream
import React from "react";
import {MDBContainer, MDBCol, MDBRow, MDBBtn, MDBIcon, MDBInput, MDBCheckbox } from 'mdb-react-ui-kit';
=======
import React, { useState } from "react";
import '../style/login.css'
import { Link as RouterLink } from "react-router-dom";

>>>>>>> Stashed changes

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
    console.log(email);
  }

<<<<<<< Updated upstream
export default function Login() {
  
  return (
    <MDBContainer className="p-3 my-5 d-flex flex-column w-50">

    <MDBInput wrapperClass='mb-4' label='Email address' id='form1' type='email'/>
    <MDBInput wrapperClass='mb-4' label='Password' id='form2' type='password'/>

    <div className="d-flex justify-content-between mx-3 mb-4">
      <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
      <a href="!#">Forgot password?</a>
    </div>

    <MDBBtn className="mb-4">Sign in</MDBBtn>

    <div className="text-center">
      <p>Not a member? <a href="#!">Register</a></p>
      <p>or sign up with:</p>

      <div className='d-flex justify-content-between mx-auto' style={{width: '40%'}}>
        <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
          <MDBIcon fab icon='facebook-f' size="sm"/>
        </MDBBtn>

        <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
          <MDBIcon fab icon='twitter' size="sm"/>
        </MDBBtn>

        <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
          <MDBIcon fab icon='google' size="sm"/>
        </MDBBtn>

        <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
          <MDBIcon fab icon='github' size="sm"/>
        </MDBBtn>

      </div>
    </div>

  </MDBContainer>
  )
}
=======
  return (
    <>
      <AuthenNavbar></AuthenNavbar>
      <div className="Wrapper">
        <div className="auth-form-container">
          <h2>Login</h2>
          <form className="login-form" onSubmit={handleSubmit}>
            <label className="semiBold" htmlFor="email">Email</label>
            <input id="email" className="input" type="email" placeholder="email" value={email} onChange={handleOnChange} />
>>>>>>> Stashed changes

            <label className="semiBold " htmlFor="password">Password</label>
            <input className="marginBot" value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
            <FullButton title="Get Started" />

<<<<<<< Updated upstream



=======
          </form>
          <button className="link-btn " onClick={(emailValidation) => props.onFormSwitch('register')}>Don't have an account?  <span className="semiBold"> Register here.</span></button>
        </div>
      </div>
    </>
  )
}
>>>>>>> Stashed changes
