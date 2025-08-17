import React from 'react';
import '../../pages/Service/ServicesPage.css'
import { Link } from 'react-router-dom';
import { ButtomGet } from '../ButtomGet/ButtomGet';

/* Multi idioma */
import { FormattedMessage } from 'react-intl';

const Service = () => (
    <section className="servicios" id="servicios">
        <h2 className="heading">
            <FormattedMessage
                id='services'
                defaultMessage='Services'
            />
        </h2>
        <div className="row">
            <div className="columns" data-aos="fade-up" data-aos-delay="200">
                <i className="fas fa-code"></i>
                <h3>
                    <FormattedMessage
                        id='design'
                        defaultMessage='ADesign UX/UIboult me'
                    />
                </h3>
                <p>
                    <FormattedMessage
                        id='design-info'
                        defaultMessage='Secure, scalable APIs using Java Spring Boot Node.js and Database design & optimization (MySQL, PostgreSQL, MongoDB).Authentication, authorization, and payment integration.'
                    />
                </p>
            </div>
            <div className="columns" data-aos="fade-up" data-aos-delay="300">
                <i class="fa fa-comments" aria-hidden="true"></i>
                <h3>
                    <FormattedMessage
                        id='development'
                        defaultMessage='Web development'
                    />
                </h3>
                <p>
                    <FormattedMessage
                        id='development-info'
                        defaultMessage='Creation of well-structured web pages, good responsive design, attractive color palette, with interactions that give the user satisfaction when browsing the website.'
                    />
                </p>
            </div>
            <div className="columns" data-aos="fade-up" data-aos-delay="400">
                <i className="fa fa-file-code"></i>
                <h3>
                    <FormattedMessage
                        id='marketing'
                        defaultMessage='Digital marketing'
                    />
                </h3>
                <p>
                    <FormattedMessage
                        id='marketing-info'
                        defaultMessage='I provide ongoing website maintenance and support to ensure your applications remain secure, fast, and up-to-date. From fixing bugs to adding new features, I help businesses keep their digital presence reliable and optimized.'
                    />
                </p>
            </div>
            <div className="columns" data-aos="fade-up" data-aos-delay="500">
                <i className="fas fa-wrench"></i>
                <h3>
                    <FormattedMessage
                        id='maintenance'
                        defaultMessage='Web maintenance'
                    />
                </h3>
                <p>
                    <FormattedMessage
                        id='maintenance-info'
                        defaultMessage='I provide ongoing website maintenance and support to ensure your applications remain secure, fast, and up-to-date. From fixing bugs to adding new features, I help businesses keep their digital presence reliable and optimized.'
                    />
                </p>
            </div>
            <div className="columns" data-aos="fade-up" data-aos-delay="600">
                <i class="fa fa-database" aria-hidden="true"></i>
                <h3>
                    <FormattedMessage
                        id='seo'
                        defaultMessage='Database Design & Management'
                    />
                </h3>
                <p>
                    <FormattedMessage
                        id='seo-info'
                        defaultMessage='I specialize in designing, optimizing, and managing databases that power secure and scalable applications. With expertise in both SQL and NoSQL systems, I ensure data is structured, reliable, and easily accessible for business insights.'
                    />
                </p>
            </div>
            <div className="columns" data-aos="fade-up" data-aos-delay="700">
                <i class="fa fa-cloud" aria-hidden="true"></i>
                <h3>
                    <FormattedMessage
                        id='optimization'
                        defaultMessage='Website optimization'
                    />
                </h3>
                <p>
                    <FormattedMessage
                        id='optimization-info'
                        defaultMessage='Complete optimization of your web page, improving loading speed, using optimized images, a good URL, to give a better experience to users who visit the website'
                    />
                </p>
            </div>
        </div>
        <div className='portafolio-btn'>
            <Link to="/service">
                <ButtomGet/>
            </Link>
        </div>
    </section>
);

export default React.memo(Service);