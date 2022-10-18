import React from 'react'
import "./SignUp.css"

const SignUp = (props) => {
  return (
    <div className="signUp">
        {/* <label>Username</label> */}
        <input placeholder={props.placeholder} onChange={e=>props.setFirstName(e.target.value)} />
    </div>
  )
}

export default SignUp;
