import React from 'react';
import './Footer.css'
import logo from '../../images/logo.png'
import { Container } from 'react-bootstrap';
import postImage1 from '../../images/1.jpg';
import postImage2 from '../../images/2.jpg'


const Footer = () => {
    return (
        <footer>
            <Container>
                <div className="row footer-container">
                    <h3 className="col-lg-4 col-md-4 col-sm-12">
                        <div className="mb-4">
                            <img src={logo} alt="" className="footer-logo" />
                        </div>
                        <div className="footer-address">
                            <address>
                                <p>Address: 795 South Park Avenue, CA 94107</p>
                                <p>Email: enquery@domain.com</p>
                                <p>Phone: 011-345-7676</p>
                            </address>
                        </div>
                    </h3>
                    <div className="col-lg-4 col-md-4 col-sm-12">
                        <h3 className="mb-4 text-white">USEFUL LINKS</h3>
                        <div className="d-flex usefull-links">
                            <ul>
                                <li><a href="#">General info</a></li>
                                <li><a href="#">Help Center</a></li>
                                <li><a href="#">Our Cervies</a></li>
                                <li><a href="#">Privacy Policy</a></li>
                                <li><a href="#">Online Support</a></li>

                            </ul>
                            <ul>
                                <li><a href="#">Become a Teacher</a></li>
                                <li><a href="#">Maintenance</a></li>
                                <li><a href="#">Language Packs</a></li>
                                <li><a href="#">LearnPress</a></li>
                                <li><a href="#">Release Status</a></li>
                            </ul>
                        </div>

                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12">
                        <h3 className="mb-4 text-white">RECENT POST</h3>
                        <div>
                            <div className="d-flex postImage1">
                                <img src={postImage1} alt="" />
                                <p>We recently arranged a big programming contest for all of our alumni students. </p>

                            </div>
                            <div className="d-flex postImage2">
                                <img src={postImage2} alt="" />
                                <p>Another BootCamp for all of our current student of all subjects.</p>
                            </div>
                        </div>

                    </div>
                </div>
            </Container>
            <div className="copyright p-3">
                <Container>
                    Copyright © 2021 | Designed by Ruhul Amin
                </Container>
            </div>

        </footer>
    );
};

export default Footer;