import React from "react";
import Slider from "react-slick";
import "./TourSlider.css";
import locationIcon from "../../assets/locationIcon.svg";
import { sliderTourArr } from "../../const";

const TourSlider = () => {
    const settings = {
        className: "center slider variable-width",
        infinite: true,
        dots: true,
        slidesToShow: 2,
        speed: 800,
        variableWidth: true,
        autoplay: true,
        autoplaySpeed: 4000,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    centerMode: true,
                    slidesToShow: 2,
                    centerPadding: "50px",
                    arrows: false,
                },
            },
            {
                breakpoint: 520,
                settings: {
                    centerMode: true,
                    slidesToShow: 1,
                    centerPadding: "50px",
                    arrows: false,
                },
            },
        ],
    };
    return (
        <div>
            <Slider {...settings}>
                {sliderTourArr.map((item) => (
                    <div
                        style={{ width: 300 }}
                        key={item.id}
                        className="relative card_img"
                    >
                        <img
                            src={item.img}
                            className="w-full rounded-xl md:rounded-3xl border-4 md:border-[6px] border-white aspect-[4/3] md:aspect-[3/4] object-cover"
                            alt=""
                        />
                        <div className="slider_location_block backdrop-blur flex">
                            <img className="w-4" src={locationIcon} alt="" />
                            <p className="ml-2">{item.location}</p>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default TourSlider;
