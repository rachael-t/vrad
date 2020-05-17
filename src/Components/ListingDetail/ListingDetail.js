import React, { Component } from 'react';
import './ListingDetail.css';

class ListingDetail extends Component {
  constructor(props) {
    super();
    this.state = {
      isFavorited: false,
    }
  }

  render() {
    console.log(this.props.listingDetails)
    const {
        address,
        areaId,
        costPerNight,
        listingId,
        name,
        numBathrooms,
        numBedrooms,
        uniqueFeatures,
        zipcode
    } = this.props.listingDetails

    return (
      <div className='listing-detail-container'>
        <h2>{name}</h2>
        <p>Located at {address}, Denver, CO {zipcode}</p>
        <img className='listing-cover-image' src={`/images/${listingId}_a.jpg`} alt='' />
        <img className='listing-cover-image' src={`/images/${listingId}_b.jpg`} alt='' />
        <img className='listing-cover-image' src={`/images/${listingId}_c.jpg`} alt='' />
        <p>This rental is ${costPerNight} per night.</p>
        <p>It has {numBedrooms} bedrooms and {numBathrooms} bathrooms.</p>
        <ul>Some unique features includes:</ul>
            {uniqueFeatures.map(feature => {
                return <li>{feature}</li>
            })}
        <button onClick={() => this.props.addToFavorites({...this.props})}>Add to Favorites</button>
      </div>
    )
  }
}

export default ListingDetail;
