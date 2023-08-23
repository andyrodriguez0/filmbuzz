export default function Search({ getPopular, handleSearch }) {
  return (
    <div className="search">
      <div>
        <h1><span className="film">film</span><span className="buzz">buzz</span></h1>
      </div>
      <div className="search-container">
        <input type='text' className="query"></input>
        <div className="buttons">
          <button onClick={handleSearch}>Search</button>
          <button onClick={getPopular}>Popular</button>
        </div>
      </div>
    </div>
  )
}