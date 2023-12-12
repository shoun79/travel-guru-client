
import { Card, Col, Container, Row } from "react-bootstrap";
import { useLoaderData } from "react-router-dom";
import { FaStar } from "react-icons/fa6";
import GoogleMap from "./GoogleMap";

const Hotels = () => {
    const hotels = useLoaderData();


    return (
        <Container className="pb-4">
            <hr />
            <p>252 stays Apr 13-17 3 guests</p>

            <Row>
                <Col lg={7} >
                    <h3 className="mb-4">Stay in Bangladesh</h3>
                    {
                        hotels.map(hotel =>
                            <div
                                key={hotel._id}
                                className="border-0 d-lg-flex mb-4 text-center text-lg-start">
                                <div className="me-4 mb-3">
                                    <img className="rounded  img-fluid" style={{ minWidth: '335px', height: '180px' }} src={hotel.img_url} alt="" />
                                </div>
                                <div>
                                    <Card.Title className="mb-2">{hotel.name}</Card.Title>
                                    <div>
                                        <p className="text-secondary mb-2">{hotel.guests} guests {hotel.bedrooms}bedrooms {hotel.beds}beds {hotel.baths} baths</p >
                                        <p className="text-secondary my-2">{hotel.amenities}</p>
                                        <span className="text-secondary ">{hotel.cancellation}</span>
                                    </div>
                                    <div className="mt-2">
                                        <FaStar className="text-warning" /> <span className="me-1">{hotel.rating}</span>
                                        <span className="me-5">({hotel.rating_person})</span>
                                        <span>${hotel.price}/night</span>
                                    </div>

                                </div>
                            </div>
                        )
                    }
                </Col>
                <Col lg={5}>
                    <GoogleMap></GoogleMap>

                </Col>
            </Row>

        </Container >
    );
};

export default Hotels;