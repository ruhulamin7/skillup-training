import React from 'react';
import { Container } from 'react-bootstrap';
import Achievement from '../../components/Achievement/Achievement';
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
                <div className="about-us my-5 pt-5">
                    <div className="row about-container">
                        <div className="col-lg-6 col-md-6 col-sm-12">
                            <h2 className="my-5">Welcome to skillup</h2>
                            <div>
                                <p>
                                    Since its inauguration in 1997, skillup a leading and promising Internet service provider (ISP) in Bangladesh, the Company is continuously earning a reputation for fast, stable Internet access and innovative Internet solutions for our valued residential and corporate customers.
                                </p>
                                <p>
                                    skillup has deployed a high-quality Network infrastructure backbone that consists of 3000+ km wide optical fibre and Metropolitan Area Network (MAN) around the capital city(Dhaka) and all divisions (Chittagong, Sylhet, Khulna, Barishal, Rajshahi, Rangpur, Maymanshing) in the country. That can support a wide range of convergent services like fast broadband access, voice, data, triple play, and various connectivity solutions such as Virtual Private Networks (VPN).
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
            <Achievement></Achievement>

            <Footer></Footer>

        </div>
    );
};

export default About;