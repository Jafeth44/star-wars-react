import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import "../styles/film-detail.css";

export const FilmDetail = () => {
  const { id } = useParams();
  const navigation = useNavigate();
  const { title, director,  openingCrawl, releaseDate} = useLoaderData();

  return (
    <div className="film-detail-container">
      <div className="film-detail">
        <img src={`/img/films/${id}.jpg`} alt={`${title} movie poster`} />
        <div>
          <h3>
            Star Wars: {title}
          </h3>
          <p>{openingCrawl}</p>
          <h4>Director: {director}</h4>
          <h4>Release date: {releaseDate}</h4>
          <button onClick={() => navigation("..", { relative: "path" })}>
           ← Back
          </button>
        </div>
      </div>
    </div>
  );
};
