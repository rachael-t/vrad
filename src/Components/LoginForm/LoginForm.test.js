import React from "react";
import { render, fireEvent } from "@testing-library/react";
import LoginForm from "./LoginForm";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";

describe("LoginForm", () => {
  it("Should render a login form", () => {
    const router = (
      <BrowserRouter>
        {" "}
        <LoginForm />{" "}
      </BrowserRouter>
    );
    const { getByText } = render(router);

    expect(getByText("Welcome, please log in!")).toBeInTheDocument();
    expect(getByText("What brings you to Denver?")).toBeInTheDocument();
    expect(getByText("Log In")).toBeInTheDocument();
  });

  it("Should invoke loginUser method when input fields are complete and button is clicked", () => {
    const mockLoginUser = jest.fn();
    const { getByText, getByPlaceholderText } = render(
      <BrowserRouter>
        <LoginForm loginUser={mockLoginUser} />
      </BrowserRouter>
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
    expect(mockLoginUser).toHaveBeenCalledWith("Olivia", "business");
  });

  it("Should display an error message if a user tries to log in without all forms completed", () => {
    const { getByText, getByPlaceholderText } = render(
      <BrowserRouter>
        <LoginForm />
      </BrowserRouter>
    );

    fireEvent.change(getByPlaceholderText("name"), { target: { value: "" } });
    fireEvent.change(getByPlaceholderText("email"), {
      target: { value: "olivia@turing.com" },
    });
    fireEvent.change(getByPlaceholderText("select your purpose"), {
      target: { value: "business" },
    });
    fireEvent.click(getByText("Log In"));
    expect(getByText("Please complete all items.")).toBeInTheDocument();
  });
});
