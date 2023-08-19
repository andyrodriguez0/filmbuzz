import axios from "axios";
import { useEffect, useState } from 'react';
import './App.css';
import Container from './components/Container';
import Modal from 'react-modal';

Modal.setAppElement('#root');

function App() {
  const [movies, setMovies] = useState([]);
  const [favorites, setFavorites] = useState(localStorage.getItem("favorites") ? JSON.parse(localStorage.getItem("favorites")) : []);
  const [modal, setModal] = useState({show: false, data: null});

  async function getMovies() {
    const response = await axios.get('https://api.themoviedb.org/3/movie/popular?api_key=855a13a8bd82d244b0f38aad5fea55ca&language=en-US&page=1');
    const data = response.data;
    setMovies(data['results']);
  }

  function handleFavoriteClick(movie) {
    if (!favorites.includes(movie)) {
        let new_favorites = favorites.slice();
        new_favorites.push(movie);
        setFavorites(new_favorites);
        localStorage.setItem('favorites', JSON.stringify(new_favorites));
    } else {
        let new_favorites = favorites.filter(element => element != movie);
        setFavorites(new_favorites);
        localStorage.setItem('favorites', JSON.stringify(new_favorites));
    }
  }

  function handleDetailsClick(movie) {
      setModal({show: true, data: movie});
  }

  function handleClose() {
    setModal({show: false, data: null});
  }

  async function handleSearch() {
    const query = document.querySelector('.search').value;
    document.querySelector('.search').value = '';
    const url = 'https://api.themoviedb.org/3/search/movie?api_key=855a13a8bd82d244b0f38aad5fea55ca&query=' + query + '&language=en-US&page=1';
    const response = await axios.get(url);
    const data = response.data;
    setMovies(data['results']);
    const response1 = await axios.get('https://api.themoviedb.org/3/configuration?api_key=855a13a8bd82d244b0f38aad5fea55ca');
    const data1 = response.data;
    console.log(data1)
  }

  useEffect(() => {
    getMovies();
  }, [])

  return (
    <div className="App">
      {modal.show && modal.data &&
        <Modal isOpen={modal.show}>
          <div className="modal">
            <img className='large-poster' src={'https://image.tmdb.org/t/p/w500/' + modal.data.poster_path}></img>
            <h3>{modal.data.title}</h3>
            <h4>Release Date: {modal.data.release_date}</h4>
            <h4>Description: {modal.data.overview}</h4>
            <h4>Rating: {modal.data.vote_average}</h4>
            <button onClick={handleClose}>Close</button>
          </div>
        </Modal>}
      <div className="search-container">
        <input type='text' className="search"></input>
        <button onClick={handleSearch}>Search</button>
        <button onClick={getMovies}>Popular</button>
      </div>
      <div className="movies">
        <div className='header'>
            <h1>Movies</h1>
        </div>
        <div className="movies-container">
          <Container movies={movies} favorites={favorites} handleFavoriteClick={handleFavoriteClick} handleDetailsClick={handleDetailsClick} />
        </div>
      </div>
      <div className="favorites">
        <div className="header">
            <h1>Favorites</h1>
        </div>
        <div className="favorites-container">
          <Container movies={favorites} favorites={favorites} handleFavoriteClick={handleFavoriteClick} handleDetailsClick={handleDetailsClick} />
        </div>
      </div>
    </div>
  );
}

export default App;
