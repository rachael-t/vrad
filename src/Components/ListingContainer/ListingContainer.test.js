import React from "react";
import { render } from "@testing-library/react";
import ListingContainer from "./ListingContainer";
import "@testing-library/jest-dom";

describe("ListingContainer", () => {
  it("Should render the listing container", () => {
    const { getByText } = render(<ListingContainer />);
    expect(getByText("Area Listings")).toBeInTheDocument();
  });
});
