import React from 'react';
import './UserProfile.css';
import PropTypes from 'prop-types';

const UserProfile = ({ name, purpose }) => {
    return (
        <div className='user-profile-container'>
            <h3>{`Hello, ${name}!`}</h3>
            <p>{`Reason for your Denver visit: ${purpose}`}</p>
            <button className="user-favorites-button">
                View Favorites
            </button>
            <button className="user-logout-button">
                Log Out
            </button>
        </div>
    )
}

export default UserProfile;

UserProfile.propTypes = {
    name: PropTypes.string,
    purpose: PropTypes.string,
}