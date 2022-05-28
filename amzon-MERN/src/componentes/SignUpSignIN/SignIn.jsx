import React, { useState } from "react";
import {NavLink} from "react-router-dom";
import "./SignUp.css";

const SignIn = () => {

    const [logData, setData] = useState({
        email: "",
        password:"",

    })
    console.log(logData)
    const addData = (e) => {
        const { name, value } = e.target;
        setData(() => {
            return {
                ...logData,
                [name]:value,
            }
        })
}

  return (
    <>
      <section>
        <div className="sign_container">
          <div className="sign_header">
            <img
              src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
              alt="amzoneLogo"
            />
          </div>
          <div className="sign_form">
            <form>
              <h1>Sign-In</h1>
              <div className="form_data">
                <label htmlFor="email">Email</label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  onChange={addData}
                  value={logData.email}
                />
              </div>
              <div className="form_data">
                <label htmlFor="password">Password</label>
                <input
                  onChange={addData}
                  value={logData.password}
                  type="password"
                  name="password"
                  id="password"
                  placeholder="At leat 6 character"
                />
              </div>
              <button className="signin_btn">Continue</button>
            </form>
          </div>
          <div className="create_accountinfo">
            <p>New to Amazon</p>
            <NavLink to="/register">
              <button>Create your amazon account</button>
            </NavLink>
          </div>
        </div>
      </section>
    </>
  );
};

export default SignIn;
