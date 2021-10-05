import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Achievement from '../../components/Achievement/Achievement';
import Course from '../../components/Course/Course';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import './Home.css'

const Home = () => {
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        fetch('./skillupData.json')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])
    return (
        <div className="home ">
            <Header></Header>
            <h2 className="text-center pt-5 ">Our Popular Courses</h2>
            <div className="underline"></div>
            <Container className="card-container my-5">
                {
                    courses.slice(0, 4).map(course => <Course
                        key={course.id}
                        course={course}>

                    </Course>)
                }
            </Container>
            <Container className="text-center">
                <Link to="/courses" >
                    <button className="btn btn-warning mb-5">Our All Courses</button>
                </Link>
            </Container>

            <Achievement></Achievement>

            <Footer></Footer>
        </div>
    );
};

export default Home;