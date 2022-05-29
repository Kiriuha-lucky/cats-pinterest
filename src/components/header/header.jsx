import { Link, useLocation } from 'react-router-dom';
import './header.scss';

export function Header() {
  const location = useLocation().pathname;

  return (
    <header className="header">
      <nav className='header__nav'>
        <ul className="header__nav-list">
          <li className="header__nav-item">
            <Link className={`header__nav-link ${location === '/' && 'header__nav-link--active'}`} to="/">
              Все котики
            </Link>
          </li>
          <li className="header__nav-item">
            <Link className={`header__nav-link ${location === '/favorites' && 'header__nav-link--active'}`} to="/favorites">
              Любимые котики
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
