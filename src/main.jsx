import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Films } from './pages/Films.jsx';
import { fetchData as fetchFilms, fetchDataSingle as fetchSingleFilm} from './loaders/load-films.js';
import { People } from './pages/People.jsx';
import { Planets } from './pages/Planets.jsx';
import { Species } from './pages/Species.jsx';
import { Starships } from './pages/Starships.jsx';
import { Vehicles } from './pages/Vehicles.jsx';
import { FilmDetail } from './pages/FilmDetail.jsx';
import { loadPeople, loadPerson } from './loaders/load-people.js';
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
        loader: fetchSingleFilm,
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
      },
      {
        path: 'species',
        element: <Species />,
      },
      {
        path: 'starships',
        element: <Starships />,
      },
      {
        path: 'vehicles',
        element: <Vehicles />,
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} fallbackElement={<Redirect />}/>
)
