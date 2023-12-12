import { Button, Col, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";


const BookingFrom = ({ place }) => {

    return (
        <Row className="p-2">
            <Col lg={6} className="mx-auto bg-white p-3" >
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Origin</Form.Label>
                        <Form.Select className="bg-light" aria-label="Default select example">
                            <option>From</option>
                            <option value="1">Cox Bazar</option>
                            <option value="2">Dhaka</option>
                            <option value="3">Sundarban</option>
                            <option value="4">Srimangal</option>
                            <option value="5">Rangamati</option>
                        </Form.Select>


                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Destination</Form.Label>
                        <Form.Control defaultValue={place.name} className="bg-light" type="text" placeholder="Destination" />
                    </Form.Group>
                    <Form.Group className="mb-3 d-flex justify-content-between" controlId="formBasicPassword">
                        <div>
                            <Form.Label>Form</Form.Label>
                            <Form.Control className="bg-light" type="date" placeholder="Destination" />
                        </div>
                        <div>
                            <Form.Label>To</Form.Label>
                            <Form.Control className="bg-light" type="date" placeholder="Destination" />
                        </div>

                    </Form.Group>
                    <Link to={`/hotels/${place._id}`}>
                        <Button className="w-100" variant="warning" type="submit">
                            Start Booking
                        </Button>
                    </Link>
                </Form>
            </Col>
        </Row>
    );
};

export default BookingFrom;