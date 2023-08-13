import { Outlet, useNavigation } from 'react-router-dom';
import Header from "./components/Header";
import Stars from "./components/Stars";
import { Footer } from "./components/Footer";
import "./styles/stars.css";
import "./styles/app.css";


const App = () => {
  const navigation = useNavigation();
  return (
    <>
      <div className="bg-animation">
        <Stars />
      </div>
      <div className="content">
        <Header />
        {
          navigation.state === "loading" ? (
            <h1>Loading...</h1>
          ) : (
            <Outlet />
          )
        }
      <Footer />
      </div>
    </>
  );
};

export default App;
