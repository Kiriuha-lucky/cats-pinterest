import { useState } from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { Context } from '../../services/context';
import { readFavoritesCats } from '../../services/favorites';
import { FavoritesPage } from '../favorites-page/favorites-page';
import { Main } from '../main/main';
import { NotFound } from '../not-found/not-found';
import './app.scss';


function App() {
  const [favoritesCats, setFavoritesCats] = useState(JSON.parse(readFavoritesCats()));

  return (
    <Context.Provider value={[favoritesCats, setFavoritesCats]}>
      <BrowserRouter>
        <Routes>
          <Route
            path='https://kiriuha-lucky.github.io/cats-pinterest/'
            element={<Main />}
          />
          <Route
            path='https://kiriuha-lucky.github.io/cats-pinterest/favorites'
            element={<FavoritesPage />}
          />
          <Route
            path='https://kiriuha-lucky.github.io/cats-pinterest/*'
            element={<NotFound />}
          />
        </Routes>
      </BrowserRouter>
    </Context.Provider>
  );
}

export default App
