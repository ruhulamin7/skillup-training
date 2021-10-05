import './Courses.css'
import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Course from '../../components/Course/Course';
import Footer from '../../components/Footer/Footer';
import NavBar from '../../components/NavBar/NavBar';

const Courses = () => {
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        fetch('./skillupData.json')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])

    return (
        <div>
            <NavBar></NavBar>

            <div className="courses">
                <h2 className="text-center pt-5 my-3">Our All Courses</h2>
                <div className="underline"></div>
                <Container className="course-container my-5">
                    {
                        courses.map(course => <Course
                            key={course.id}
                            course={course}>
                        </Course>)
                    }
                </Container>
            </div>

            <Footer></Footer>
        </div>
    );
};

export default Courses;