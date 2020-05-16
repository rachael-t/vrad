import React from 'react';
import './ListingCard.css';
// import { Link } from 'react-router-dom';

const ListingCard = (props) => {
    return (
        <div className='listing-card'>
            <h2>{props.name}</h2>
            <p>Image</p>
            {/* <Link to={`/areas/${props.id}/listings/`}> */}
                <button className='view-listing-details'>View Listing Details</button>
            {/* </Link> */}
        </div>
    )
}

export default ListingCard;