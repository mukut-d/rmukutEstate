import "./Header.css";
// import { Link } from "react-router-dom";
import { BiMenuAltRight } from "react-icons/bi";
import { useState } from "react";
import OutSideClickHandler from "react-outside-click-handler";
import OutsideClickHandler from "react-outside-click-handler";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleClick = () => {
    setMenuOpen(!menuOpen);
  };

  const getMenuStyles = (menuOpened) => {
    if (document.documentElement.clientWidth <= 800) {
      return { right: !menuOpened && "-100%" };
    }
  };

  return (
    <section className="h-wrapper">
      <div className="flexCenter paddings innerWidth h-container">
        <img src={"./logo.jpg"} alt="logo" width={"100"} />

        <OutsideClickHandler onOutsideClick={() => setMenuOpen(false)}>
          <div className="flexCenter h-menu" style={getMenuStyles(menuOpen)}>
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
        </OutsideClickHandler>
        <div className="menu-icon" onClick={() => handleClick()}>
          <BiMenuAltRight size={30} />
        </div>
      </div>
    </section>
  );
};

export default Header;
