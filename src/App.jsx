import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { Films } from './pages/Films';
import { People } from './pages/People';
import { Planets } from './pages/Planets';
import { Species } from './pages/Species';
import { Starships } from './pages/Starships';
import { Vehicles } from './pages/Vehicles';
import Header from "./components/Header";
import "./styles/stars.css";
import "./styles/app.css";
import Stars from "./components/Stars";



const App = () => {
  return (
    <div className="bg-animation">
      <Stars />
      <div className="content">
        <Header />
        <Routes>
          <Route path='/films' element={<Films />}/>
          <Route path='/people' element={<People />}/>
          <Route path='/planets' element={<Planets />}/>
          <Route path='/species' element={<Species />}/>
          <Route path='/starships' element={<Starships />}/>
          <Route path='/vehicles' element={<Vehicles />}/>
        </Routes>
      </div>
    </div>
  );
};

export default App;
