import axios from 'axios';
import { useRef } from 'react';
import { useEffect, useState } from 'react';
import { CatsList } from '../cats-list/cats-list';
import { Header } from '../header/header';
import './main.scss';
import { Spinner } from '../spinner/spinner';

export function Main() {
  const [cats, setCats] = useState([]);
  const [isDataLoaded, setIsDataLoaded] = useState(false);
  const lastElement = useRef();
  const observer = useRef(null);

  const fetchData = async () => {
    try {
      setIsDataLoaded(true);
      const { data } = await axios.get(`https://api.thecatapi.com/v1/images/search?limit=10&size=thumb`);
      setCats([...cats, ...data]);
      setIsDataLoaded(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (isDataLoaded) return;
    if (observer.current) observer.current.disconnect();
    let callback = function (entries, observer) {
      if (entries[0].isIntersecting) {
        fetchData();
      }
    };
    observer.current = new IntersectionObserver(callback);
    observer.current.observe(lastElement.current);
  }, [isDataLoaded])



  return (
    <div className='main__wrap'>
      <Header />
      <CatsList cats={cats} />
      {isDataLoaded && <Spinner />}
      <div ref={lastElement} style={{ height: '20px', background: 'transparent' }}></div>
    </div>
  );
}
