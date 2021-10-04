
import React from 'react';
import './Contact.css'
import { ButtonGroup, Button, Container, Form } from 'react-bootstrap';
import Footer from '../../components/Footer/Footer';
import NavBar from '../../components/NavBar/NavBar';

const Contact = () => {
    return (
        <div>
            <NavBar></NavBar>
            <h5 className="text-center mt-5">If you have any query or suggestion, please feel free to contact us.</h5>
            <Container className="my-5 w-50 contact p-5">

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

            </Container>
            <Footer></Footer>
        </div>
    );
};

export default Contact;