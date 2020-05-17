import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import LoginForm from '../LoginForm/LoginForm';
import UserProfile from '../UserProfile/UserProfile';
import AreaContainer from '../AreaContainer/AreaContainer';
import ListingContainer from '../ListingContainer/ListingContainer';
import ListingDetail from '../ListingDetail/ListingDetail';
import FavoritesContainer from '../FavoritesContainer/FavoritesContainer';

class App extends Component {
  constructor() {
    super();
    this.state = {
        name: null,
        purpose: null,
        loggedIn: false,
        currentListing: '',
        favoriteListings: [],
    }
  }

  loginUser = (userName, userPurpose) => {
      this.setState (
        { name: userName,
          purpose: userPurpose,
          loggedIn: true
        }
    )
  }

  logoutUser = () => {
    this.setState (
      {
          name: null,
          purpose: null,
          loggedIn: false,
          currentListing: '',
          favoriteListings: [],
      }
    )
  }

  viewListingDetails = (listingDetails) => {
    this.setState(
      {
        currentListing: listingDetails
      }
    )
  }

  addToFavorites = (listing) => {
    //check to see if it's already favorited to avoid dups
    this.setState(
      {
        favoriteListings: [...this.state.favoriteListings, listing]
      }
    )

  }

  render() {
    return(
      <div className="App">
        <header>
          <h1>VRAD</h1>
        </header>
        <main>
        {this.state.loggedIn ? <UserProfile name={this.state.name} purpose={this.state.purpose} logoutUser={this.logoutUser} favoriteCount={this.state.favoriteListings.length}/> : ""}
        <Route
          exact
          path='/'
          render={() => <LoginForm loginUser={this.loginUser}/>}/>
        <Route
          exact
          path ='/areas'
          render={() => (<AreaContainer updateListings={this.updateListings} />)} />
        <Route
          exact
          path='/areas/:area_id/listings/'
          render={({ match }) => (<ListingContainer listings={this.state.listings} match={match.params.area_id} viewListingDetails={this.viewListingDetails}/>)}/>
        <Route
          exact
          path='/areas/:area_id/listings/:listing_id'
          render={() => (<ListingDetail listingDetails={this.state.currentListing} addToFavorites={this.addToFavorites}/>)}/>
        <Route
         exact
         path='/favorites'
         render={() => (<FavoritesContainer favorites={this.state.favoriteListings} />)} />
        </main>
      </div>
    )
  }

}

export default App;
