import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

const PeopleCard = ({name, url}) => {
  const navigate = useNavigate();

  return (
    <div className="people-card" onClick={() => {navigate(url+'/data', {relative: "path"})}}>
      <img src={`/img/${url}.jpg`} alt={name} />
      <h3>{name}</h3>
    </div>
  )
};

PeopleCard.propTypes = {
  name: PropTypes.string,
  url: PropTypes.string,
}

export default PeopleCard;