import Movie from "./Movie"

export default function Movies({ movies, favorites, handleFavorite, handleDetails }) {
  return (
    <div className="movies">
      <div className='header'>
        <h1>Movies</h1>
      </div>
      <div className="movies-container">
      {movies.map((movie, index) => {
        return (
          <Movie key={index} movie={movie} favorites={favorites} handleDetails={handleDetails} handleFavorite={handleFavorite} />
        )
      })}
      </div>
    </div>
  )
}