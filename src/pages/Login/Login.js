import React from 'react';
import './Login.css'
import NavBar from '../../components/NavBar/NavBar';
import Footer from '../../components/Footer/Footer';
import loginImg from '../../images/undraw_Mobile_login_re_9ntv.svg'
import { Col, Container, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';



const Login = () => {
    return (
        <div>
            <NavBar></NavBar>
            <h2 className="mt-5 text-center">Log in</h2>
            <div className="underline"></div>
            <Container>
                <div className="login-container p-5 m-5 row">
                    <div className="col-md-5">
                        <img src={loginImg} alt="" />
                    </div>
                    <div className="login-form col-md-5 mt-5 me-5">
                        <Form>
                            <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">

                                <Form.Label column sm={2}>
                                    Email
                                </Form.Label>
                                <Col sm={10}>
                                    <Form.Control type="email" placeholder="Email" autoComplete="email" />
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
                                <Form.Label column sm={2}>
                                    Password
                                </Form.Label>
                                <Col sm={10}>
                                    <Form.Control type="password" placeholder="Password" autoComplete="current-password" />
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} className="mb-3" controlId="formHorizontalCheck">
                                <Col sm={{ span: 10, offset: 2 }}>
                                    <Form.Check label="Remember me" />
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} className="mb-3">
                                <Col sm={{ span: 10, offset: 2 }}>
                                    <button className=" btn btn-warning me-3" type="submit">Sign in</button><span><Link to="/home">Forgotten password?</Link></span>
                                </Col>
                            </Form.Group>
                            <hr />
                            <Form.Group as={Row} className="mb-3">
                                <Col sm={{ span: 10, offset: 2 }}>
                                    <button className=" btn btn-success me-3" type="submit">Create a New Account</button>
                                </Col>
                            </Form.Group>
                        </Form>
                    </div>
                </div>
            </Container>

            <Footer></Footer>
        </div>
    );
};

export default Login;