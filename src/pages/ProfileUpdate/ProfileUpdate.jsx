import React from "react";
import "./ProfileUpdate.css";
import { avator_icon, profile_icon } from "../../assets";

function ProfileUpdate() {
  return (
    <div className="profile">
      <div className="profile-container">
        <form>
          <h3>Profile details</h3>
          <label htmlFor="avatar">
            <input id="avatar" type="file" accept=".png, .jpg, .jpeg" hidden />
            <img src={avator_icon} alt="" />
            upload profile image
          </label>
          <input placeholder="Your name" type="text" required />
          <textarea placeholder="Write profile bio" required></textarea>
          <button type="submit">Save</button>
        </form>
        <img className="profile-pic" src={profile_icon} alt="" />
      </div>
    </div>
  );
}

export default ProfileUpdate;
