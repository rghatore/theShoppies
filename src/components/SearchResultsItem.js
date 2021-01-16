import './SearchResultsItem.scss';

function SearchResultsItem(props) {
  // check to see if the movie has been nominated
  const button = (movie) => {
    // props.nominations
    return props.nominations.find(item => item.imdbID === movie.imdbID)
  }

  return (
    <span className="movie_info">
      <img className="poster" alt="poster" src={props.item.Poster} />
      <div className="results_title_year">
        <p>({props.item.Year})</p>
        <p>{props.item.Title}</p>
      </div>
      {
        !button(props.item) ?
        <i className="fa fa-plus-square fa-2x" onClick={props.onClick}></i> :
        <i className="fa fa-check-square fa-2x" ></i>
      }
    </span>
  )
}

export default SearchResultsItem;