import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../styles/species-list.css';

const SpeciesList = ({species}) => {
  return (
    <div className='species-list'>
      <h3>Species</h3>
      <div>
        {
          species?.map((data, id) => (
            <Link key={id} to={data}>
              <img src={`/img${data}.jpg`} alt="link to specie"/>
            </Link>
          ))
        }
      </div>
    </div>
  )
}

SpeciesList.propTypes = {
  species: PropTypes.array,
}

export default SpeciesList;