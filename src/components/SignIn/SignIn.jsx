import React, { useState } from 'react'
import "./SignIn.css"

const SignIn = (props) => {

  const [user, setUser] = useState({
    email:"",
    password:"",
  });

  const handleSubmit= (e) => {
    e.preventDefault();
  };

  return (
    <>
    <div className="signIn">
      <div className="leftPanel">
        <div className="leftPanel__elem">
          <p>“Intelligence is like a four-wheel drive. It allows you to get stuck in more remote places..”</p>
          <div className="line"></div>
          <p>Garrison Keillor</p>
        </div>
      </div>

      <div className="mainPanel">
            <div className="mainPanel__header">
              <h1>Sign in to Classy.</h1>
              <p> Enter your details below.</p>
            </div>
            <div className="mainPanel__form">
              <form onSubmit={handleSubmit}>
                  <div className="email">
                      <label htmlFor="email" hidden>Email</label>
                      <input
                          id="email"
                          name="email"
                          type="email"
                          value={user.email} 
                          onChange={(e) => setUser({ ...user, email: e.target.value })}
                          placeholder="Email"
                          required
                      />
                  </div>

                  <div className="password">
                      <label htmlFor="password" hidden>Password </label>
                      <input 
                          id="password" 
                          name="password"
                          type="password" 
                          value={user.password}
                          onChange={(e) => setUser({ ...user, password: e.target.value })}
                          placeholder="Password"
                          required
                        />
                  </div>
                
                  <div className="button">
                      <button className="button--signIn" type="submit">Sign in</button>
                  </div>
              </form>
            </div>
        </div>
      </div>
    </>
  )
          
};

export default SignIn;
