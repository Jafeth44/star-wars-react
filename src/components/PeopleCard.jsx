import { useNavigate, useParams } from 'react-router-dom';

const PeopleCard = ({name, img, path}) => {
  const {id} = useParams();
  const navigate = useNavigate();
  return (
    <div className="people-card" onClick={() => navigate(`/people/character-profile/${id}`, {relative: "path"})}>
      <img src={`/public/img/characters/${img+1}.jpg`} alt={name} />
      <h3>{name}</h3>
    </div>
  )
};

export default PeopleCard;