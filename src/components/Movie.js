import popcornImage from '../assets/images/popcorn.png';

export default function Movie({ favorites, movie, handleDetails, handleFavorite }) {
  const date = new Date(movie.release_date);
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  return (
    <div className='movie'>
      <div className='movie-details'>
        <h4>{movie.title}</h4>
        <h5>{date != 'Invalid Date'
        ? `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`
        : 'No Release Date'}</h5>
        <div className='buttons'>
          <span className='details' onClick={() => handleDetails(movie)}>&#183;&#183;&#183;</span>
          <span className='star' onClick={() => handleFavorite(movie)}>
            {favorites.some(favorite => favorite.id === movie.id) ? "★" : "☆"}
          </span>
        </div>
      </div>
      <img className='small-poster' src={movie.poster_path != null
        ? `https://image.tmdb.org/t/p/original/${movie.poster_path}`
        : popcornImage}></img>
    </div>
  )
}