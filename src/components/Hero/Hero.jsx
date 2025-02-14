import "./Hero.scss";

function Hero() {
  return (
    <section className="hero">
      <div className="hero__wrapper">
        <div className="hero__images">
          {/* Mobile-only image */}
          <img
            src="/src/assets/hero-mobile.png"
            alt="girl coding"
            className="hero__image hero__image--top"
          />
          {/* Tablet and desktop-only image */}
          <img
            src="/src/assets/hero.png"
            alt="girl coding"
            className="hero__image hero__image--left"
          />
          {/* Portfolio header text image */}
          <img
            src="/src/assets/portfolio-header.png"
            alt="portfolio"
            className="hero__image hero__image--text"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
