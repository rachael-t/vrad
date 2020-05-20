import React from "react";
import { render, fireEvent } from "@testing-library/react";
import UserProfile from "./UserProfile";
import "@testing-library/jest-dom";
import { BrowserRouter, Router } from "react-router-dom";

describe("UserProfile", () => {
  it("Should render the user profile", () => {
    const mockLogoutUser = jest.fn();
    const { getByText } = render(
      <BrowserRouter>
        <UserProfile
          name={"Olivia"}
          purpose={"business"}
          logoutUser={mockLogoutUser}
        />
      </BrowserRouter>
    );
    expect(getByText("Hello, Olivia!")).toBeInTheDocument();
    expect(
      getByText("Reason for your visit to Denver: business")
    ).toBeInTheDocument();
    expect(getByText("Log Out")).toBeInTheDocument();
  });
  it("Should invoke logoutUser when user clicks the log out button", () => {
    const mockLogoutUser = jest.fn();
    const { getByText } = render(
      <BrowserRouter>
        <UserProfile
          name={"Olivia"}
          purpose={"business"}
          logoutUser={mockLogoutUser}
        />
      </BrowserRouter>
    );
    fireEvent.click(getByText("Log Out"));
    expect(mockLogoutUser).toHaveBeenCalledTimes(1);
  });
});
