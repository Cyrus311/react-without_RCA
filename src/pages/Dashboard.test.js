import React from "react";
import axios from "axios";
import { act } from "react-dom/test-utils";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { store } from "../store";
import { render, screen, waitFor, cleanup } from "@testing-library/react";
import Dashboard from "./Dashboard";
// import { getMoviesByQuery } from "../services/movies/movieSlice";
import { genreList } from "../utils/genreList";
import { rest } from "msw";
import { setupServer } from "msw/node";
const movies = {
  data: [
    { id: 1, title: "Die Hard" },
    { id: 2, title: "The Godfather" }
  ]
};

// jest.mock("axios");
describe("[Dashboard]", () => {
  const server = setupServer(
    rest.get("https://api.themoviedb.org/3/search/movie", (_, res, ctx) => {
      return res(ctx.json(movies));
    })
  );

  beforeAll(() => server.listen());

  beforeEach(() =>
    act(() => {
      render(
        <Provider store={store}>
          <Router>
            <Dashboard />
          </Router>
        </Provider>
      );
    })
  );
  afterEach(() => {
    server.resetHandlers();
    cleanup();
  });

  afterAll(() => server.close());

  test("should renders all categories", async () => {
    await waitFor(() => {
      genreList.forEach((genre) => {
        expect(screen.getByText(genre.name)).toBeInTheDocument();
      });
    });
  });

  describe("Movie redux state tests", () => {
    test("should initially set movies to an empty array", () => {
      const state = store.getState().movies;
      expect(state.movies).toEqual([]);
    });

    //TODO: axios mock test needs further work, return here later
    test.skip("should set movies to api response", async () => {
      const movies = {
        data: [
          { id: 1, title: "Die Hard" },
          { id: 2, title: "The Godfather" }
        ]
      };
      // await store.dispatch(getMoviesByQuery("game"));
      await waitFor(() => {
        // axios.get.mockResolvedValue(movies);

        const state = store.getState().movies;
        expect(state.movies).toEqual(movies);
      });
    });
  });
});
