import React from "react";
import "./about.css";
import myImage from "../../assets/my-image2.jpg";
import { GiGraduateCap } from "react-icons/gi";
import { BsBookmarkStar } from "react-icons/bs";
import { TfiWorld } from "react-icons/tfi";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={myImage} alt="Me" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <GiGraduateCap className="about__icon" />
              <h5>Degree</h5>
              <small>
                B.Sc.Degree in Computer Science <br />
                <i>Assosa University, Ethiopia</i>
              </small>
            </article>

            <article className="about__card">
              <BsBookmarkStar className="about__icon" />
              <h5>CGPA</h5>
              <small>3.94</small>
            </article>

            <article className="about__card">
              <TfiWorld className="about__icon" />
              <h5>Current</h5>
              <small>
                <ul>
                  <li>IT-Trainee at Amhara Bank S.C</li>
                  <li>Core-Banking Division</li>
                </ul>
              </small>
            </article>
          </div>
          <p>
            I'm a <b>Computer Science Graduated</b> at Assosa University,
            Ethiopia. During my academic achivement I have got a recognition of
            Gold Medalist. With a strong academic foundation in Computer Science
            and hands-on experience in various programming languages, I am eager
            to contribute to innovative projects and learn from experienced
            professionals in the industry. I am a quick learner who is always
            ready to face challenges.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
