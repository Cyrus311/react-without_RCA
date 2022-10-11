import React, { lazy, Suspense } from "react";
import { useSelector } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Layout/Header";
import Spinner from "./components/UI/Spinner";

const Favorites = lazy(() => import("./components/Movies/Favorites"));
const Dashboard = lazy(() => import("./pages/Dashboard"));
const Detail = lazy(() => import("./pages/Detail"));

function App() {
  const favoritesIsShown = useSelector((state) => state.modal.isModalVisible);

  return (
    <Suspense fallback={<Spinner />}>
      <Router>
        <div className="container">
          {favoritesIsShown && <Favorites />}
          <Header />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/detail" element={<Detail />} />
          </Routes>
        </div>
      </Router>
    </Suspense>
  );
}

export default App;
