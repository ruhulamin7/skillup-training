import React from 'react';
import { Container } from 'react-bootstrap';
import './Teachers.css'
import teacher1 from '../../images/Teacher1.jpg'
import teacher2 from '../../images/teacher2.jpg'
import teacher3 from '../../images/Teacher3.jpg'
import teacher4 from '../../images/Teacher4.jpg'

const Teachers = () => {
    return (
        <Container>
            <h3 className="my-5 ">OUR TEACHER</h3>
            <div className="teacher-underline"></div>
            <div className="teachers my-5">
                <div className="teacher">
                    <img src={teacher1} alt="" className="img-fluid" />
                    <h4>Sarah Johnson</h4>
                    <p>Graphich Designer</p>
                    <p><i className="fas fa-envelope"></i> Email: sarah@example.com</p>
                    <p><i className="fas fa-phone"></i> Phone: 011-322-1234</p>
                </div>
                <div className="teacher">
                    <img src={teacher2} alt="" className="img-fluid" />
                    <h4>Rebeca adams</h4>
                    <p>Web Designer</p>
                    <p><i className="fas fa-envelope"></i> Email: rebeca@example.com</p>
                    <p><i className="fas fa-phone"></i> Phone: 011-352-12349</p>

                </div>
                <div className=" teacher">
                    <img src={teacher3} alt="" className="img-fluid" />
                    <h4>Leonardo Bunucci</h4>
                    <p>Digital Marketing Expert</p>
                    <p><i className="fas fa-envelope"></i> Email: leonardo@example.com</p>
                    <p><i className="fas fa-phone"></i> Phone: 011-322-1231</p>

                </div>
                <div className=" teacher">
                    <img src={teacher4} alt="" className="img-fluid" />
                    <h4>Michle James</h4>
                    <p>Microsoft Excel Expert</p>
                    <p><i className="fas fa-envelope"></i> Email: michle@example.com</p>
                    <p><i className="fas fa-phone"></i> Phone: 011-372-1534</p>
                </div>
            </div>
        </Container>
    );
};

export default Teachers;