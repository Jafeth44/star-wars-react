import { useParams } from 'react-router-dom';

const FilmDetail = () => {
  const {title} = useParams();

  return (
    <div className="film-detail-container">
      <h1>Movie details: {title}</h1>
    </div>
  )
}


export default FilmDetail;