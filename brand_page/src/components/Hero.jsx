import "./components.css";

const Hero = () => {
  return (
    <main className="Hero">
      <div className="hero-content">
        <h1>Your feet deserve the best. </h1>
        <p>
          Your feet deserve the best, and we're here to help you with your
          shoes.Your feet deserve the best, and we're here to help you with your
          shoes.
        </p>

        <div className="hero-btn">
          <button className="login_button">Shop Now</button>
          <button className="login_button category">Category</button>
        </div>

        <div className="shopping">
          <p>Also Available On</p>
          <div className="brand-icons">
            <img src="/images/amazon.png" alt="amazon" />
            <img src="/images/flipkart.png" alt="flipkart" />
          </div>
        </div>
      </div>

      <div className="hero-img">
        <img src="/images/hero-image.png" alt="hero-img" />
      </div>
    </main>
  );
};

export default Hero;
