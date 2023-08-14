import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import PeopleCard from "../components/PeopleCard";
import "../styles/people-page.css";

export const People = () => {
  let navigate = useNavigate();
  let { pageId } = useParams();
  let people = useLoaderData();
  console.log(typeof pageId);
  return (
    <>
      <div className="people-container">
        {people?.map((data, id) => (
          <PeopleCard
            key={id}
            name={data.name}
            url={data.url}
          />
        ))}
        <div className="buttons-container">
          <button
            disabled={typeof pageId === 'undefined' ? true : pageId === 'page=1' ? true : false}
            onClick={() => navigate(`/people/page=${parseInt(pageId.substring(pageId.length - 1)) - 1}`, { relative: "path" })}>
            Prev
          </button>
          <button className={pageId === `page=1` ? 'active' : typeof pageId === 'undefined' ? 'active' : ''} onClick={() => navigate(`/people/page=1`,{relative: 'path'})}>{1}</button>
          <ListButton pageId={pageId} url={'page=2'} pageNum={'2'}/>
          <ListButton pageId={pageId} url={'page=3'} pageNum={'3'}/>
          <ListButton pageId={pageId} url={'page=4'} pageNum={'4'}/>
          <ListButton pageId={pageId} url={'page=5'} pageNum={'5'}/>
          <ListButton pageId={pageId} url={'page=6'} pageNum={'6'}/>
          <ListButton pageId={pageId} url={'page=7'} pageNum={'7'}/>
          <ListButton pageId={pageId} url={'page=8'} pageNum={'8'}/>
          <ListButton pageId={pageId} url={'page=9'} pageNum={'9'}/>

          <button
            disabled={pageId === 'page=9' ? true : false}
            onClick={() => navigate(`/people/page=${parseInt(pageId.substring(pageId.length - 1)) + 1}`, { relative: "path" })}>
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
    <button className={pageId === `${url}` ? 'active' : ''} onClick={() => navigate(`/people/${url || ''}`,{relative: 'path'})}>{pageNum}</button>
  )
}