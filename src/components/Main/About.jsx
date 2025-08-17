import React from 'react';
import '../../pages/About/AboutPage.css'
import { Link } from 'react-router-dom';
import cv from '../../cv/cv.pdf';
import { ButtomGet } from '../ButtomGet/ButtomGet';

/* Multi idioma */
import { FormattedMessage } from 'react-intl';

const About = () => (
    <section className="sobre-mi" id="sobre-mi">
        <h2 className="heading">
            <FormattedMessage
                id='about'
                defaultMessage='About me'
            />
        </h2>

        <div className="row container">
            <div className="columns" data-aos="fade-right" data-aos-delay="300">
                <h3>
                    <FormattedMessage
                        id='im'
                        defaultMessage='who I am'
                    />
                </h3>
                <h4>
                    <FormattedMessage
                        id='description'
                        defaultMessage='My name is Rohit Kumar and I am a Softwear developer.'
                    />
                </h4>
                <p>
                    <FormattedMessage
                        id='my-description'
                        defaultMessage='LeetCoder with 1000+ problems solved and GeeksforGeeks contributor with 700+ problems solved, ranked 5th in coding at my college.
Skilled Java Backend Developer with 1 year of experience building scalable and secure backend systems using Java, Spring Boot, and SQL. Hands-on expertise in RESTful API development, system design, and database integration with PostgreSQL and MongoDB Atlas. Proficient in developing and integrating AI Agents to automate workflows, enhance decision-making, and deliver intelligent backend solutions. Passionate about solving real-world problems and optimizing backend performance in agile environments..'
                    />
                </p>
                <ul>
                    <li>
                        <p>
                            <span>
                                <FormattedMessage
                                    id='years: '
                                />
                            </span>
                            23
                        </p>
                    </li>
                    <li>
                    </li>
                    <li>
                        <p><span>Email:</span> rokkumar77@gmail.com</p>
                    </li>
                    <li>
                        <p>
                            <span>
                                <FormattedMessage
                                    id='from'
                                    defaultMessage='Location'
                                />
                            </span>
                            Noida , Utter Pradesh, India
                        </p>
                    </li>
                </ul>
                <div className="mas-info">
                    <a href={cv} target="_blank" rel="noopener noreferrer" download="cv.pdf" className="btn-codigo buttonDownload">
                        <FormattedMessage
                            id='btn-cv'
                            defaultMessage='Download CV'
                        />
                    </a>
                    <div className='mas-info-btn'>
                    <Link to="/about">
                        <ButtomGet/>
                    </Link>
                    </div>
                </div>
            </div>
            <div className="columns col-skill" data-aos="fade-left" data-aos-delay="650">
                <h3>skills</h3>
                <h4>Front-End</h4>
                <div className="skill">
                    <div>
                        <img alt="HTML" className="icons-skils" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" />
                        <h5>HTML</h5>
                    </div>
                    <div>
                        <img alt="CSS" className="icons-skils" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" />
                        <h5>CSS</h5>
                    </div>
                    <div>
                        <img alt="Js" className="icons-skils" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg" />
                        <h5>JavaScript</h5>
                    </div>
                    <div>
                        <img alt="React" className="icons-skils" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
                        <h5>React</h5>
                    </div>
                </div>
                <h4>Back-End</h4>
                <div className="skill">
                    <div>
                        <img alt="Java" className="icons-skils" src="https://www.vectorlogo.zone/logos/java/java-icon.svg" />
                        <h5>Java</h5>
                    </div>
                    <div>
                        <img alt="Spring" className="icons-skils" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" />
                        <h5>Spring</h5>
                    </div>
                    <div>
                        <img alt="Spring Security" className="icons-skils" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original-wordmark.svg" />
                        <h5>Spring Security</h5>
                    </div>
                    <div>
                        <img alt="Spring Ai" className="icons-skils" src="https://www.vectorlogo.zone/logos/instana/instana-icon.svg" />
                        <h5>Spring Ai</h5>
                    </div>
                    <div>
                        <img alt="JWT" className="icons-skils" src="https://img.icons8.com/?size=100&id=rHpveptSuwDz&format=png&color=000000" />
                        <h5>JWT</h5>
                    </div>
                    <div>
                        <img alt="Google Cloud" className="icons-skils" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg" />
                        <h5>Google Cloud</h5>
                    </div>
                    <div>
                        <img alt="express" className="icons-skils" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" />
                        <h5>Express</h5>
                    </div>
                    <div>
                        <img alt="Jira" className="icons-skils" src="https://www.vectorlogo.zone/logos/atlassian_jira/atlassian_jira-icon.svg" />
                        <h5>Jira</h5>
                    </div>
                    <div>
                        <img alt="Arduino" className="icons-skils" src="https://www.vectorlogo.zone/logos/arduino/arduino-ar21.svg" />
                        <h5>Arduino</h5>
                    </div>
                    <div>
                        <img alt="mysql" className="icons-skils" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg" />
                        <h5>MySQL</h5>
                    </div>
                    <div>
                        <img alt="postgresql" className="icons-skils" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original-wordmark.svg" />
                        <h5>PostgreSQL</h5>
                    </div>
                    <div>
                        <img alt="mongodb" className="icons-skils" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-plain-wordmark.svg" />
                        <h5>MongodDB</h5>
                    </div>
                </div>
                <h4>
                    <FormattedMessage
                        id='tools'
                        defaultMessage='Tools'
                    />
                </h4>
                <div className="skill">
                    <div>
                        <img alt="Github" className="icons-skils" src="https://www.vectorlogo.zone/logos/github/github-icon.svg" title="Github" />
                        <h5>Github</h5>
                    </div>
                    <div>
                        <img alt="Postman" className="icons-skils" src="https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" title="Postman" />
                        <h5>Postman</h5>
                    </div>
                    <div>
                        <img alt="Docker" className="icons-skils" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" title="Docker" />
                        <h5>Docker</h5>
                    </div>
                    <div>
                        <img alt="IntelliJ" className="icons-skils" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/intellij/intellij-original.svg" title="IntelliJ" />
                        <h5>IntelliJ</h5>
                    </div>
                    <div>
                        <img alt="Eclipse" className="icons-skils" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/eclipse/eclipse-original.svg" title="Eclipse" />
                        <h5>Eclipse</h5>
                    </div>
                    <div>   
                        <img alt="AWS" className="icons-skils" src="https://img.icons8.com/?size=100&id=33039&format=png&color=000000" title="AWS" />
                        <h5>AWS</h5>
                    </div>
                    <div>
                        <img alt="Visual Studio Code" className="icons-skils" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Visual_Studio_Code_1.18_icon.svg/1200px-Visual_Studio_Code_1.18_icon.svg.png" title="Visual Studio Code" />
                        <h5>VS Code</h5></div>
                    <div>
                        <img alt="git" className="icons-skils" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" title="git" />
                        <h5>Git</h5>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default React.memo(About);