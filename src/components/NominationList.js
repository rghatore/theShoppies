import './NominationList.scss';
import NominationListItem from './NominationListItem';

function NominationList(props) {
  return (
    <ul className="nomination_list">
      {props.selected.map(movie => <NominationListItem num={movie}/>)}
    </ul>
  )
};

export default NominationList;