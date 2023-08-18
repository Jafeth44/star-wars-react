import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../styles/planets-list.css';

const PlanetsList = ({planets}) => {
  if (planets) return (
    <div className='planets-list'>
      <h3>Planets</h3>
      <div>
        {
          planets?.map((data, id) => (
            <Link key={id} to={data}>
              <img src={`/img${data}.jpg`} alt="link to planets"/>
            </Link>
          ))
        }
      </div>
    </div>
  )
}

PlanetsList.propTypes = {
  planets: PropTypes.array,
}

export default PlanetsList;