import './SearchResultsItem.scss';

function SearchResultsItem(props) {
  return (
    <span className="movie_info">
      <img className="poster" alt="poster" src={props.item.Poster} />
      <div className="results_title_year">
        <p>({props.item.Year})</p>
        <p>{props.item.Title}</p>
      </div>
      <i className="fa fa-plus-square fa-2x" onClick={props.onClick}></i>
    </span>
  )
}

export default SearchResultsItem;