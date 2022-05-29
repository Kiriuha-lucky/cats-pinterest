export const readFavoritesCats = () => {
  const favoritesCats = localStorage.getItem('favorites-cats');
  return favoritesCats ?? JSON.stringify({});
};

export const writeFavoritesCat = (cats) => {
  localStorage.setItem('favorites-cats', JSON.stringify(cats));
};

