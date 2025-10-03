import { observer } from "mobx-react";
import { BottomProfile } from "../../types/types";
import "./Profile.css";
import React from "react";

interface Props {
  profile: BottomProfile;
}

const Profile=(props: Props):React.ReactElement=> {
  const { profile } = props

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

export default observer(Profile)
