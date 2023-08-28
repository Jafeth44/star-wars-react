import { Outlet, useNavigation } from "react-router-dom";
import Header from "./components/Header";
import Stars from "./components/Stars";
import { Footer } from "./components/Footer";
import "./styles/stars.css";
import "./styles/app.css";
import { CSSTransition, SwitchTransition } from "react-transition-group";

const App = () => {
  const navigation = useNavigation();
  return (
    <>
      <div className="bg-animation">
        <Stars />
      </div>
      <div className="content">
        <Header />
        <SwitchTransition>
          <CSSTransition
              key={location.pathname}
              timeout={300}
              classNames="page"
              unmountOnExit
          > 
          <div className="page">
            {navigation.state === "loading" ? <h1 className="loading">Loading...</h1> : <Outlet />}
          </div>
          </CSSTransition>
        </SwitchTransition>
        <Footer />
      </div>
    </>
  );
};

export default App;
