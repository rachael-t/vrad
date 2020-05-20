import React from "react";
import { render, waitFor, debug } from "@testing-library/react";
import ListingContainer from "./ListingContainer";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";
import { fetchListings } from '../../ApiCalls';
jest.mock('../../ApiCalls.js')
const listingData = {'listings' : [{
  "listing_id": 3,
  "area_id": 590,
  "name": "Hip RiNo Party Spot",
  "address": {
    "street": "2250 Lawrence St",
    "zip": "80205"
  },
  "details": {
    "neighborhood_id": 5124122,
    "superhost": true,
    "seller_source": "91jss1",
    "beds": 3,
    "baths": 2.5,
    "cost_per_night": 420,
    "features": [
      "hot tub",
      "espresso machine"
    ]
  },
  "dev_id": "u4gh2j",
  "area": "rino",
  "db_connect": 834470
},
{
  "listing_id": 44,
  "area_id": 590,
  "name": "Lowkey Industrial Chic",
  "address": {
    "street": "2441 Broadway Ave",
    "zip": "80205"
  },
  "details": {
    "neighborhood_id": 5124122,
    "superhost": true,
    "seller_source": "91jss1",
    "beds": 1,
    "baths": 1.5,
    "cost_per_night": 220,
    "features": [
      "city views",
      "industrial motif",
      "rooftop"
    ]
  },
  "dev_id": "jaenku",
  "area": "rino",
  "db_connect": 694530
},
{
  "listing_id": 221,
  "area_id": 590,
  "name": "New Modern Flat in RiNo",
  "address": {
    "street": "2459 Lawrence St",
    "zip": "80205"
  },
  "details": {
    "neighborhood_id": 5124122,
    "superhost": true,
    "seller_source": "91jss1",
    "beds": 3,
    "baths": 5,
    "cost_per_night": 285,
    "features": [
      "rooftop",
      "proximity to bars/restaurants",
      "new appliances"
    ]
  },
  "dev_id": "amukct",
  "area": "rino",
  "db_connect": 872937
}
]
}

describe("ListingContainer", () => {

  it("Should render the listing container", () => {

    fetchListings.mockResolvedValueOnce(listingData)
    const { getByText, debug } = render(<MemoryRouter><ListingContainer
      favoriteListings={[]} /></MemoryRouter>);
    expect(getByText("Area Listings")).toBeInTheDocument();
  });

  it.skip('should get listing data', async() => {

    fetchListings.mockResolvedValueOnce(listingData)
    const { getByText, debug } = render(<MemoryRouter>
      <ListingContainer favoriteListings={[]} />
    </MemoryRouter>);
    debug
    const listingContainer = getByText('Area Listings');
    const listingName = await waitFor(() => getByText('New Modern Flat in RiNo'))
    expect(listingContainer).toBeInTheDocument();
    expect(listingName).toBeInTheDocument();

   })
});
