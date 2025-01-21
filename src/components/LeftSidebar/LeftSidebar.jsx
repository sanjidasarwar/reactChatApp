import React from "react";
import "./LeftSidebar.css";
import { logo, search, profile_img, three_dot } from "../../assets";

function LeftSidebar() {
  return (
    <div className="ls hidden">
      <div className="ls-top">
        <div className="ls-nav">
          <img className="logo" src={logo} alt="" />
          <div className="menu">
            <img src={three_dot} alt="" />
            <div className="sub-menu">
              <p>Edit Profile</p>
              <hr />
              <p>Logout</p>
            </div>
          </div>
        </div>
        <div className="ls-search">
          <img src={search} alt="" />
          <input type="text" placeholder="Search.." />
        </div>
      </div>
      <div className="ls-list">
        <div className="friends ">
          <img src={profile_img} alt="" />
          <div>
            <p>GreatStack</p>
            <span></span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSidebar;
