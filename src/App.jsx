import { Route, Routes } from "react-router-dom";
import { Films } from "./pages/Films";
import { People } from "./pages/People";
import { Planets } from "./pages/Planets";
import { Species } from "./pages/Species";
import { Starships } from "./pages/Starships";
import { Vehicles } from "./pages/Vehicles";
import Header from "./components/Header";
import Stars from "./components/Stars";
import { Footer } from "./components/Footer";
import "./styles/stars.css";
import "./styles/app.css";
import FilmDetail from "./pages/FilmDetail";

const App = () => {
  return (
    <>
      <div className="bg-animation">
        <Stars />
      </div>
      <div className="content">
        <Header />
        <Routes>
          <Route path="/films" element={<Films />} />
          {/* <Route path="/films/:title" element={<FilmDetail/>} loader={}/> */}
          <Route path="/people" element={<People />} />
          <Route path="/planets" element={<Planets />} />
          <Route path="/species" element={<Species />} 
          <Route path="/starships" element={<Starships />} />
          <Route path="/vehicles" element={<Vehicles />} />
        </Routes>
      <Footer />
      </div>
    </>
  );
};

export default App;
