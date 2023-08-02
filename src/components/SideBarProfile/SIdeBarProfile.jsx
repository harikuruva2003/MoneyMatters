import "./SideBarProfile.css";
import React from "react";

export function Profile({ profile }) {
  return (
    <div className="profileContainer">
      <div className="profilePicAndLogOutButton">
        <span>{profile.profilePic}</span>
      </div>
      <div className="nameAndMail">
        <span className="name">{profile.profileName}</span>
        <span className="mailID">{profile.profileMail}</span>
      </div>
      <div className="profilePicAndLogOutButton">
        <span>{profile.logOutIcon}</span>
      </div>
    </div>
  );
}
