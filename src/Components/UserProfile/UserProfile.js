import React from "react";
import "./UserProfile.css";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const UserProfile = ({ name, purpose, logoutUser, favoriteCount }) => {
  return (
    <div className="user-profile-container">
      <h3>{`Hello, ${name}!`}</h3>
      <p>{`Reason for your visit to Denver: ${purpose}`}</p>
      <Link to="/favorites">
        <button className="user-favorites-button">
          {`View Favorites: ${favoriteCount}`}
        </button>
      </Link>
      <Link to="/">
        <button className="user-logout-button" onClick={logoutUser}>
          Log Out
        </button>
      </Link>
    </div>
  );
};

export default UserProfile;

UserProfile.propTypes = {
  name: PropTypes.string,
  purpose: PropTypes.string,
};
