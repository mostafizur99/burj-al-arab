import Button from 'react-bootstrap/Button';
import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

const Room = ({ room }) => {
    const history = useHistory()
    const handleBook = (bedType) => {
        history.push(`/book/${bedType}`);
    }
    return (
        <div>
            <Col>
                <Card>
                    <Card.Header>{room.avatar}</Card.Header>
                    <Card.Img variant="top" src={room.imgUrl} />

                    <Card.Body>
                        <Card.Title>{room.title}</Card.Title>
                        <Card.Text>
                            {room.description}
                        </Card.Text>
                        <Card.Subtitle className="mb-2 text-muted">Bed: {room.bed}</Card.Subtitle>
                        <Card.Subtitle className="mb-2 text-muted">Capacity: {room.capacity}</Card.Subtitle>
                        <Card.Subtitle className="mb-2 text-muted">Price: ${room.price}</Card.Subtitle>
                        <Button onClick={() => handleBook(room.bedType)} variant="secondary">Secondary</Button>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default Room;