import React from 'react';
import './AreaCard.css';
import PropTypes from 'prop-types';



const AreaCard = (props) => {
    return (
        <div className='area-card'>
         <h2>{props.name}</h2>
         <p>{`also known as ${props.shortName}`}</p>
         <p>{props.about}</p>
         <button className='view-listings'>view listings</button>
        </div>
    )
}


export default AreaCard;

AreaCard.propTypes = {
    name: PropTypes.string,
    shortName: PropTypes.string,
    about: PropTypes.string,
    id: PropTypes.number
}
