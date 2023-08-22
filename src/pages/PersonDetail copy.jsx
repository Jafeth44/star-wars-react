import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import "../styles/person-detail.css";
import StarshipsList from "../components/StarshipsList";
import SpeciesList from "../components/SpeciesList";
import VehiclesList from '../components/VehiclesList';

export const PersonDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { name, species, vehicles, starships, height, weigth, hairColor, skinColor, eyeColor, birthYear, gender, homeWorld, films} = useLoaderData();

  return (
    <div className="person-detail-container">
      <div className="person-detail">
        <img src={`/img/people/${id}.jpg`} alt={`${name}`} />
        <div>
          <h3>
            {name}
          </h3>
          <p>
            height: {height} cm
            <br />
            weight: {weigth} kg
            <br />
            Hair color: {hairColor}
            <br />
            Skin Color: {skinColor}
            <br />
            eye Color: {eyeColor}
            <br />
            birth year: {birthYear}
            <br />
            gender: {gender}
          </p>
          <button onClick={() => navigate(-1)}>
           ← Back
          </button>
        </div>
      </div>
        {starships?.length > 0 ? (<StarshipsList starships={starships}/>) : null}
        {vehicles?.length > 0 ? (<VehiclesList vehicles={vehicles}/>) : null}
        {species?.length > 0 ? (<SpeciesList species={species} />) : null}
    </div>
  );
};
