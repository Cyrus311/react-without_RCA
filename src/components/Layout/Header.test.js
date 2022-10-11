import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { store } from "../../store";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Header from "./Header";

describe("<Header />", () => {
  beforeEach(() =>
    render(
      <Provider store={store}>
        <Router>
          <Header />
        </Router>
      </Provider>
    )
  );

  test("should renders Home", () => {
    const homeElement = screen.getByText("Home", { exact: true });
    expect(homeElement).toBeInTheDocument();
  });

  test("should renders Favorites", () => {
    const buttonElement = screen.getByText("Favorites", { exact: true });
    expect(buttonElement).toBeInTheDocument();
  });

  test("should initially set modal visibility to false", () => {
    const state = store.getState().modal;
    expect(state.isModalVisible).toEqual(false);
  });

  test("should modal.modal after Favorites button clicked", async () => {
    await waitFor(() => {
      const buttonElement = screen.getByText("Favorites");
      const state = store.getState().modal;
      userEvent.click(buttonElement);
      expect(state.isModalVisible).toEqual(true);
    });
  });
});
