import React from 'react';
import './AboutPage.css'

/* Componet */
import HeaderPage from '../../components/Header/HeaderPage';
import Footer from '../../components/Footer/Footer';
import ParticleBackground from "../../components/ParticlesBg/ParticleBackground";
import ScrollToTop from '../../components/ScrollToTop/ScrollToTop';
import cv from '../../cv/cv.pdf';

/* Multi idioma */
import { FormattedMessage } from 'react-intl';

/* Img */
import imgabout from '../../img/home.jpg';

const About = () => {

  function readMore() {
    let btnHide = document.querySelector("#btn-hide");
    let parrafoActive = document.querySelector(".parrafo-active");

    parrafoActive.classList.toggle("show");

    if (parrafoActive.classList.contains("show")) {
      btnHide.innerHTML = "↑";
    } else {
      btnHide.innerHTML = "Read more";
    }
  }

  return (
    <div>

      <HeaderPage />

      <ParticleBackground />

      <main>
        <section className="sobre-mi-seccion" id="sobre-mi">
          <div className="sobre-mi-container">
            <div className="sobre-mi-img-container">
              <img src={imgabout} alt="" className="sobre-mi-img" />
              
              <a href={cv} target="_blank" rel="noopener noreferrer" download="cv.pdf" className="btn-codigo cv buttonDownload">
                  <FormattedMessage
                      id='btn-cv'
                      defaultMessage='Download CV'
                  />
              </a>
            </div>
            <div className="sobre-mi-info">
              <p>
                <FormattedMessage
                  id='about-info-1'
                  defaultMessage="I am Rohit Kumar, a passionate Backend Developer with strong expertise in Java, Spring Boot, and SQL. I specialize in building secure, scalable, and efficient backend systems that power real-world applications. My work revolves around designing and implementing RESTful APIs, integrating databases, and ensuring smooth system performance."
                />
              </p>

              <div className="hide parrafo-active">
                <p>
                  <FormattedMessage
                    id='about-info-2'
                    defaultMessage='Over the course of my journey, I have gained hands-on experience with system design, authentication, API security, database optimization, and deployment practices. I enjoy solving complex problems, writing clean code, and continuously improving backend performance.'
                  />
                </p>

                <p>
                  <FormattedMessage
                    id='about-info-3'
                    defaultMessage="I am also familiar with PostgreSQL, MySQL, and MongoDB, along with tools and frameworks that help in creating reliable solutions. I thrive in agile environments where I can contribute to both team collaboration and independent problem-solving.   In short, I am a developer who believes in code quality, performance, and innovation, and I am always ready to take on new challenges that push me to grow further in my career."
                  />
                </p>
              </div>

              <div className="btn-info">
                <div className="custom-btn btn-codigo" id="btn-hide" onClick={readMore}><span>Read more</span></div>
              </div>
            </div>

          </div>

          <div className="skill-seccion">
            <h1 className="heading">Skills</h1>
            <div className="skill-container">
              <div className="skill-card" data-aos="flip-left" data-aos-delay="300">
                <img alt="Java" className="skills-img icon-li" src="https://www.vectorlogo.zone/logos/java/java-icon.svg" title="JAVA" />
                <h2 className="skill-name">Java</h2>
                <p className="skill-info">
                  <FormattedMessage
                    id='about-skills-1'
                    defaultMessage='Three years experience in Java (Core + Java 8), with 1500+ coding problems solved. Strong knowledge of OOP, Collections, Exception Handling, and Java 8 features such as Streams, Lambda Expressions, Method References, Optional, and Functional Interfaces.'
                  />
                </p>
              </div>
              <div className="skill-card" data-aos="flip-up" data-aos-delay="300">
                <img alt="Spring" className="skills-img icon-li" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/spring/spring-original.svg" title="Spring" />
                <h2 className="skill-name">Spring</h2>
                <p className="skill-info">
                  <FormattedMessage
                    id='about-skills-2'
                    defaultMessage='2 years of hands-on experience in Java (Core + Java 8) and Spring Framework, including Spring Boot, Spring MVC, Spring Data JPA, and Spring Security. Skilled in developing RESTful APIs, securing applications, and integrating databases. Additionally, exploring AI technologies to build intelligent and scalable backend solutions.'
                  />
                </p>
              </div>
              <div className="skill-card" data-aos="flip-right" data-aos-delay="300">
                <img alt="mysql" className="skills-img icon-li" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg" title="MySQL" />
                <h2 className="skill-name">MySQL</h2>
                <p className="skill-info">
                  <FormattedMessage
                    id='about-skills-3'
                    defaultMessage='3 years of hands-on experience in MySQL, including database design, schema modeling, query optimization, indexing, stored procedures, triggers, and database integration for scalable applications.'
                  />
                </p>
              </div>
              <div className="skill-card" data-aos="flip-left" data-aos-delay="300">
                <img alt="Cloud" className="skills-img" src="https://img.icons8.com/?size=100&id=2854&format=png&color=000000" />
                <h2 className="skill-name">Cloud</h2>
                <p className="skill-info">
                  <FormattedMessage
                    id='about-skills-4'
                    defaultMessage='One year of hands-on experience with cloud services, including deployment, monitoring, and optimization of applications on cloud platforms.'
                  />
                </p>
              </div>
              <div className="skill-card" data-aos="flip-down" data-aos-delay="300">
                <img alt="docker" className="skills-img" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" title="Docker" />
                <h2 className="skill-name">Docker</h2>
                <p className="skill-info">
                  <FormattedMessage
                    id='about-skills-5'
                    defaultMessage='I have 2 years of hands-on experience with Docker, specializing in containerization and deployment of applications. Skilled in creating Docker images, managing containers, and optimizing workflows for development and production environments. Proficient in integrating Docker with backend systems to ensure scalability, portability, and efficient resource utilization.'
                  />
                </p>
              </div>
              <div className="skill-card" data-aos="flip-right" data-aos-delay="300">
                <img alt="leetcode" className="skills-img" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/leetcode/leetcode-original.svg" title="LeetCode" />
                <h2 className="skill-name">LeetCode</h2>
                <p className="skill-info">
                  <FormattedMessage
                    id='about-skills-6'
                    defaultMessage='A year using this platform in the personal and work environment, it is one of the platforms that I use and manipulate the most.'
                  />
                </p>
              </div>
              <div className="skill-card" data-aos="flip-right" data-aos-delay="300">
                <img alt="Spring Ai" className="skills-img" src="https://www.vectorlogo.zone/logos/instana/instana-icon.svg" title="Spring Ai" />
                <h2 className="skill-name">Spring Ai</h2>
                <p className="skill-info">
                  <FormattedMessage
                    id='about-skills-7'
                    defaultMessage='I have 1 year of experience with Spring AI, building intelligent backend systems that integrate machine learning and AI-driven features. Skilled in developing APIs that leverage AI for recommendations, automation, and decision-making. Proficient in combining Spring Boot with AI capabilities to deliver smart, scalable, and secure applications.'
                  />
                </p>
              </div>
              <div className="skill-card" data-aos="flip-up" data-aos-delay="300">
                <img alt="Spring Security" className="skills-img" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original-wordmark.svg" title="Spring Security" />
                <h2 className="skill-name">Spring Security</h2>
                <p className="skill-info">
                  <FormattedMessage
                    id='about-skills-8'
                    defaultMessage='I have 1 year of experience with Spring Security, focusing on authentication, authorization, and securing REST APIs. Skilled in implementing JWT and OAuth2 for modern applications, along with role-based access control. Proficient in integrating Spring Security with Spring Boot to build reliable, secure, and production-ready backend systems.'
                  />
                </p>
              </div>
              <div className="skill-card" data-aos="flip-left" data-aos-delay="300">
                <img alt="NodeJs" className="skills-img" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" title="NodeJs" />
                <h2 className="skill-name">NodeJs</h2>
                <p className="skill-info">
                  <FormattedMessage
                    id='about-skills-9'
                    defaultMessage='I have 2 years of experience with Node.js, developing scalable backend applications and RESTful APIs. Skilled in asynchronous programming, event-driven architecture, and integrating databases like MySQL and MongoDB. Proficient in using Express.js for server-side development, with expertise in building secure, high-performance, and production-ready applications.'
                  />
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <ScrollToTop />

      <Footer />

    </div>
  )
}
export default About;