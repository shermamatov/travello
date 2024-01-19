import React from "react";
import navigation from "../assets/navigation.svg";
import "./Cards.css";
const Card = ({ item }) => {
    return (
        <div className="aspect-[3/4] product_card rounded-2xl">
            <img
                className="h-[75%] object-cover rounded-t-2xl"
                src={item.img}
                alt=""
            />
            <div className="h-[25%] px-4 flex flex-col justify-evenly">
                <div className="flex justify-between text-lg mob:text-sm sm:text-lg text-[#5E6282]">
                    <p>{item.location}</p>
                    <p>${item.price}</p>
                </div>
                <div className="flex">
                    <img className="w-4 sm:w-6" src={navigation} alt="" />
                    <p className="ml-2 text-sm sm:text-base text-[#5E6282]">
                        {item.days} дней поездки
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Card;
