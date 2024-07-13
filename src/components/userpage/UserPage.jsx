import React from "react";
import "./userpage.css";
import arrow from "../../assets/arrow.png";
import Form from "./From";
import { useNavigate } from "react-router-dom";
const UserPage = () => {
  const navigate = useNavigate();

  const moveBack = (event) => {
    navigate("/");
  };

  return (
    <div className="usercontainer">
      <nav className="navbar">
        <div className="logo">
          <h3>ARTERNS</h3>
        </div>
        <div className="usericons">
          <ion-icon name="person-circle-outline"></ion-icon>
          <ion-icon name="notifications-circle-outline"></ion-icon>
        </div>
      </nav>
      <div className="usercontent">
        <div className="usersidebar">
          <div className="usercard">
            <img
              src="https://i.pinimg.com/564x/4d/68/54/4d685433085ee11a12d30ebc011d7f28.jpg"
              alt="image"
            />
            <p>Himanshu Chauhan</p>
            <button className="cardbtn">Employee</button>
          </div>
          <div className="lists">
            <button className="listbtn">Dashboard</button>
            <button className="listbtn">Learning</button>
            <button className="listbtn">Settings</button>
            <button className="listbtn">Settings</button>
            <button className="listbtn">Settings</button>
            <button className="listbtn">Logout</button>
          </div>
        </div>
        <div className="maincontent">
          <div className="userdash">
            <div className="innernav">
              <div className="left">
                <button className="leftbtn" onClick={moveBack}>
                  <img src={arrow} alt="" />
                </button>
              </div>
              <div className="right">
                <button className="rightbtn">Personal</button>
                <button className="rightbtn">Contact</button>
                <button className="rightbtn">Job</button>
                <button className="rightbtn">Memberships</button>
              </div>
            </div>
            <div className="innercontent">
              <div className="personal">
                <span>Personal Details</span>
              </div>
              <div className="innerforn">
                <Form />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserPage;
