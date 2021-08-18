import { useState } from "react";
import { Avatar } from "@material-ui/core";
import "./UserProfile.css";

function UserProfile(props) {
  const { getUserData } = props;
  const userData = getUserData("userData");

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  function handleAvatarClick() {
    setIsDropdownOpen(!isDropdownOpen);
  }

  console.log("Avatar Dropped", isDropdownOpen);

  return (
    <div className="user-profile">
      <Avatar onClick={handleAvatarClick} />
      {isDropdownOpen && (
        <div className="user-avatar">
          <p>{userData.userEmail}</p>
          <p>{userData.userName}</p>
        </div>
      )}
    </div>
  );
}

export default UserProfile;
