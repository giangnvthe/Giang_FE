import React from "react";



export default function Login() {
  return (
    <form action="#" class="sign-in-form">
      <h2 class="title">Sign in</h2>
      <div class="input-field">
        <i class="fas fa-user"></i>
        <input type="text" placeholder="Username" />
      </div>
      <div class="input-field">
        <i class="fas fa-lock"></i>
        <input type="password" placeholder="Password" />
      </div>
      <input type="submit" value="Login" class="btn solid" />
    </form>
  );
}


