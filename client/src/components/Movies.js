import Movie from "./Movie"

export default function Movies({ favorites, movies, handleDetails, handleFavorite }) {
  return (
    <div className="movies">
      <div className='header'>
        <h1>Movies</h1>
      </div>
      <div className="movies-container">
        {movies.map((movie, _) =>
          <Movie key={movie.id} favorites={favorites} movie={movie} handleDetails={handleDetails} handleFavorite={handleFavorite} />
        )}
      </div>
    </div>
  )
}