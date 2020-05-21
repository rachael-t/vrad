import React, { Component } from "react";
import "./ListingDetail.css";
import PropTypes from "prop-types";

class ListingDetail extends Component {
  constructor(props) {
    super();
    this.state = {};
  }

  render() {
    const {
      address,
      areaId,
      costPerNight,
      listingId,
      isFavorite,
      name,
      numBathrooms,
      numBedrooms,
      uniqueFeatures,
      zipcode,
    } = this.props.listingDetails;

    return (
      <div className="listing-detail-container">
        <h2 className="listing-name">{name}</h2>
        <div className="listing-images-container">
          <img
            className="listing-cover-image"
            src={`/images/${listingId}_a.jpg`}
            alt=""
          />
          <img
            className="listing-cover-image"
            src={`/images/${listingId}_b.jpg`}
            alt=""
          />
          <img
            className="listing-cover-image"
            src={`/images/${listingId}_c.jpg`}
            alt=""
          />
        </div>
        <div className="listing-info">
          <p>
            Located at {address}, Denver, CO {zipcode}
          </p>
          <p>This rental is ${costPerNight} per night.</p>
          <p>
            It has {numBedrooms} bedrooms and {numBathrooms} bathrooms.
          </p>
          <ul>Some unique features includes:</ul>
          {uniqueFeatures.map((feature) => {
            return <li>{feature}</li>;
          })}
          <button
            className="favorite-button"
            onClick={() =>
              this.props.modifyFavorites({ ...this.props.listingDetails })
            }
          >
            <img
              className="heart-icon"
              alt="heart icon"
              src={isFavorite === true ? "/heart.svg" : "/heart-outline.svg"}
            />
          </button>
        </div>
      </div>
    );
  }
}

export default ListingDetail;

ListingDetail.propTypes = {
  modifyFavorites: PropTypes.func,
  listingDetails: PropTypes.object,
};
                
