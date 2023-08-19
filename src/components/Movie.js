import popcornImage from '../assets/images/popcorn.png';

export default function Movie({ movie, favorites, handleDetailsClick, handleFavoriteClick }) {
  return (
    <div className='movie'>
      <div>
        <h3>{movie.title}</h3>
        <h4>{movie.release_date}</h4>
        <div className='buttons'>
          <span className='details' onClick={() => handleDetailsClick(movie)}>Details</span>
          <span className='star' onClick={() => handleFavoriteClick(movie)}>
          {favorites.some(favorite=> favorite.id === movie.id) ? "★" : "☆"}
          </span>
        </div>
      </div>
      <img className='small-poster' src={movie.poster_path != null
        ? 'https://image.tmdb.org/t/p/original/' + movie.poster_path
        : popcornImage}></img>
    </div>
  )
}
