import { NavLink, Navigate, useNavigation } from "react-router-dom";
import "../styles/nav-bar.css";
import { People } from "../pages/People";


const Navbar = () => {
  return (
    <nav>
      <NavLinks name={"films"} route={"/films"}/>
      <NavLinks name={"people"} route={"people"}/>
      <NavLinks name={"planets"} route={"/planets/1"} />
      <NavLinks name={"species"} route={"/species/1"} />
      <NavLinks name={"starships"} route={"/starships/1"} />
      <NavLinks name={"vehicles"} route={"/vehicles/1"} />
    </nav>
  );
};

function NavLinks({ name, route }) {
  const navigation = useNavigation();
  return (
    <NavLink 
      to={route} 
      className={({ isActive, isPending }) =>
      isPending ? "pending" : navigation.state === 'loading' ? '' : isActive ? "active" : ''
      }
      >
      {name}
    </NavLink>
  );
}
export default Navbar;
