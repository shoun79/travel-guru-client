import { useEffect, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



// import required modules
import { Pagination } from 'swiper/modules';

import { Link } from 'react-router-dom';


const CarouselImg = () => {
    const [placesData, setPlacesData] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setPlacesData(data))
    }, [])

    return (
        <>
            <Swiper
                slidesPerView={4}
                breakpoints={{
                    '@0.00': {
                        slidesPerView: 2,
                        spaceBetween: 10,
                    },
                    '@0.75': {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    '@1.00': {
                        slidesPerView: 3,
                        spaceBetween: 40,
                    },
                    '@1.50': {
                        slidesPerView: 4,
                        spaceBetween: 10,
                    },
                }}
                spaceBetween={20}
                grabCursor={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                {
                    placesData.map(place =>
                        <SwiperSlide
                            key={place.id}

                            className='me-5'
                        >
                            <Link to={`/place-details/${place.id}`}

                            > <img className='rounded ' width={'200px'} height={'300px'} src={place.img} alt="" />
                                <h2 style={{ bottom: '25px', left: '5px' }} className='position-absolute text-white fw-bold '>{place.name}</h2>
                            </Link>

                        </SwiperSlide>
                    )
                }




            </Swiper >
        </>
    );
};

export default CarouselImg;