import React from 'react';
import './Achievement.css'
import { Container } from 'react-bootstrap';

const Achievement = () => {
    return (
        <div className="achievement my-5">
            <Container>
                <div className="row py-5">
                    <div className="col-md-3 col-6 bb">
                        <h1 className="text-warning">23</h1>
                        <h4 className="text-white my-4">Year Of Experience</h4>
                        <p className="achievement-text">We have 23 year of Experience in thid field. And so far we are successful.</p>
                    </div>
                    <div className="col-md-3 col-6">
                        <h1 className="text-warning">59</h1>
                        <h4 className="text-white my-4">Numbers Engineer</h4>
                        <p className="achievement-text">We have lot of Experienced engineers and teachers. They always try to teach you better. </p>
                    </div>
                    <div className="col-md-3 col-6">
                        <h1 className="text-warning">15</h1>
                        <h4 className="text-white my-4">Professional Awards</h4>
                        <p className="achievement-text">So far we have 15 Professional award as a best teaching organization !</p>
                    </div>
                    <div className="col-md-3 col-6">
                        <h1 className="text-warning">100%</h1>
                        <h4 className="text-white my-4">Satisfied Clients</h4>
                        <p className="achievement-text">Our clients and students are satisfied with us. We are proud to be a part of your nice learning journey!</p>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Achievement;