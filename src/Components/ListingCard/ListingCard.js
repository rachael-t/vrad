import React, { Component } from "react";
import "./ListingCard.css";
import { Link } from "react-router-dom";

class ListingCard extends Component {
  constructor(props) {
    super();
    this.state = {
      wasFavorited: props.isFavorite,
    };
  }

  handleFavoriteClick = () => {
    if (this.state.wasFavorited === true) {
      this.setState({ wasFavorited: false });
      this.props.modifyFavorites({ ...this.props });
    } else {
      this.setState({ wasFavorited: true });
      this.props.modifyFavorites({ ...this.props });
    }
  };

  render() {
    return (
      <div className="listing-card">
        <h2>{this.props.name}</h2>
        <button
          onClick={() => this.handleFavoriteClick()}
          className="favorite-button"
        >
          <img
            className="heart-icon"
            alt="heart icon"
            src={
              this.state.wasFavorited === true
                ? "/heart.svg"
                : "/heart-outline.svg"
            }
          />
        </button>
        <img
          className="listing-cover-image"
          src={`/images/${this.props.listingId}_a.jpg`}
          alt=""
        />
        <Link
          to={`/areas/${this.props.areaId}/listings/${this.props.listingId}`}
          onClick={() => this.props.viewListingDetails({ ...this.props }, this.state.wasFavorited)}
        >
          <button className="view-listing-details">View Listing Details</button>
        </Link>
      </div>
    );
  }
}

export default ListingCard;
