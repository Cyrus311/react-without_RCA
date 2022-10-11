//! Get all favorites
const getAllFavorite = () => {
  const favorites = JSON.parse(localStorage.getItem("favorites"));
  if (!favorites) return [];

  return favorites;
};

//! Add favorite
const addFavorite = (data) => {
  if (!data) return false;
  let favorites = JSON.parse(localStorage.getItem("favorites"));
  if (favorites) {
    if (favorites.find((x) => x.id === data.id)) return false;

    favorites.push(data);
    localStorage.setItem("favorites", JSON.stringify(favorites));
  } else {
    localStorage.setItem("favorites", JSON.stringify([data]));
  }

  return true;
};

//! Remove favorite
const deleteFavorite = (id) => {
  if (!id) return;
  let favorites = JSON.parse(localStorage.getItem("favorites"));
  if (favorites) {
    favorites = favorites.filter((x) => x.id !== id);
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }

  return id;
};

const authService = {
  getAllFavorite,
  addFavorite,
  deleteFavorite
};

export default authService;
