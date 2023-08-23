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
  const apiKey = '855a13a8bd82d244b0f38aad5fea55ca';
  const defaultModal = {show: false, data: {poster_path: null, title: null, release_date: null, overview: null, vote_average: null}};

  const [error, setError] = useState(false);
  const [favorites, setFavorites] = useState(localStorage.getItem("favorites") ? JSON.parse(localStorage.getItem("favorites")) : []);
  const [modal, setModal] = useState(defaultModal);
  const [movies, setMovies] = useState([]);
  
  async function getPopular() {
    const url = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`;
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      setMovies(data['results']);
    } else {
      setError(true);
    }
  };

  function handleFavorite(movie) {
    let newFavorites;
    if (!favorites.some(element => element.id === movie.id)) {
        newFavorites = favorites.slice();
        newFavorites.push(movie);
    } else {
      newFavorites = favorites.filter(element => element.id != movie.id);
    }
    setFavorites(newFavorites);
    localStorage.setItem('favorites', JSON.stringify(newFavorites));
  };

  function handleDetails(movie) {
      setModal({show: true, data: movie});
  }

  function handleClose() {
    setModal(defaultModal);
  }

  async function handleSearch() {
    setMovies([]);
    const query = document.querySelector('.query').value;
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}&language=en-US&page=1`;
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      setMovies(data['results']);
      document.querySelector('.query').value = '';
    } else {
      setError(true);
    }
  }

  useEffect(() => {
    getPopular();
  }, [])

  if (error) {return <Error />}

  return (
    <div className="App">
      <Modal isOpen={modal.show}>
        <ModalContent data={modal.data} handleClose={handleClose} />
      </Modal>
      <Search getPopular={getPopular} handleSearch={handleSearch} />
      <Movies movies={movies} favorites={favorites} handleFavorite={handleFavorite} handleDetails={handleDetails} />
      <Favorites movies={favorites} favorites={favorites} handleFavorite={handleFavorite} handleDetails={handleDetails} />
    </div>
  );
}

export default App;
