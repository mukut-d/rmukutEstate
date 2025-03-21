import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <section className="h-wrapper">
      <div className="flexCenter paddings innerWidth h-container">
        <img src={"./logo.jpg"} alt="logo" width={"100"} />

        <div className="flexCenter h-menu">
          {/* <Link to="/value">Our Values</Link>
          <Link to="/contact">Contact Us</Link>
          <Link to="/start">Get Started</Link>
          <Link to="/residencies">Recidencies</Link> */}
          <a href="">Our Value</a>
          <a href="">Contact Us</a>
          <a href="">Get Started</a>
          <a href="">Recidencies</a>
          <button className="button">Contact</button>
        </div>
      </div>
    </section>
  );
};

export default Header;
