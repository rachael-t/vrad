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
        numBathooms,
        numBedrooms,
        uniqueFeatures,
        zipcode
    } = this.props.listingDetails

    return (
      <div className={listingId}>
        <h2>{name}</h2>
        <p>Located at {address}, Denver, CO {zipcode}</p>
        <p>ADD IMAGES</p>
        <p>This rental is ${costPerNight} per night.</p>
        <p>It has {numBedrooms} bedrooms and {numBathooms} bathrooms.</p>
        <ul>Some unique features includes:</ul>
            {uniqueFeatures.map(feature => {
                return <li>{feature}</li>
            })}
        <button>Add to Favorites</button>
      </div>
    )
  }
}

export default ListingDetail;