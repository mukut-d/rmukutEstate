const Header = () => {
  return (
    <section className="h-wrapper">
      <div className="flexCenter padding h-container">
        <img
          src={"../../../public/assets/images/logo.jpg"}
          alt="logo"
          width={"100"}
        />

        <div className="h-menu">
          <a href="">Our Value</a>
          <a href="">Contact Us</a>
          <a href="">Get Started</a>
          <a href="">Recidencies</a>
          <button>Contact</button>
        </div>
      </div>
    </section>
  );
};

export default Header;
