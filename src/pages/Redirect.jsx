import { Footer } from "../components/Footer";
import Header from "../components/Header";
import Stars from "../components/Stars";

export const Redirect = () => {
  return (
    <>
      <div className="bg-animation">
        <Stars />
      </div>
      <div className="content">
        <Header />
        <h1>Loading...</h1>
        <Footer />
      </div>
    </>
  );
};
