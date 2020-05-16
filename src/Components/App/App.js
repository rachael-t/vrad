import React, { Component } from 'react';
import './App.css';
import { Route, NavLink } from 'react-router-dom';
import LoginForm from '../LoginForm/LoginForm';
import UserProfile from '../UserProfile/UserProfile';
import AreaContainer from '../AreaContainer/AreaContainer';
import ListingContainer from '../ListingContainer/ListingContainer';
import ListingDetail from '../ListingDetail/ListingDetail';

class App extends Component {
  constructor() {
    super();
    this.state = {
        name: null,
        purpose: null,
        loggedIn: false,
        currentListing: '',
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

  render() {
    return(
      <div className="App">
        <header>
          <h1>VRAD</h1>
        </header>
        <main>
        {this.state.loggedIn ? <UserProfile name={this.state.name} purpose={this.state.purpose} logoutUser={this.logoutUser}/> : ""}
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
          render={() => (<ListingDetail listingDetails={this.state.currentListing}/>)}/>
        </main>
      </div>
    )
  }

}

export default App;
