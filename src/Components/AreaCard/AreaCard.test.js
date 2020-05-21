import React from "react";
import { render, fireEvent } from "@testing-library/react";
import AreaCard from "./AreaCard";
import "@testing-library/jest-dom";
import { BrowserRouter, Router } from "react-router-dom";
import { createMemoryHistory } from "history";

describe("AreaCard", () => {
  it("Should render the area card", () => {
    // const history = createMemoryHistory();
    const { getByText } = render(
      <BrowserRouter>
        <AreaCard
          about={"great area"}
          id={303}
          key={303}
          listings={[]}
          name={"River North"}
          shortName={"RiNo"}
        />
      </BrowserRouter>
    );
    expect(getByText("great area")).toBeInTheDocument();
    expect(getByText("River North")).toBeInTheDocument();
    expect(getByText("Also known as RiNo")).toBeInTheDocument();
  });

  it("Should render listings on click", () => {
    const history = createMemoryHistory();
    const { getByRole, getByText } = render(
      <Router history={history}>
        <AreaCard
          about={"great area"}
          id={303}
          key={303}
          listings={[]}
          name={"River North"}
          shortName={"RiNo"}
        />
      </Router>
    );

    const link = getByRole("link", { name: "View Listings" });
    expect(getByText("great area")).toBeInTheDocument();
    fireEvent.click(link);
    expect(history.location.pathname).toBe('/areas/303/listings/')
  });
});

