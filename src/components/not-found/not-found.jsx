import { Link } from 'react-router-dom';
import './not-found.scss';

export function NotFound() {
  return (
    <div className="not-found">
      <h1 className="not-found__title">404 NOT FOUND</h1>
      <Link className="not-found__link" to='/'>Вернуться ко всем котикам</Link>
    </div>
  );
}
