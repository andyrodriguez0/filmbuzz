import Movie from "./Movie"

export default function Favorites({ favorites, movies, handleDetails, handleFavorite }) {
  return (
    <div className="favorites">
      <div className='header'>
        <h1>Favorites</h1>
      </div>
      <div className="favorites-container">
        {movies.map((movie, index) =>
          <Movie key={index} favorites={favorites} movie={movie} handleDetails={handleDetails} handleFavorite={handleFavorite} />
        )}
      </div>
    </div>
  )
}