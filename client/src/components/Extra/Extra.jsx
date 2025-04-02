import "./Extra.css";
import { HiLocationMarker } from "react-icons/hi";
import { motion } from "framer-motion";
import CountUp from "react-countup";

const Extra = () => {
  return (
    <section className="extra-wrapper">
      <div className="innerWidth flexCenter extra-container paddings">
        <div className="flexColStart extra-left">
          <div className="extra-title">
            <div className="blueCircle"></div>
            <motion.h1
              initial={{ y: "2rem", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 4, type: "ease-in" }}
            >
              Discover <br /> Most Perfect <br /> Property
            </motion.h1>
          </div>
          <div className="extra-des flexColStart">
            <span className="secondaryText">
              Find Beautiful properties that suite you the best
            </span>
            <span className="secondaryText">
              You will not face any difficulties in finding the best residencies
              for you
            </span>
          </div>
          <div className="flexCenter search-bar">
            <HiLocationMarker color={"blue"} size={25} />
            <input type="text" />
            <button className="button">Search</button>
          </div>

          <div className="flexCenter stats">
            <div className="flexColCenter stat">
              <span>
                <CountUp start={8500} end={9000} duration={5} />
                <span>+</span>
              </span>
              <span className="secondaryText"> Premium Properties</span>
            </div>
            <div className="flexColCenter stat">
              <span>
                <CountUp start={50} end={90} duration={5} />
                <span>+</span>
              </span>
              <span className="secondaryText"> Happy Clients</span>
            </div>
            <div className="flexColCenter stat">
              <span>
                <CountUp start={10} end={15} duration={5} />
                <span>+</span>
              </span>
              <span className="secondaryText">Award Winning</span>
            </div>
          </div>
        </div>

        <div className="extra-right flexCenter">
          <motion.div
            initial={{ x: "7rem", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              duration: 4,
              type: "ease-in",
            }}
            className="image-container"
          >
            <img src="./building.jpg" alt="building" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Extra;
