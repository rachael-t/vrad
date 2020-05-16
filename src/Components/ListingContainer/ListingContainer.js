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
            })
    }

    // filterSelectedListings(props) {
    //     console.log(this.props.match)
    // }
    // go find the listings with a area_id that matches the match.param.area_id
    

    render() {
        return (
            <h1>{this.props.match}</h1>
        )
    }

}

export default ListingContainer;
