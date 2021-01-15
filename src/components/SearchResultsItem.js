import SearchResults from './SearchResults';
import './SearchResultsItem.scss';

function SearchResultsItem(props) {
  return (
    <span className="movie_info">{props.item} (2005)</span>
  )
}

export default SearchResultsItem;