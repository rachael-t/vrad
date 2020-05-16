import React, { Component } from 'react';
import './ListingCard.css';
import { Link } from 'react-router-dom';

const ListingCard = (props) => {

    return (
        <div className='listing-card'>
            <h2>{props.name}</h2>
            <img className='listing-cover-image' src={`/images/${props.listingId}_a.jpg`} alt='' />
            <Link 
                to={`/areas/${props.areaId}/listings/${props.listingId}`}
                onClick={() => props.viewListingDetails({...props})}
            >
                <button className='view-listing-details'>View Listing Details</button>
            </Link>
        </div>
    )

}


export default ListingCard;