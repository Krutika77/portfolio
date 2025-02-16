import "./About.scss";

function About() {
  return (
    <section className="about">
      <div className="about__background"></div>
      <div className="about__overlay">
        {/* <div className="about__wrapper"> */}
        <h2 className="about__title">About Me</h2>
        <div className="about__content">
          <p className="about__text">
            Hi, I'm Krutika Desai, a passionate web developer with experience in
            building modern and responsive web applications. I specialize in
            front-end development using React, SCSS, and JavaScript.
          </p>
        </div>
        {/* </div> */}
      </div>
    </section>
  );
}

export default About;
