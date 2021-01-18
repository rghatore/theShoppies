import './NominationList.scss';
import NominationListItem from './NominationListItem';

function NominationList(props) {
  return (
    <ul className="nomination_list">
      {props.nominations.map(
        (movie, index) => <NominationListItem
          key={index}
          item={movie}
          onClick={() => props.remove(movie)}
          />
        )}
    </ul>
  )
};

export default NominationList;