import React, { Component } from 'react';
import ListingCard from '../ListingCard/ListingCard';
import './ListingContainer.css';

class ListingContainer extends Component {
    constructor(props) {
        super();
        this.state = {
            allListings: [],
            selectedListings: []
        }
    }

    componentDidMount() {
        fetch('https://vrad-api.herokuapp.com/api/v1/listings/')
            .then(response => response.json())
            .then(data => {
                const listingPromises = data.listings.map(listing => {
                    return {
                        address: listing.address.street,
                        areaId: listing.area_id,
                        costPerNight: listing.details.cost_per_night,
                        listingId: listing.listing_id,
                        name: listing.name,
                        numBathrooms: listing.details.baths,
                        numBedrooms: listing.details.beds,
                        uniqueFeatures: listing.details.features,
                        zipcode: listing.address.zip
                    }
                })
                return Promise.all(listingPromises)
            })
            .then(listings => {
                this.setState({ allListings: listings })
                this.filterSelectedListings()
            })
    }

// should this be under componentDidMount? We were receiving an error (saved in slack) because of this.setState which is why we moved the invocation to line 35
    filterSelectedListings() {
        const areaListings = this.state.allListings.filter(listing => {
            return listing.areaId === parseInt(this.props.match)
        })
        this.setState({ selectedListings: areaListings })
    }

    render() {
        const listingCards = this.state.selectedListings.map(listing => {
          return (
            <ListingCard
                { ... listing }
            />
          )
        });
    
        return (
          <div className='listing-container'>
          <h2 className='listing-title'>Area Listings</h2>
            { listingCards }
          </div>
        )
      }
}

export default ListingContainer;
