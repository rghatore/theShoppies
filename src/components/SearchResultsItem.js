import SearchResults from './SearchResults';
import './SearchResultsItem.scss';

function SearchResultsItem(props) {
  return (
    <span className="movie_info">
      {props.item.Title} ({props.item.Year})
      <img className="poster" alt="poster" src={props.item.Poster} width={50} />
    </span>
  )
}

export default SearchResultsItem;