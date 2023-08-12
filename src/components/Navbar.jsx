import { Link, useMatch, useResolvedPath } from "react-router-dom";
import "../styles/nav-bar.css";

const Navbar = () => {
  return (
    <nav>
      <NavLinks name={"films"} route={"/films"}/>
      <NavLinks name={"planets"} route={"/planets"}/>
      <NavLinks name={"people"} route={"/people"}/>
      <NavLinks name={"species"} route={"/species"}/>
      <NavLinks name={"starships"} route={"/starships"}/>
      <NavLinks name={"vehicles"} route={"/vehicles"}/>
    </nav>
  );
};

function NavLinks({ name, route, fn }) {
  const resolvedPath = useResolvedPath(route);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });
  return (
    <Link to={route} className={isActive ? "active" : ""} onClick={fn}>
      {name}
    </Link>
  );
}
export default Navbar;
