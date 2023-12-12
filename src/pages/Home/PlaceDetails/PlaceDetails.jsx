import { Col, Container, Row } from "react-bootstrap";
import { useLoaderData } from "react-router-dom";
import BookingFrom from "../../Others/BookingFrom";


const PlaceDetails = () => {
    const place = useLoaderData();
    console.log(place);
    const { _id, name, description } = place;

    return (
        <Container style={{ marginTop: '100px' }}>

            <Row className="mt-4 z-3 ">
                <Col className="mb-5" lg={5}>
                    <div>
                        <h1 style={{ fontSize: '60px' }} className="fw-bold text-white">{name}</h1>
                        <p className="text-white">{description}</p>



                    </div>

                </Col>
                <Col lg={7}>
                    <BookingFrom place={place}></BookingFrom>
                </Col>

            </Row>
        </Container>
    );
};

export default PlaceDetails;