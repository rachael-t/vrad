import React from "react";
import { render } from "@testing-library/react";
import FavoritesContainer from "./FavoritesContainer";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

describe("FavoritesContainer", () => {
  it("Should render the favorites container", () => {
    const { getByText } = render(
      <BrowserRouter>
        <FavoritesContainer
          favorites={[
            {
              address: "2245 Blake St",
              areaId: 590,
              costPerNight: 400,
              isFavorite: true,
              key: 90,
              listingId: 90,
              name: "Loft Living in RiNo",
              numBathrooms: 3,
              numBedrooms: 2,
              uniqueFeatures: ["modern loft design", "natural light"],
              zipcode: 80205,
            },
          ]}
        />
      </BrowserRouter>
    );
    expect(getByText("Your Favorite Listings")).toBeInTheDocument();
  });

  it("Should show a message if there are no favorite listings", () => {
    const { getByText } = render(
      <BrowserRouter>
        <FavoritesContainer favorites={[]} />
      </BrowserRouter>
    );
    expect(
      getByText("You currently do not have any listings saved to favorites.")
    ).toBeInTheDocument();
  });
});
