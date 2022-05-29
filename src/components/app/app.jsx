import { useState } from 'react';
import { Route, HashRouter, Routes } from 'react-router-dom';
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
      <HashRouter>
        <Routes>
          <Route
            path='/'
            element={<Main />}
          />
          <Route
            path='/favorites'
            element={<FavoritesPage />}
          />
          <Route
            path='*'
            element={<NotFound />}
          />
        </Routes>
      </HashRouter>
    </Context.Provider>
  );
}

export default App
