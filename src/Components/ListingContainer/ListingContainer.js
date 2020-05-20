import React, { Component } from "react";
import ListingCard from "../ListingCard/ListingCard";
import "./ListingContainer.css";
import { fetchListings } from '/Users/oliviawebster/turing/3mod/vrad/src/ApiCalls.js';

class ListingContainer extends Component {
  constructor(props) {
    super();
    this.state = {
      allListings: [],
      selectedListings: [],
    };
  }

  componentDidMount() {
    // fetch("https://vrad-api.herokuapp.com/api/v1/listings/")
    //   .then((response) => response.json())
    fetchListings()
      .then((data) => {
        const listingPromises = data.listings.map((listing) => {
          return {
            address: listing.address.street,
            areaId: listing.area_id,
            costPerNight: listing.details.cost_per_night,
            isFavorite: false,
            key: listing.listing_id,
            listingId: listing.listing_id,
            name: listing.name,
            numBathrooms: listing.details.baths,
            numBedrooms: listing.details.beds,
            uniqueFeatures: listing.details.features,
            zipcode: listing.address.zip,
          };
        });
        return Promise.all(listingPromises);
      })
      .then((listings) => {
        if (this.props.favoriteListings.length > 0) {
          let updatedListings = listings.map((listing) => {
            this.props.favoriteListings.forEach((favListing) => {
              if (favListing.listingId === listing.listingId) {
                listing.isFavorite = true;
              }
            });
            return listing;
          });
          return updatedListings;
        } else {
          return listings;
        }
      })
      .then((listingsToDisplay) => {
        this.setState({ allListings: listingsToDisplay });
        this.filterSelectedListings();
      });
  }

  filterSelectedListings() {
    const areaListings = this.state.allListings.filter((listing) => {
      return listing.areaId === parseInt(this.props.match);
    });
    this.setState({ selectedListings: areaListings });
  }

  render(props) {
    const listingCards = this.state.selectedListings.map((listing) => {
      return (
        <ListingCard
          modifyFavorites={this.props.modifyFavorites}
          viewListingDetails={this.props.viewListingDetails}
          {...listing}
        />
      );
    });

    return (
      <div className="listing-container">
        <h2 className="listing-title">Area Listings</h2>
        {listingCards}
      </div>
    );
  }
}

export default ListingContainer;
