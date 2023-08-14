import { useLoaderData, useNavigate } from "react-router-dom";
import "../styles/film-detail.css";
import PeopleList from "../components/PeopleList";
import PlanetsList from "../components/PlanetsList";
import StarshipsList from "../components/StarshipsList";
import SpeciesList from "../components/SpeciesList";
import VehiclesList from '../components/VehiclesList';

export const FilmDetail = () => {
  const navigation = useNavigate();
  const { title, director,  openingCrawl, releaseDate, url, characters, planets, starships, species, vehicles} = useLoaderData();

  return (
    <div className="film-detail-container">
      <div className="film-detail">
        <img src={`/img${url}.jpg`} alt={`${title} movie poster`} />
        <div>
          <h3>
            Star Wars: {title}
          </h3>
          <p>{openingCrawl}</p>
          <h4>Director: {director}</h4>
          <h4>Release date: {releaseDate}</h4>
          <button onClick={() => navigation(-1)}>
           ← Back
          </button>
        </div>
      </div>
      <PeopleList characters={characters}/>
      <PlanetsList planets={planets}/>
      <SpeciesList species={species}/>
      <StarshipsList starships={starships}/>
      <VehiclesList vehicles={vehicles}/>
    </div>
  );
};
