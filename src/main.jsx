import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Films } from './pages/Films.jsx';
import { People } from './pages/People.jsx';
import { Planets } from './pages/Planets.jsx';
import { Species } from './pages/Species.jsx';
import { Starships } from './pages/Starships.jsx';
import { Vehicles } from './pages/Vehicles.jsx';
import { FilmDetail } from './pages/FilmDetail.jsx';
import { fetchFilms, fetchFilmSingle } from './loaders/load-films.js';
import { loadPeople, loadPerson } from './loaders/load-people.js';
import { fetchPlanets, fetchPlanetSingle } from './loaders/load-planets.js';
import { fetchSpecies, fetchSpeciesSingle } from './loaders/load-species.js';
import { fetchStarships, fetchStarshipsSingle } from './loaders/load-starships.js';
import { fetchVehicles, fetchVehicleSingle } from './loaders/load-vehicles.js';
import { Redirect } from './pages/Redirect.jsx';
import { PersonDetail } from './pages/PersonDetail.jsx';

const router = createBrowserRouter([
  {
    path: '*',
    element: <App />,
    children: [
      {
        path: 'films',
        element: <Films />,
        loader: fetchFilms,

      },
      {
        path: 'films/:id',
        element: <FilmDetail />,
        loader: fetchFilmSingle,
      },
      {
        path: 'people',
        element: <People />,
        loader: loadPeople,
      },
      {
        path: 'people/:pageId',
        element: <People />,
        loader: loadPeople,
      },
      {
        path: 'people/:id/data',
        element: <PersonDetail />,
        loader: loadPerson,
      },
      {
        path: 'planets',
        element: <Planets />,
        loader: fetchPlanets,
      },
      {
        path: 'planets/:pageId',
        element: <Planets />,
        loader: fetchPlanets,
      },
      {
        path: 'planets/:id/data',
        element: <Planets />,
        loader: fetchPlanetSingle,
      },
      {
        path: 'species',
        element: <Species />,
        loader: fetchSpecies,
      },
      {
        path: 'species/:pageId',
        element: <Species />,
        loader: fetchSpecies,
      },
      {
        path: 'species/id/data',
        element: <Species />,
        loader: fetchSpeciesSingle,
      },
      {
        path: 'starships',
        element: <Starships />,
        loader: fetchStarships,
      },
      {
        path: 'starships/:pageId',
        element: <Starships />,
        loader: fetchStarships,
      },
      {
        path: 'starships/:id/data',
        element: <Starships />,
        loader: fetchStarshipsSingle,
      },
      {
        path: 'vehicles',
        element: <Vehicles />,
        loader: fetchVehicles,
      },
      {
        path: 'vehicles/:pageId',
        element: <Vehicles />,
        loader: fetchVehicles,
      },
      {
        path: 'vehicles/:id/data',
        element: <Vehicles />,
        loader: fetchVehicleSingle,
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} fallbackElement={<Redirect />}/>
)
