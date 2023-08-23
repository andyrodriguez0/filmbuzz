import Movie from "./Movie"

export default function Favorites({ movies, favorites, handleFavorite, handleDetails }) {
  return (
    <div className="favorites">
      <div className='header'>
        <h1>Favorites</h1>
      </div>
      <div className="favorites-container">
      {movies.map((movie, index) => {
        return (
          <Movie key={index} movie={movie} favorites={favorites} handleDetails={handleDetails} handleFavorite={handleFavorite} />
        )
      })}
      </div>
    </div>
  )
}