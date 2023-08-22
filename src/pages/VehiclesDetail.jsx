import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import "../styles/person-detail.css";
import PeopleList from "../components/PeopleList";

export const VehiclesDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const {name, model, manufacturer, costInCredits, lengthInUnits, maxAtmospheringSpeed, crew, passengers, pilots} = useLoaderData();

  return (
    <div className="person-detail-container">
      <div className="person-detail">
        <img src={`/img/vehicles/${id}.jpg`} alt={`${name}`} />
        <div>
          <h3>
            {name}
          </h3>
          <p>
          model: {model}
            <br />
            manufacturer: {manufacturer}
            <br />
            cost In Credits: {costInCredits}
            <br />
            length: {lengthInUnits}
            <br />
            max Atmosphering Speed: {maxAtmospheringSpeed}
            <br />
            crew: {crew}
            <br />
            passengers: {passengers}
          </p>
          <button onClick={() => navigate(-1)}>
           ← Back
          </button>
        </div>
      </div>
      {pilots?.length > 0 ? (<PeopleList characters={pilots}/>) : null}
    </div>
  );
};
