import './NominationListItem.scss';

function NominationListItem(props) {
  return (
    <div className="movie_nominated_card">
      <p>Movie {props.num}</p>
    </div>
  )
};

export default NominationListItem;