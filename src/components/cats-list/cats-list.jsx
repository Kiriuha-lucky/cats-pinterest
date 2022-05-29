import { CatsItem } from '../cats-item/cats-item';
import './cats-list.scss';

export function CatsList({ cats }) {
  return (
    <ul className="cats__list">
      {cats.map((cat) => (
        <CatsItem key={`${Math.floor(Math.random()*100)}${cat.id}`} cat={cat} />
      ))}
    </ul>
  );
}
