import React, { Component } from "react";
import "./App.css";
import { Route } from "react-router-dom";
import LoginForm from "../LoginForm/LoginForm";
import UserProfile from "../UserProfile/UserProfile";
import AreaContainer from "../AreaContainer/AreaContainer";
import ListingContainer from "../ListingContainer/ListingContainer";
import ListingDetail from "../ListingDetail/ListingDetail";
import FavoritesContainer from "../FavoritesContainer/FavoritesContainer";

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: null,
      purpose: null,
      loggedIn: false,
      currentListing: "",
      favoriteListings: [],
    };
  }

  loginUser = (userName, userPurpose) => {
    this.setState({ name: userName, purpose: userPurpose, loggedIn: true });
  };

  logoutUser = () => {
    this.setState({
      name: null,
      purpose: null,
      loggedIn: false,
      currentListing: "",
      favoriteListings: [],
    });
  };

  viewListingDetails = (listingDetails) => {
    this.setState({
      currentListing: listingDetails,
    });
  };

  modifyFavorites = (listing) => {
    const newListingId = listing.listingId;
    if (
      !this.state.favoriteListings.find((favorite) => {
        return favorite.listingId === newListingId;
      })
    ) {
      listing.isFavorite = true;
      this.setState({
        favoriteListings: [...this.state.favoriteListings, listing],
      });
    } else {
      const newFavoriteState = this.state.favoriteListings.filter(
        (faveListing) => faveListing.listingId !== newListingId
      );
      console.log(newFavoriteState);
      this.setState({
        favoriteListings: newFavoriteState,
      });
      listing.isFavorite = false;
    }
  };

  render() {
    return (
      <div className="App">
        <header>
          <h1>VRAD</h1>
        </header>
        <main>
          {this.state.loggedIn ? (
            <UserProfile
              name={this.state.name}
              purpose={this.state.purpose}
              logoutUser={this.logoutUser}
              favoriteCount={this.state.favoriteListings.length}
            />
          ) : (
            ""
          )}
          <Route
            exact
            path="/"
            render={() => <LoginForm loginUser={this.loginUser} />}
          />
          <Route
            exact
            path="/areas"
            render={() => (
              <AreaContainer updateListings={this.updateListings} />
            )}
          />
          <Route
            exact
            path="/areas/:area_id/listings/"
            render={({ match }) => (
              <ListingContainer
                match={match.params.area_id}
                viewListingDetails={this.viewListingDetails}
                modifyFavorites={this.modifyFavorites}
              />
            )}
          />
          <Route
            exact
            path="/areas/:area_id/listings/:listing_id"
            render={() => (
              <ListingDetail
                listingDetails={this.state.currentListing}
                modifyFavorites={this.modifyFavorites}
              />
            )}
          />
          <Route
            exact
            path="/favorites"
            render={() => (
              <FavoritesContainer favorites={this.state.favoriteListings} />
            )}
          />
        </main>
      </div>
    );
  }
}

export default App;
