import SearchResults from './SearchResults';
import './SearchResultsItem.scss';

function SearchResultsItem(props) {
  return (
    <span className="movie_info">
      <img className="poster" alt="poster" src={props.item.Poster} />
      <div className="results_title_year">
        <p>({props.item.Year})</p>
        <p>{props.item.Title}</p>
      </div>
    </span>
  )
}

export default SearchResultsItem;