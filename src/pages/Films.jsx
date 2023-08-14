import { useLoaderData } from 'react-router-dom';
import FilmsCard from "../components/FilmsCard";
import '../styles/films-page.css';

export const Films = () => {
  const films = useLoaderData();

  return (
    <div className="film-container">
      {
        films?.map((data, id) => (
          <FilmsCard
            key={id}
            title={data.title}
            director={data.director}
            epidoseID={data.episodeID}
            img={id}
            url={data.url}
          />
        ))
      }
    </div>
  );
};
