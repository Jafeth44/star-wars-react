import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import "../styles/person-detail.css";
import PlanetsList from "../components/PlanetsList";
import StarshipsList from "../components/StarshipsList";
import SpeciesList from "../components/SpeciesList";
import VehiclesList from '../components/VehiclesList';

export const PersonDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { name, planets, species, vehicles, starships } = useLoaderData();

  return (
    <div className="person-detail-container">
      <div className="person-detail">
        <img src={`/img/people/${id}.jpg`} alt={`${name}`} />
        <div>
          <h3>
            {name}
          </h3>
          <button onClick={() => navigate(-1)}>
           ← Back
          </button>
        </div>
      </div>
      {starships.length > 0 ? (<StarshipsList starships={starships}/>) : null}
       { vehicles.length > 0 ? (<VehiclesList vehicles={vehicles}/>) : null}
    </div>
  );
};
