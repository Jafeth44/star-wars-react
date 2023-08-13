import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import PeopleCard from "../components/PeopleCard";
import "../styles/people-page.css";

export const People = () => {
  let { id } = useParams();
  typeof id === 'undefined' ? id = 1 : id;
  id = parseInt(id);
  const navigate = useNavigate();
  const people = useLoaderData();

  let personNum;
  id == 1
    ? (personNum = 0)
    : id == 2
    ? (personNum = 10)
    : id == 3
    ? (personNum = 20)
    : id == 4
    ? (personNum = 30)
    : id == 5
    ? (personNum = 40)
    : id == 6
    ? (personNum = 50)
    : id == 7
    ? (personNum = 60)
    : id == 8
    ? (personNum = 70)
    : (personNum = 80);

  return (
    <>
      <div className="people-container">
        {people?.map((data, id) => (
          <PeopleCard
            img={id + personNum >= 16 ? id + personNum + 1 : id + personNum}
            key={id}
            name={data.name}
            path={id + 1}
          />
        ))}
        <div className="buttons-container">
          <button
            disabled={id === 1 ? true : false}
            onClick={() => navigate(`/people/${id - 1}`, { relative: "path" })}>
            Prev
          </button>
          <button className={id == 1 ? 'active' : ''} onClick={() => navigate(`/people/1`, { relative: "path" })}>1</button>
          <button className={id == 2 ? 'active' : ''} onClick={() => navigate(`/people/2`, { relative: "path" })}>2</button>
          <button className={id == 3 ? 'active' : ''} onClick={() => navigate(`/people/3`, { relative: "path" })}>3</button>
          <button className={id == 4 ? 'active' : ''} onClick={() => navigate(`/people/4`, { relative: "path" })}>4</button>
          <button className={id == 5 ? 'active' : ''} onClick={() => navigate(`/people/5`, { relative: "path" })}>5</button>
          <button className={id == 6 ? 'active' : ''} onClick={() => navigate(`/people/6`, { relative: "path" })}>6</button>
          <button className={id == 7 ? 'active' : ''} onClick={() => navigate(`/people/7`, { relative: "path" })}>7</button>
          <button className={id == 8 ? 'active' : ''} onClick={() => navigate(`/people/8`, { relative: "path" })}>8</button>
          <button className={id == 9 ? 'active' : ''} onClick={() => navigate(`/people/9`, { relative: "path" })}>9</button>
          <button
            disabled={id === 9 ? true : false}
            onClick={() => navigate(`/people/${id + 1}`, { relative: "path" })}>
            Next
          </button>
        </div>
      </div>
    </>
  );
};
