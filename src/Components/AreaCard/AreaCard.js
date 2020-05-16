import React from 'react';
import './AreaCard.css';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const AreaCard = (props) => {
    return (
        <div className='area-card'>
            <h2>{props.name}</h2>
            <p>{`Also known as ${props.shortName}`}</p>
            <p>{props.about}</p>
            <Link to={`/areas/${props.id}/listings/`}>
                <button className='view-listings'>View Listings</button>
            </Link>
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
