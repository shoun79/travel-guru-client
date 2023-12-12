import { Col, Container, Row } from "react-bootstrap";
import CarouselImg from "../CarouselImg/CarouselImg";
import { Link } from "react-router-dom";


const Home = () => {

    return (
        <Container style={{ marginTop: '100px' }}>

            <Row className="mt-4 z-3 ">
                <Col className="mb-5" lg={5}>
                    <div>
                        <h1 style={{ fontSize: '60px' }} className="fw-bold text-white">Cox's bazar</h1>
                        <p className="text-white">Cox's Bazar is a city, fishing port, tourism centre and district headquarters in southeastern Bangladesh. It is famous mostly for its long natural sandy beach, and it ...</p>

                        <Link to={`/place-details/1}`}>

                            <button type="button" className="btn btn-warning">Booking</button>
                        </Link>

                    </div>

                </Col>
                <Col lg={7}>
                    <CarouselImg></CarouselImg>
                </Col>

            </Row>
        </Container>
    );
};

export default Home;