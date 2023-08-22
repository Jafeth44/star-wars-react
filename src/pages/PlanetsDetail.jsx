import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import "../styles/person-detail.css";
import PeopleList from '../components/PeopleList';

export const PlanetsDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const {    name, rotationPeriod, orbitalPeriod, diameter, climate, gravity, surfaceWater, population, residents} = useLoaderData();

  return (
    <div className="person-detail-container">
      <div className="person-detail">
        <img src={`/img/planets/${id}.jpg`} alt={`${name}`} />
        <div>
          <h3>
            {name}
          </h3>
          <p>
            rotation period: {rotationPeriod}
            <br />
            orbital period: {orbitalPeriod}
            <br />
            diameter: {diameter}
            <br />
            climate: {climate}
            <br />
            gravity: {gravity}
            <br />
            surface water: {surfaceWater}
            <br />
            population: {population}
          </p>
          <button onClick={() => navigate(-1)}>
           ← Back
          </button>
        </div>
      </div>
        {residents?.length > 0 ? (<PeopleList characters={residents}/>): null}
    </div>
  );
};
