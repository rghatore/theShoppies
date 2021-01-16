import './NominationListItem.scss';

function NominationListItem(props) {
  return (
    <span className="movie_nominated_card">
      <div className="movie_nominated_title_year">
        <p>{props.item.Year}</p>
        <p>{props.item.Title}</p>
      </div>
      {
        props.item &&
        <i 
          className="fa fa-minus-square fa-lg"
          onClick={props.onClick}
        >
        </i>
      }
    </span>
  )
};

export default NominationListItem;