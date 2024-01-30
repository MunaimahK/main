import Placeholder from "./user.png";
import "./Dashboard.css";
import React from "react";

const Dashboard = () => {
  return (
    <nav>
      <a href="/" className="logo">
        <svg
          id="logo-38"
          width="78"
          height="32"
          viewBox="0 0 78 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {" "}
          <path
            d="M55.5 0H77.5L58.5 32H36.5L55.5 0Z"
            class="ccustom"
            fill="#FF7A00"
          ></path>{" "}
          <path
            d="M35.5 0H51.5L32.5 32H16.5L35.5 0Z"
            class="ccompli1"
            fill="#FF9736"
          ></path>{" "}
          <path
            d="M19.5 0H31.5L12.5 32H0.5L19.5 0Z"
            class="ccompli2"
            fill="#FFBC7D"
          ></path>{" "}
        </svg>
      </a>
      <div>
        <ul className="nav-bar">
          <li>
            <a className="active" href="/about">
              About
            </a>
          </li>
          <li>
            <a href="/">Clubs</a>
          </li>
          <li>
            <a href="/">FAQ</a>
          </li>
          <li>
            <a href="/admin/login">Admin</a>
          </li>
          <li>
            <img className="profile-img" src={Placeholder} alt="c1-logo"></img>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Dashboard;