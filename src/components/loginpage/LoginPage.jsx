import React, { useState } from "react";
import "./loginpage.css";
import image from "../../assets/formimg.png";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [user, setUser] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    localStorage.setItem("user", JSON.stringify(user));
    navigate("/user");
  };

  return (
    <div className="container">
      <div className="formcontainer">
        <h3>ARTERNS</h3>
        <div className="form">
          <h5>Login</h5>
          <form onSubmit={handleSubmit}>
            <div className="formtext">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                onChange={(e) => setUser({ ...user, email: e.target.value })}
              />
            </div>
            <div className="formtext">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                onChange={(e) => setUser({ ...user, password: e.target.value })}
              />
            </div>
            <button className="loginbtn" type="submit">
              LOGIN
            </button>
          </form>
        </div>
        <div className="foot">
          <p>Arterns Technologies Privated Limited</p>
        </div>
      </div>
      <div className="imagecontainer">
        <img src={image} alt="logo" />
      </div>
    </div>
  );
};

export default LoginPage;
