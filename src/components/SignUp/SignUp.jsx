import React, { useState } from 'react'
import "./SignUp.css"

const SignUp = (props) => {

  const [user, setUser] = useState({
    first_name:"",
    last_name:"",
    email:"",
    password:"",
    repeat_password:"",
  });

  const handleSubmit= (e) => {
    e.preventDefault();
    if (user.password === user.repeat_password && user.username !== '' && user.email !== '' && user.password !== '' && user.repeat_password !== '') {
        console.log(user)
      } else if (user.password !== user.repeat_password) {
        alert('The password fields must match.')
      } else {
        alert('Please fill out all required fields.')
      }
  };

  return (
    <>
    <div className="signUp">
      <div className="leftPanel">
        <div className="leftPanel__elem">
          <p>“Intelligence is like a four-wheel drive. It allows you to get stuck in more remote places..”</p>
          <div className="line"></div>
          <p>Garrison Keillor</p>
        </div>
      </div>

      <div className="mainPanel">
            <div className="mainPanel__header">
              <h1>Get started absolutely free.</h1>
              <p> Enter your details below.</p>
            </div>
            <div className="mainPanel__form">
              <form onSubmit={handleSubmit}>
                  <div className="firstName">
                      <label htmlFor="firstName" hidden>First name</label>
                      <input
                          id="first_name"
                          name="first_name"
                          type="text"
                          value={user.first_name} 
                          onChange={(e) => setUser({ ...user, first_name: e.target.value })}
                          placeholder="First name"
                          required
                        />
                  </div>

                  <div className="lastName">
                      <label htmlFor="lastName" hidden>Last name</label>
                      <input 
                          id="last_name"
                          name="last_name"
                          type="text"
                          value={user.last_name} 
                          onChange={(e) => setUser({ ...user, last_name: e.target.value })}
                          placeholder="Last name"
                        />
                  </div>

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

                  <div className="repeatPassword">
                      <label htmlFor="repeatPassword" hidden>Repeat password </label>
                      <input
                          id="repeat_password" 
                          name="repeat_password" 
                          type="password" 
                          value={user.repeat_password}
                          onChange={(e) => setUser({ ...user, repeat_password: e.target.value })}
                          placeholder="Repeat password"
                          required
                        />
                  </div>
                
                  <div className="button">
                      <button className="button--signUp" type="submit">Sign up</button>
                  </div>
              </form>
            </div>
        </div>
      </div>
    </>
  )
          
};

export default SignUp;
