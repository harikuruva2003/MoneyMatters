import { ProfilePageHeader } from "../ProfileBoardHeader/ProfileBoardHeader";
import { ProfilePageForm } from "../ProfilePageForm/ProfilePageForm";
import "./ProfilePage.css";
import React from "react";
export function ProfilePage() {
  return (
    <div className="profilePageHeaderAndData">
      <ProfilePageHeader />
      <ProfilePageForm />
    </div>
  );
}
