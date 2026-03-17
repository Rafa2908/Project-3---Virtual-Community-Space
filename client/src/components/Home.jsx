import { Link } from "react-router-dom";
import "../App.css";

const Home = () => {
  return (
    <div className="bg">
      <div className="orb orb-1"></div>
      <div className="orb orb-2"></div>
      <div className="orb orb-3"></div>
      <div className="orb orb-4"></div>
      <div className="grid"></div>
      <div className="dots"></div>
      <div className="lines">
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
      <div className="content">
        <div className="eyebrow">Live R&B Events 2026</div>
        <h1 className="title">
          Feel The <br />
          <span>Rhythm Live</span>
        </h1>
        <p className="desc">
          Experience unforgettable nights with the biggest R&B artists across
          the country.
        </p>
        <div className="btns">
          <Link className="btn-primary" to={"/events"}>
            Explore Events
          </Link>
          <Link className="btn-secondary" to={"/artists"}>
            View Artists
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
