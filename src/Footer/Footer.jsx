import React from "react";
import logo from "../assets/footerLogo.svg";
import instagram from "../assets/instagram.svg";
import facebook from "../assets/facebook.svg";
import twitter from "../assets/twitter.svg";
import playMarket from "../assets/Google Play.svg";
import appStore from "../assets/Play Store.svg";
const Footer = () => {
    return (
        <div className="content grid grid-cols-1 md:grid-cols-3 pb-16 gap-8">
            <div>
                <img src={logo} alt="" />
                <p className="text-[#5E6282] mt-4 font-medium text-base w-full sm:w-[80%]">
                    Забронируйте поездку за минуту, насладитесь контроль гораздо
                    дольше.
                </p>
            </div>
            <div>
                <h4 className="text-black text-2xl font-bold">Контакты</h4>
                <ul className="text-[#5E6282] mt-4 sm:mt-6 font-medium text-base">
                    <li>Email: travello@gmail.com</li>
                    <li className="mt-2">Телефон: +996 558 03-38-80</li>
                    <li className="mt-2">Связаться с нами: отправить смс</li>
                    <li className="mt-2">Адрес: Кыргызстан, город Бишкек</li>
                </ul>
            </div>
            <div>
                <h4 className="text-black text-2xl font-bold">мы здесь</h4>
                <div className="flex mt-4 sm:mt-6">
                    <img
                        className="w-20 cursor-pointer hover:scale-[1.15] transition"
                        src={facebook}
                        alt=""
                    />
                    <img
                        className="w-20 cursor-pointer hover:scale-[1.15] transition ml-2"
                        src={instagram}
                        alt=""
                    />
                    <img
                        className="w-20 cursor-pointer hover:scale-[1.15] transition ml-2"
                        src={twitter}
                        alt=""
                    />
                </div>
            </div>
        </div>
    );
};

export default Footer;
