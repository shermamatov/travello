import React from "react";
import logo from "../assets/logo.svg";
const Header = () => {
    return (
        <div className="backdrop-brightness-75 z-20 relative">
            <div className="content  ">
                <div className="h-[100px] flex justify-start items-center ">
                    <div className="flex">
                        <img
                            className="sm:w-[160px] w-[100px]"
                            src={logo}
                            alt=""
                        />
                        <ul className="ml-10 flex items-center text-white">
                            <li>О нас</li>
                            <li className="ml-8">Туры</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
