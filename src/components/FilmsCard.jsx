import PropTypes from 'prop-types';


const FilmsCard = ({title, epidoseID, director, img}) => {
  return (
    <div className="film-card">
      <img src={`/public/img/films/${img+1}.jpg`} alt={`${title} movie poster`} />
      <h3>Star Wars: Epidose {epidoseID}  {title}</h3>
      <h4>Director: {director}</h4>
    </div>
  )
}

FilmsCard.propTypes = {
  title: PropTypes.string,
  epidoseID: PropTypes.string,
  director: PropTypes.string,
  img: PropTypes.string
}

export default FilmsCard;