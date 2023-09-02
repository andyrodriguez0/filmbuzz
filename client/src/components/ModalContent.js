import popcornImage from '../assets/images/popcorn.png';

export default function ModalContent({ data, news, handleClose }) {
  const date = new Date(data.releaseDate);
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  return (
    <>
      <button onClick={handleClose}>Close</button>
      <div className="modal">
        <div className='modal-details'>
          <h2>Movie Details</h2>
          <img className='large-poster' alt='movie poster' src={data.posterImage !== null
            ? `https://image.tmdb.org/t/p/original/${data.posterImage}`
            : popcornImage}></img>
          <h3>{data.title}</h3>
          <h4>{JSON.stringify(date) !== 'null'
            ? `Release Date: ${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`
            : 'No Release Date'}</h4>
          <h4>{`Rating: ${data.averageRating}`}</h4>
          <p>{data.description}</p>
        </div>
        <div className='modal-news'>
          <h2>Movie News</h2>
          {news.map((element, index) => {
            return (
              <>
                <h4><a href={element.url}>{element.title}</a></h4>
                <p>{element.description}</p>
              </>
            )
          })}
        </div>
      </div>
    </>
  )
}