import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';


const FilmsCard = ({title, epidoseID, director, img, url}) => {
  const navigate = useNavigate();
  return (
    <div className="film-card" onClick={() => navigate(url, {relative: 'path'})}>
      <img src={`/public/img/films/${img+1}.jpg`} alt={`${title} movie poster`} />
      <h3>Star Wars: Epidose {epidoseID}  {title}</h3>
      <h4>Director: {director}</h4>
    </div>
  )
}

FilmsCard.propTypes = {
  title: PropTypes.string,
  epidoseID: PropTypes.number,
  director: PropTypes.string,
  img: PropTypes.number,
  url: PropTypes.string,
}

export default FilmsCard;