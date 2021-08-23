import { useState } from "react";
import { Avatar } from "@material-ui/core";
import PersonIcon from "@material-ui/icons/Person";
import { Link } from "react-router-dom";
import "./UserProfile.css";

function UserProfile(props) {
  const { getUserData } = props;
  const userData = getUserData("userData");

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  function handleAvatarClick() {
    setIsDropdownOpen(!isDropdownOpen);
  }

  // console.log("Avatar Dropped", isDropdownOpen);

  return (
    <div className="user-profile">
      <div className="login-icon" onClick={handleAvatarClick}>
        <PersonIcon />
        <p>{userData.userName}</p>
      </div>
      {isDropdownOpen && (
        <div className="user-avatar">
          <Link to="/orders">
            <p>Orders</p>
          </Link>
          <Link to="/wishlist">
            <p>Wishlist</p>
          </Link>
          <p>Gift Cards</p>
          <p>Contact Us</p>
        </div>
      )}
    </div>
  );
}

export default UserProfile;
