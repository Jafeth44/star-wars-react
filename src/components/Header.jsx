import Navbar from "./Navbar";
import '../styles/header.css';

const Header = () => {
  return (
    <header>
      <div className="logo-container">
      <img src="/star-wars-logo.png" alt="Star Wars Logo"/>
      <span>Information</span>
      </div>
      <Navbar />
      
    </header>
  )
}

export default Header;