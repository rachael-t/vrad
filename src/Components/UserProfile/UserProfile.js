import React from 'react';
import './UserProfile.css';

const UserProfile = ({ name, purpose }) => {
    return (
        <div className='user-profile-container'>
            <h3>{`Hello, ${name}!`}</h3>
            <p>{`Reason for your Denver visit: ${purpose}`}</p>

        </div>
    )
}

export default UserProfile;