import React from 'react';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import './Course.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons'
import { faStar } from '@fortawesome/free-solid-svg-icons'
// import font awesome icon 
const clock = <FontAwesomeIcon icon={faClock} />
const star = <FontAwesomeIcon icon={faStar} />

const Course = (props) => {
    // destructuring course object
    const { name, description, rating, reviews, img, duration } = props.course

    return (
        <Card className="course ">
            <Card.Img variant="top" className="p-3  course-img" src={img} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <hr />
                <Card.Text className="description">
                    {description.slice(0, 100)}
                </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroupItem className="d-flex course-duration">
                    <span > <span style={{ color: "pink" }}>{clock}</span> {duration}</span>
                    <span > <span style={{ color: "goldenrod" }}>{star} </span>({rating}) </span>
                    <span >Reviews: {reviews}</span>
                </ListGroupItem>
                <ListGroupItem><button className="btn btn-success buy-now">Buy Now</button> </ListGroupItem>
            </ListGroup>
        </Card >
    );
};

export default Course;