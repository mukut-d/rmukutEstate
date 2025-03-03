import "./Extra.css";

const Extra = () => {
  return (
    <section className="extra-wrapper">
      <div className="innerWidth flexCenter extra-container padding">
        <div className="extra-left">
          <div className="extra-title">
            <h1>
              Discover <br /> Most Perfect <br /> Property
            </h1>
          </div>
        </div>
        <div className="extra-right flexCenter">
          <div className="image-container">
            <img
              src="../../../public/assets/images/building.jpg"
              alt="building"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Extra;
