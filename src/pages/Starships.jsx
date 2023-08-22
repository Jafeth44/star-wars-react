import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import PeopleCard from "../components/PeopleCard";
import "../styles/people-page.css";

export const Starships = () => {
  let navigate = useNavigate();
  let { pageId } = useParams();
  let starships = useLoaderData();
  return (
    <>
      <div className="people-container">
        {starships?.map((data, id) => (
          <PeopleCard
            key={id}
            name={data.name}
            url={data.url}
          />
        ))}
        <div className="buttons-container">
          <button
            disabled={typeof pageId === 'undefined' ? true : pageId === 'page=1' ? true : false}
            onClick={() => navigate(`/starships/page=${parseInt(pageId.substring(pageId.length - 1)) - 1}`, { relative: "path" })}>
            Prev
          </button>
          <button className={pageId === `page=1` ? 'active' : typeof pageId === 'undefined' ? 'active' : ''} onClick={() => navigate(`/starships/page=1`,{relative: 'path'})}>{1}</button>
          <ListButton pageId={pageId} url={'page=2'} pageNum={'2'}/>
          <ListButton pageId={pageId} url={'page=3'} pageNum={'3'}/>
          <ListButton pageId={pageId} url={'page=4'} pageNum={'4'}/>
          <button
            disabled={pageId === 'page=4' ? true : false}
            onClick={() => navigate(`/starships/page=${typeof pageId === 'undefined' ? 2 : parseInt(pageId.substring(pageId.length - 1)) + 1}`, { relative: "path" })}>
            Next
          </button>
        </div>
      </div>
    </>
  );
};


let ListButton = ({pageId ,pageNum, url}) => {
  let navigate = useNavigate();
  return (
    <button className={pageId === `${url}` ? 'active' : ''} onClick={() => navigate(`/starships/${url || ''}`,{relative: 'path'})}>{pageNum}</button>
  )
}