import './NominationList.scss';
import NominationListItem from './NominationListItem';

function NominationList(props) {
  return (
    <ul className="nomination_list">
      {props.nominations.map(
        movie => <NominationListItem
          item={movie}
          onClick={() => props.remove(movie)}
          />
        )}
    </ul>
  )
};

export default NominationList;