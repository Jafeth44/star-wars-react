import PropTypes from 'prop-types';
import '../styles/film-card.css';

const FilmCard = ({title, epidoseID, director}) => {
  return (
    <div className="film-card">
      <h3>Title: Star Wars Epidose {epidoseID}, {title}</h3>
      <h4>Director: {director}</h4>
    </div>
  )
}

FilmCard.propTypes = {
  title: PropTypes.string,
  epidoseID: PropTypes.string,
  director: PropTypes.string,
}

export default FilmCard;