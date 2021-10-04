import React from 'react';
import { Container } from 'react-bootstrap';
import Footer from '../../components/Footer/Footer';
import NavBar from '../../components/NavBar/NavBar';
import aboutImg from '../../images/about.jpg'
import teacher1 from '../../images/Teacher1.jpg'
import teacher2 from '../../images/teacher2.jpg'
import teacher3 from '../../images/Teacher3.jpg'
import teacher4 from '../../images/Teacher4.jpg'

import './About.css'

const About = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Container>
                <div className="about-us my-5">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-12">
                            <h2>Welcome to skillup</h2>
                            <div>
                                <p>
                                    Since its inauguration in 1997, skillup a leading and promising Internet service provider (ISP) in Bangladesh, the Company is continuously earning a reputation for fast, stable Internet access and innovative Internet solutions for our valued residential and corporate customers.
                                </p>
                                <p>
                                    skillup has deployed a high-quality Network infrastructure backbone that consists of 3000+ km wide optical fibre and Metropolitan Area Network (MAN) around the capital city(Dhaka) and all divisions (Chittagong, Sylhet, Khulna, Barishal, Rajshahi, Rangpur, Maymanshing) in the country. That can support a wide range of convergent services like fast broadband access, voice, data, triple play, and various connectivity solutions such as Virtual Private Networks (VPN).
                                </p>
                                <p>
                                    skillup has also evolved into full-range web-based software development and website designing, Web hosting, Email marketing, professional IT training, and IT consultancy. skillup is always ready to give you genuine facilities and the best value privileges.
                                </p>

                                <ul className="about-list">
                                    <li> <i class="fas fa-check"></i> 2 Glossaries for difficult terms & acronyms</li>
                                    <li><i class="fas fa-check"></i> 25 hours of High Quality e-Learning content</li>
                                    <li><i class="fas fa-check"></i> 72 end of chapter quizzes</li>
                                    <li><i class="fas fa-check"></i> 30 PDUs Offered</li>
                                    <li><i class="fas fa-check"></i> Collection of 47 six sigma tools for hands-on practice</li>

                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12">
                            <div className="about-image">
                                <img src={aboutImg} alt="" />
                            </div>

                        </div>
                    </div>
                </div>
            </Container>
            <div className="achievement my-5">
                <Container>
                    <div className="row py-5">
                        <div className="col-md-3">
                            <h1 className="text-warning">23</h1>
                            <h4 className="text-white">Year Of Experience</h4>
                            <p className="achievement-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda repellendus autem corporis! Magni assumenda aut velit est iure modi optio!</p>
                        </div>
                        <div className="col-md-3">
                            <h1 className="text-warning">59</h1>
                            <h4 className="text-white">Numbers Engineers</h4>
                            <p className="achievement-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda repellendus autem corporis! Magni assumenda aut velit est iure modi optio!</p>
                        </div>
                        <div className="col-md-3">
                            <h1 className="text-warning">15</h1>
                            <h4 className="text-white">Professional Awards</h4>
                            <p className="achievement-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda repellendus autem corporis! Magni assumenda aut velit est iure modi optio!</p>
                        </div>
                        <div className="col-md-3">
                            <h1 className="text-warning">100%</h1>
                            <h4 className="text-white">Satisfied Clients</h4>
                            <p className="achievement-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda repellendus autem corporis! Magni assumenda aut velit est iure modi optio!</p>
                        </div>

                    </div>
                </Container>
            </div>

            <Footer></Footer>

        </div>
    );
};

export default About;