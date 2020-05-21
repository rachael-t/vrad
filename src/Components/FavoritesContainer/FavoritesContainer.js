import React from "react";
import ListingCard from "../ListingCard/ListingCard";
import "./FavoritesContainer.css";
import PropTypes from "prop-types";

const FavoritesContainer = (props) => {
  const favoriteCards = props.favorites.map((favorite) => {
    return <ListingCard {...favorite} />;
  });

  return (
    <div className="favorite-container">
      <h2 className="favorite-title">Your Favorite Listings</h2>
      {props.favorites.length ? (
        favoriteCards
      ) : (
        <p className="no-favs-message">
          You currently do not have any listings saved to favorites.
        </p>
      )}
    </div>
  );
};
export default FavoritesContainer;

FavoritesContainer.propTypes = {
  favorites: PropTypes.array,
};


