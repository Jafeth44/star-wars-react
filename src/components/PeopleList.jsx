import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../styles/people-list.css';

const PeopleList = ({characters}) => {
  return (
    <div className='people-list'>
      <h3>Characters</h3>
      <div>
        {
          characters?.map((data, id) => (
            <Link key={id} to={data}>
              <img src={`/img${data}.jpg`} alt="link to character"/>
            </Link>
          ))
        }
      </div>
    </div>
  )
}

PeopleList.propTypes = {
  characters: PropTypes.array,
}

export default PeopleList;