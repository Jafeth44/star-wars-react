import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import "../styles/film-detail.css";

export const PersonDetail = () => {
  const { pageId } = useParams();
  const navigation = useNavigate();
  const { name } = useLoaderData();

  console.log(useParams());
  return (
    <div className="film-detail-container">
      <div className="film-detail">
        <img src={`/img/characters/1.jpg`} alt={`${name}`} />
        <div>
          <h3>
            {name}
          </h3>
          <button onClick={() => navigation(`/people/page=${pageId}`, { relative: "path" })}>
           ← Back
          </button>
        </div>
      </div>
    </div>
  );
};