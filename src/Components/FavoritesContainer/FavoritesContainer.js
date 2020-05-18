import React, { Component } from 'react';
import ListingCard from '../ListingCard/ListingCard';
// import ListingCard from '../ListingCard/ListingCard';
import './FavoritesContainer.css';

const FavoritesContainer = (props) => {
const favoriteCards = props.favorites.map(favorite => {
  return <ListingCard
    {...favorite}
  />
  // return favorite.listingDetails.map(detail => {
  //   return <ListingCard
  //     {...detail}
  //   />
  // })
})

// console.log(favoriteCards);
return (
  <div>
  <h2>Your Favorite Listings</h2>
  {favoriteCards}
  </div>
)

}
export default FavoritesContainer;
