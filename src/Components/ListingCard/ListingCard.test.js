import React from "react";
import { render, fireEvent } from "@testing-library/react";
import ListingCard from "./ListingCard";
import "@testing-library/jest-dom";
import { BrowserRouter, Router } from "react-router-dom";

describe("Listing", () => {
  it("Should render the listing card", () => {
    const mockViewListingDetails = jest.fn();
    const { getByText } = render(
      <BrowserRouter>
        <ListingCard
          address={"504 south broad st"}
          areaId={406}
          costPerNight={200}
          key={31}
          listingId={31}
          name={"hot cool party palace"}
          numBathrooms={10}
          numBedrooms={37}
          uniqueFeatures={["hot tub", "hand sanitizer"]}
          zipcode={8675309}
          viewListingDetails={mockViewListingDetails}
        />
      </BrowserRouter>
    );
    expect(getByText("hot cool party palace")).toBeInTheDocument();
    expect(getByText("View Listing Details")).toBeInTheDocument();
  });
  it("Should invoke viewListingDetails when user clicks the listing details button", () => {
    const mockViewListingDetails = jest.fn();
    const { getByText } = render(
      <BrowserRouter>
        <ListingCard
          address={"504 south broad st"}
          areaId={406}
          costPerNight={200}
          key={31}
          listingId={31}
          name={"hot cool party palace"}
          numBathrooms={10}
          numBedrooms={37}
          uniqueFeatures={["hot tub", "hand sanitizer"]}
          zipcode={8675309}
          viewListingDetails={mockViewListingDetails}
        />
      </BrowserRouter>
    );
    fireEvent.click(getByText("View Listing Details"));
    expect(mockViewListingDetails).toHaveBeenCalledTimes(1);
  });
});
