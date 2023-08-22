import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../styles/starships-list.css';

const StarshipsList = ({starships}) => {
  if (starships) return (
    <div className='starships-list'>
      <h3>Starships</h3>
      <div>
        {
          starships?.map((data, id) => (
            <Link key={id} to={data+'/data'}>
              <img src={`/img${data}.jpg`} alt="link to starship"/>
            </Link>
          ))
        }
      </div>
    </div>
  )
}

StarshipsList.propTypes = {
  starships: PropTypes.array,
}

export default StarshipsList;