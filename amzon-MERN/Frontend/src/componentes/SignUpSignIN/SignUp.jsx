import React, {useState} from "react";
import {NavLink} from "react-router-dom";
import "./SignUp.css";
import {ToastContainer, toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const SignUp = () => {
  const [user, userData] = useState({
    fname: "",
    email: "",
    mobile: "",
    password: "",
    cpassword: "",
  });

  // console.log(user);
  const addData = (e) => {
    const {name, value} = e.target;
    userData(() => {
      return {
        ...user,
        [name]: value,
      };
    });
  };
  // sendign new users data to the backend connection
  const sendData = async (e) => {
    e.preventDefault();
    const {fname, email, mobile, password, cpassword} = user;

    if (fname === "") {
      toast.error("Provide Name 👎!", {
        position: "top-center",
      });
    } else if (email === "") {
      toast.error("Provide Email 👎!", {
        position: "top-center",
      });
    } else if (mobile === "") {
      toast.error("Enter Mobile Number 👎!", {
        position: "top-center",
      });
    } else if (password === "" || cpassword == "") {
      toast.error(" Fill Password  👎!", {
        position: "top-center",
      });
    }
    const res = await fetch("http://localhost:8080/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fname,
        email,
        mobile,
        password,
        cpassword,
      }),
    });

    const data = await res.json();
    // console.log(data);

    if (res.status === 422 || !data) {
      toast.error("Invalid Details 👎!", {
        position: "top-center",
      });
      console.log(Error);
    } else {
      toast.success("Registration Successfully done 😃!", {
        position: "top-center",
      }); //using tostify library for disigned alerl box
      userData({
        ...user,
        fname: "",
        email: "",
        mobile: "",
        password: "",
        cpassword: "",
      });
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
              <button className="signin_btn" onClick={sendData}>
                Continue
              </button>
              <div className="signin_info">
                <p>Already have an account?</p>
                <NavLink to="/login">SignIn</NavLink>
              </div>
            </form>
          </div>
          <ToastContainer />
        </div>
      </section>
    </>
  );
};

export default SignUp;
