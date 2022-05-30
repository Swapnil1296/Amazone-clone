import React, {useState} from "react";
import {NavLink} from "react-router-dom";
import "./SignUp.css";

const SignUp = () => {
  const [user, userData] = useState({
    fname: "",
    email: "",
    mobile: "",
    password: "",
    cpassword: "",
  });

    console.log(user);
  const addData = (e) => {
    const {name, value} = e.target;
    userData(() => {
      return {
        ...user,
        [name]: value,
      };
    });
  };
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
              <h1>Create Account</h1>
              <div className="form_data">
                <label htmlFor="fname">Your Name</label>
                <input
                  type="text"
                  onChange={addData}
                  value={user.fname}
                  name="fname"
                  id="fname"
                />
              </div>
              <div className="form_data">
                <label htmlFor="email">Email</label>
                <input
                  type="text"
                  onChange={addData}
                  value={user.email}
                  name="email"
                  id="email"
                />
              </div>
              <div className="form_data">
                <label htmlFor="number">Mobile</label>
                <input
                  onChange={addData}
                  value={user.mobile}
                  type="Number"
                  name="mobile"
                  id="mobile"
                  placeholder="At leat 10 character"
                />
              </div>
              <div className="form_data">
                <label htmlFor="password">Password</label>
                <input
                  onChange={addData}
                  value={user.password}
                  type="password"
                  name="password"
                  id="password"
                  placeholder="At leat 6 character"
                />
              </div>
              <div className="form_data">
                <label htmlFor="cpassword">Password Again</label>
                <input
                  type="password"
                  onChange={addData}
                  value={user.cpassword}
                  name="cpassword"
                  id="cpassword"
                />
              </div>
              <button className="signin_btn">Continue</button>
              <div className="signin_info">
                <p>Already have an account?</p>
                <NavLink to="/login">SignIn</NavLink>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default SignUp;
