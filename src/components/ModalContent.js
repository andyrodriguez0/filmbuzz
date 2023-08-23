import popcornImage from '../assets/images/popcorn.png';

export default function ModalContent({ data, handleClose }) {
  const date = new Date(data.release_date);
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  return (
    <div className="modal">
      <img className='large-poster' src={data.poster_path != null
        ? `https://image.tmdb.org/t/p/original/${data.poster_path}`
        : popcornImage}></img>
      <h3>{data.title}</h3>
      <h4>{date != 'Invalid Date'
        ? `Release Date: ${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`
        : 'No Release Date'}</h4>
      <h4>{data.overview}</h4>
      <h4>{data.vote_count > 0
        ? `Rating: ${data.vote_average}`
        : 'No Ratings'}</h4>
      <button onClick={handleClose}>Close</button>
    </div>
  )
}