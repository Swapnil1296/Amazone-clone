import React, {useState} from "react";
import {NavLink} from "react-router-dom";
import "./SignUp.css";
import {ToastContainer, toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignIn = () => {
  const [logData, setData] = useState({
    email: "",
    password: "",
  });
  // console.log(logData);
  //taking value from form and setting it to state hook;
  const addData = (e) => {
    const {name, value} = e.target;
    setData(() => {
      return {
        ...logData,
        [name]: value,
      };
    });
  };

  const sendData = async (e) => {
    e.preventDefault();

    const {email, password} = logData;
    console.log(email);
    try {
      const res = await fetch("http://localhost:8080/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      const data = await res.json();
      // console.log(data);

      if (res.status === 400 || !data) {
        console.log("invalid details");
        toast.error("Invalid Details 👎!", {
          position: "top-center",
        });
      } else {
        // setAccount(data);
        setData({...logData, email: "", password: ""});
        toast.success("Login Successfully done 😃!", {
          position: "top-center",
        });
      }
    } catch (error) {
      console.log("login page ka error" + error.message);
    }
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
            <form method="POST">
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
              <button className="signin_btn" onClick={sendData}>
                Continue
              </button>
            </form>
          </div>
          <div className="create_accountinfo">
            <p>New to Amazon</p>
            <NavLink to="/register">
              <button>Create your amazon account</button>
            </NavLink>
          </div>
          <ToastContainer />
        </div>
      </section>
    </>
  );
};

export default SignIn;
