import './spinner.scss';

export function Spinner() {
  return (
    <div className='spinner__wrap'>
      <h3 className="spinner__text">Загружаем котиков</h3>
      <div className="spinner__circle"></div>
      <div className="spinner__circle"></div>
      <div className="spinner__circle"></div>
    </div>
  );
}
