import React from "react";
import subscribeBanner from "../../assets/subscribeSection.svg";
import subscribeBannerAdap from "../../assets/subscribeSectionAdap.svg";
const Block6 = () => {
    let width = window.innerWidth;
    return (
        <div
            className={`pb-10 md:pb-20 ${
                width < 520 && "content"
            } cursor-pointer`}
        >
            <img
                className="w-full"
                src={width > 520 ? subscribeBanner : subscribeBannerAdap}
                alt=""
            />
        </div>
    );
};

export default Block6;
