import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import "../styles/person-detail.css";
import PeopleList from '../components/PeopleList';

export const SpeciesDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const {name, classification, designation, averageHeight, skinColors, hairColors, eyeColors, averageLifespan, people} = useLoaderData();

  return (
    <div className="person-detail-container">
      <div className="person-detail">
        <img src={`/img/species/${id}.jpg`} alt={`${name}`} />
        <div>
          <h3>
            {name}
          </h3>
          <p>
          classification: {classification}
            <br />
            designation: {designation}
            <br />
            average height: {averageHeight} cm
            <br />
            skin Colors: {skinColors}
            <br />
            hair Colors: {hairColors}
            <br />
            eyeColors: {eyeColors}
            <br />
            averageLifespan: {averageLifespan} years
          </p>
          <button onClick={() => navigate(-1)}>
           ← Back
          </button>
        </div>
      </div>
        {people?.length > 0 ? (<PeopleList characters={people}/>) : null}
    </div>
  );
};
