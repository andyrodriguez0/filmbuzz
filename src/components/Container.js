import Movie from './Movie';

export default function Container({ movies, favorites, handleFavoriteClick, handleDetailsClick }) {
  return (
    <>
      {movies.map((movie, index) => {
        return (
          <Movie key={index} movie={movie} favorites={favorites} handleDetailsClick={handleDetailsClick} handleFavoriteClick={handleFavoriteClick} />
        )
      })}
    </>
  )
}
