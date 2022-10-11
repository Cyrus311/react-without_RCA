import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { store } from "../store";
import { render } from "@testing-library/react";
import Detail from "./Detail";
import { createMemoryHistory } from "history";

describe("<Detail />", () => {
  // beforeEach(() =>
  //   render(
  //     <Provider store={store}>
  //       <Router>
  //         <Detail categoryId={18} />
  //       </Router>
  //     </Provider>
  //   )
  // );

  //TODO: axios mock test needs further work, return here later
  test.skip("should renders Home", () => {
    const history = createMemoryHistory();
    const state = { categoryId: 18, movieId: 503 };
    history.push("/detail", state);

    const screen = render(
      <Provider store={store}>
        <Router history={history}>
          <Detail categoryId={18} />
        </Router>
      </Provider>
    );

    const homeElement = screen.getByRole("img");
    expect(homeElement).toBeInTheDocument();
  });
});
