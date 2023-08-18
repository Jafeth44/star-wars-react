import { NavLink, useNavigation } from "react-router-dom";
import "../styles/nav-bar.css";
import PropTypes from 'prop-types';

const Navbar = () => {
  return (
    <nav>
      <NavLinks name={"films"} route={"films"}/>
      <NavLinks name={"people"} route={"people"}/>
      <NavLinks name={"planets"} route={"planets"} />
      <NavLinks name={"species"} route={"species"} />
      <NavLinks name={"starships"} route={"starships"} />
      <NavLinks name={"vehicles"} route={"vehicles"} />
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

NavLinks.propTypes = {
  name: PropTypes.string,
  route: PropTypes.string,
}

export default Navbar;
