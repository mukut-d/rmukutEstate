import "./Extra.css";
import { HiLocationMarker } from "react-icons/hi";

const Extra = () => {
  return (
    <section className="extra-wrapper">
      <div className="innerWidth flexCenter extra-container padding">
        <div className="flexColStart extra-left">
          <div className="extra-title">
            <div className="blueCircle"></div>
            <h1>
              Discover <br /> Most Perfect <br /> Property
            </h1>
          </div>
          <div className="extra-des flexColStart">
            <span>Find Beautiful properties that suite you the best</span>
            <span>
              You will not face any difficulties in finding the best residencies
              for you
            </span>
          </div>
          <div className="flexCenter search-bar">
            <HiLocationMarker color={"blue"} size={25}>
              <input type="text" />
              <button className="button">Search</button>
            </HiLocationMarker>
          </div>
        </div>

        <div className="extra-right flexCenter">
          <div className="image-container">
            <img src="/assets/images/building.jpg" alt="building" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Extra;
