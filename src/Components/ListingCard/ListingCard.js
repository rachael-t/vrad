import React, { Component } from "react";
import "./ListingCard.css";
import { Link } from "react-router-dom";

class ListingCard extends Component {
  constructor(props) {
    super();
    this.state = {
      isFavorite: props.isFavorite,
    };
  }

  handleFavoriteClick = () => {
    if (this.state.isFavorite === true) {
      this.setState({ isFavorite: false });
      this.props.modifyFavorites({ ...this.props });
    } else {
      this.setState({ isFavorite: true });
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
            alt=""
            src={
              this.state.isFavorite === true
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
          onClick={() => this.props.viewListingDetails({ ...this.props })}
        >
          <button className="view-listing-details">View Listing Details</button>
        </Link>
      </div>
    );
  }
}

export default ListingCard;
