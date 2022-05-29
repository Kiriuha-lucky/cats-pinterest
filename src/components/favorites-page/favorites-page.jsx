import { Header } from '../header/header';
import { CatsList } from '../cats-list/cats-list';
import './favorites-page.scss';
import { useContext } from 'react';
import { Context } from '../../services/context';

export function FavoritesPage() {
  const [favoritesCats] = useContext(Context);

  return (
    <>
      <Header />
      {Object.keys(favoritesCats).length === 0 ? (
        <h2 className='favorites__title'>
          В избранное не добавлено ни одного котика!
        </h2>
      ) : (
        <CatsList cats={Object.values(favoritesCats)} />
      )}
    </>
  );
}
