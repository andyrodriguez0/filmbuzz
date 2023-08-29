import { useEffect, useState } from 'react';
import Modal from 'react-modal';
import './App.css';
import Error from './components/Error';
import Favorites from './components/Favorites';
import ModalContent from './components/ModalContent';
import Movies from './components/Movies';
import Search from './components/Search';

Modal.setAppElement('#root');

function App() {
  const defaultModal = {show: false, data: {poster_path: null, title: null, release_date: null, overview: null, vote_average: null}, news: []};

  const [error, setError] = useState(false);
  const [favorites, setFavorites] = useState([]);
  const [modal, setModal] = useState(defaultModal);
  const [movies, setMovies] = useState([]);
  
  async function getPopular() {
    const response = await fetch('http://localhost:3001/movies/popular');
    if (response.ok) {
      const data = await response.json();
      setMovies(data);
    } else {
      setError(true);
    }
  };

  async function getFavorites() {
    const response = await fetch('http://localhost:3001/favorites');
    if (response.ok) {
      const data = await response.json();
      setFavorites(data);
    } else {
      setError(true);
    }
  }

  async function handleFavorite(movie) {
    if (favorites.some(element => element.movieId === movie.movieId)) {
      await fetch(`http://localhost:3001/favorites/delete/${movie.movieId}`, {method: 'POST'});
    } else {
      const options = {method: 'POST', headers: {"Content-Type": "application/json"}, body: JSON.stringify(movie)}
      await fetch('http://localhost:3001/favorites/create', options);
    }
    getFavorites();
  };

  async function handleDetails(movie) {
    const response = await fetch(`http://localhost:3001/news/about-movie/${movie.title}`);
    const data = await response.json();
    setModal({show: true, data: movie, news: data});
  }

  function handleClose() {
    setModal(defaultModal);
  }

  async function handleSearch() {
    const query = document.querySelector('.query').value;
    const response = await fetch(`http://localhost:3001/movies/search?query=${query}`);
    if (response.ok) {
      const data = await response.json();
      setMovies(data);
      document.querySelector('.query').value = '';
    } else {
      setError(true);
    }
  }

  useEffect(() => {
    getPopular();
    getFavorites();
  }, [])

  if (error) {return <Error />}

  return (
    <div className="App">
      <Modal isOpen={modal.show}>
        <ModalContent data={modal.data} news={modal.news} handleClose={handleClose} />
      </Modal>
      <Search getPopular={getPopular} handleSearch={handleSearch} />
      <Movies favorites={favorites} movies={movies} handleDetails={handleDetails} handleFavorite={handleFavorite} />
      <Favorites favorites={favorites} movies={favorites} handleDetails={handleDetails} handleFavorite={handleFavorite} />
    </div>
  );
}

export default App;