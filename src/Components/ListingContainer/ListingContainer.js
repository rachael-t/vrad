import React, { Component } from 'react';
import ListingCard from '../ListingCard/ListingCard';
import './ListingContainer.css';

class ListingContainer extends Component {
    constructor() {
        super();
        this.state = {
            listings: []
        }
    }

    componentDidMount() {
    // receive listings as a prop that came from AreaCard
    // map over that array and then fetch each listing's details
    // put their info in listings 
    }

    

    render() {
        return (
            <h1>Listings</h1>
        )
    }

}

export default ListingContainer;
