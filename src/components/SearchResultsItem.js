import './SearchResultsItem.scss';

function SearchResultsItem(props) {
  // check to see if the movie has been nominated
  const button = (movie) => {
    // props.nominations
    return props.nominations.find(item => item.imdbID === movie.imdbID)
  }

  const total = () => {
    if (props.total === 5) {
      return <i className="fa fa-square-o" ></i>
    } else {
      return <i className="fa fa-plus-square" onClick={props.onClick}></i>
    }
  }

  // poster not found
  const poster = (address) => {
    if (address === "N/A") {
      return (
        <span className="poster">
          <i className="fa fa-photo fa-2x"></i>
          <p>Poster not found</p>
        </span>
      )
    } else {
      return <img className="poster" alt="poster" src={address} />
    }
  }

  return (
    <span className="movie_info">
      {/* <img className="poster" alt="poster" src={props.item.Poster} /> */}
      {poster(props.item.Poster)}
      <div className="results_title_year">
        <p>{props.item.Year}</p>
        <p>{props.item.Title}</p>
      </div>
      {
        !button(props.item) ?
        // <i className="fa fa-plus-square fa-2x" onClick={props.onClick}></i> :
        total() :
        <i className="fa fa-check-square" ></i>
      }
    </span>
  )
}

export default SearchResultsItem;