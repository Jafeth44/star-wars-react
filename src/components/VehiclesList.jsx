import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../styles/vehicles-list.css';

const VehiclesList = ({vehicles}) => {
  return (
    <div className='species-list'>
      <h3>Vehicles</h3>
      <div>
        {
          vehicles?.map((data, id) => (
            <Link key={id} to={data}>
              <img src={`/img${data}.jpg`} alt="link to vehicle"/>
            </Link>
          ))
        }
      </div>
    </div>
  )
}

VehiclesList.propTypes = {
  vehicles: PropTypes.array,
}

export default VehiclesList;