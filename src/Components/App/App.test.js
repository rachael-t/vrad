import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import { BrowserRouter, MemoryRouter } from "react-router-dom";
import App from "./App";

describe("App", () => {
  it("Should render the header", () => {
    const { getByText } = render(
      <BrowserRouter>
        <App />{" "}
      </BrowserRouter>
    );
    expect(getByText("VRAD")).toBeInTheDocument();
  });

  it("Should render the login form", () => {
    const { getByText } = render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    expect(getByText("Welcome, please log in!")).toBeInTheDocument();
  });

  it("Should display areas upon a succesful login", async () => {
    const { getByText, getByPlaceholderText } = render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    fireEvent.change(getByPlaceholderText("name"), {
      target: { value: "Olivia" },
    });
    fireEvent.change(getByPlaceholderText("email"), {
      target: { value: "olivia@turing.com" },
    });
    fireEvent.change(getByPlaceholderText("select your purpose"), {
      target: { value: "business" },
    });
    fireEvent.click(getByText("Log In"));
    const neighborhood = await waitFor(() => getByText("Park Hill"));
    expect(neighborhood).toBeInTheDocument();
    expect(getByText("Denver Neighborhoods")).toBeInTheDocument();
  });

  it("Should be able to view listings for an area", async () => {
    const { getByText, getAllByText, getByPlaceholderText } = render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    fireEvent.change(getByPlaceholderText("name"), {
      target: { value: "Olivia" },
    });
    fireEvent.change(getByPlaceholderText("email"), {
      target: { value: "olivia@turing.com" },
    });
    fireEvent.change(getByPlaceholderText("select your purpose"), {
      target: { value: "business" },
    });
    fireEvent.click(getByText("Log In"));
    const viewListingsButton = await waitFor(() =>
      getAllByText("View Listings")
    );
    fireEvent.click(viewListingsButton[1]);
    const areaListings = await waitFor(() =>
      getByText("Updated Park Hill Duplex")
    );
    expect(areaListings).toBeInTheDocument();
  });

  it("Should be able to view details for a listing", async () => {
    const { getByText, getAllByText, getByPlaceholderText } = render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    fireEvent.change(getByPlaceholderText("name"), {
      target: { value: "Olivia" },
    });
    fireEvent.change(getByPlaceholderText("email"), {
      target: { value: "olivia@turing.com" },
    });
    fireEvent.change(getByPlaceholderText("select your purpose"), {
      target: { value: "business" },
    });
    fireEvent.click(getByText("Log In"));
    const viewListingsButton = await waitFor(() =>
      getAllByText("View Listings")
    );
    fireEvent.click(viewListingsButton[1]);
    const areaListings = await waitFor(() =>
      getByText("Updated Park Hill Duplex")
    );
    const viewListingDetailsButton = getAllByText("View Listing Details");
    fireEvent.click(viewListingDetailsButton[1]);
    const listingDetail = await waitFor(() =>
      getByText("This rental is $165 per night.")
    );
    expect(listingDetail).toBeInTheDocument();
  });

  it("Should be able to view favorites", async () => {
    const {
      getByText,
      getAllByText,
      getByAltText,
      getByPlaceholderText,
    } = render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    fireEvent.change(getByPlaceholderText("name"), {
      target: { value: "Olivia" },
    });
    fireEvent.change(getByPlaceholderText("email"), {
      target: { value: "olivia@turing.com" },
    });
    fireEvent.change(getByPlaceholderText("select your purpose"), {
      target: { value: "business" },
    });
    fireEvent.click(getByText("Log In"));
    const viewListingsButton = await waitFor(() =>
      getAllByText("View Listings")
    );
    fireEvent.click(viewListingsButton[1]);
    const areaListings = await waitFor(() =>
      getByText("Updated Park Hill Duplex")
    );
    const viewListingDetailsButton = getAllByText("View Listing Details");
    fireEvent.click(viewListingDetailsButton[1]);
    const listingDetail = await waitFor(() =>
      getByText("This rental is $165 per night.")
    );
    const favoriteButton = getByAltText("heart icon");
    fireEvent.click(favoriteButton);
    const viewFavoritesButton = await waitFor(() =>
      getByText("View Favorites: 1")
    );
    fireEvent.click(viewFavoritesButton);
    const favoriteListing = await waitFor(() =>
      getByText("Updated Park Hill Duplex")
    );
    expect(favoriteListing).toBeInTheDocument();
  });

  it("Should show a message if there are no favorites", async () => {
    const {
      getByText,
      getAllByText,
      getByAltText,
      getByPlaceholderText,
    } = render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    fireEvent.change(getByPlaceholderText("name"), {
      target: { value: "Olivia" },
    });
    fireEvent.change(getByPlaceholderText("email"), {
      target: { value: "olivia@turing.com" },
    });
    fireEvent.change(getByPlaceholderText("select your purpose"), {
      target: { value: "business" },
    });
    fireEvent.click(getByText("Log In"));
    const viewListingsButton = await waitFor(() =>
      getAllByText("View Listings")
    );
    fireEvent.click(viewListingsButton[1]);
    const areaListings = await waitFor(() =>
      getByText("Updated Park Hill Duplex")
    );
    const viewListingDetailsButton = getAllByText("View Listing Details");
    fireEvent.click(viewListingDetailsButton[1]);
    const listingDetail = await waitFor(() =>
      getByText("This rental is $165 per night.")
    );
    const favoriteButton = getByAltText("heart icon");
    fireEvent.click(favoriteButton);
    const viewFavoritesButton = await waitFor(() =>
      getByText("View Favorites: 1")
    );
    fireEvent.click(viewFavoritesButton);
    const favoriteListing = await waitFor(() =>
      getByText("Updated Park Hill Duplex")
    );
    const cardFavoriteButton = getByAltText("heart icon");
    fireEvent.click(cardFavoriteButton);
    const noFavoriteMessage = await waitFor(() =>
      getByText("You currently do not have any listings saved to favorites.")
    );
    expect(noFavoriteMessage).toBeInTheDocument();
  });
});
