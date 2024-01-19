import React from "react";
import banner from "../../assets/bannerHero.webp";
import locationIcon from "../../assets/locationIcon.svg";
import heroButton from "../../assets/heroButtonImg.svg";
import TourSlider from "./TourSlider";
import "./TourSlider.css";
const Block1 = () => {
    return (
        <div>
            <img
                className="absolute brightness-90 top-0 left-0 right-0 h-[100vh] w-[100%] object-cover"
                src={banner}
                alt=""
            />
            <div className="z-10 relative h-[100vh] text-white">
                <div className="h-full flex flex-col md:flex-row items-start justify-between md:justify-start md:items-center md:content">
                    <div className="left_hero_block content flex flex-col md:-mt-40">
                        <div className="flex items-center">
                            <img className="w-5" src={locationIcon} alt="" />
                            <p className="text-base font-bold ml-2">
                                Кыргызстан, Ыссык-Кол
                            </p>
                        </div>
                        <h1 className="text-5xl font-bold mt-2">Тянь-Шань</h1>
                        <div className="w-[300px] mt-6">
                            <img src={heroButton} alt="" />
                        </div>
                    </div>
                    <div className="right_hero_block backdrop-blur-lg">
                        <div className="ml-8 mt-16 hidden md:block">
                            <div className="text-2xl font-bold">
                                Изучай локации
                            </div>
                            <div className="w-[60%] h-1 bg-white mb-3"></div>
                        </div>
                        <div className="md:-ml-40 mt-10 lg:mt-20 mb-14">
                            <TourSlider />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Block1;
