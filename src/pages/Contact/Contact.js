
import React from 'react';
import './Contact.css'
import { Button, Container, Form } from 'react-bootstrap';
import Footer from '../../components/Footer/Footer';
import NavBar from '../../components/NavBar/NavBar';
import contactImg from '../../images/undraw_Mail_re_duel.svg'

const Contact = () => {
    return (
        <div>
            <NavBar></NavBar>
            <h2 className="text-center mt-5">Contact Us</h2>
            <div className="underline"></div>
            <Container>
                <div className="contact-container row mx-3 my-5">
                    <div className="contact-img col-md-3">
                        <img src={contactImg} alt="" />
                    </div>
                    <div className="contact-form col-md-7 my-5">
                        <Form className="">
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Full Name</Form.Label>
                                <Form.Control type="text" placeholder="Your Name" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Your Email" aria-required />

                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Your comments/feedback write here</Form.Label>
                                <Form.Control as="textarea" rows={3} />
                            </Form.Group>
                            <Button type="submit" className="btn btn-warning">Submit</Button>
                        </Form>
                    </div>
                </div>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default Contact;