import React from "react";
import block4_img from "../../assets/block4_img.svg";
import icon1 from "../../assets/block4_icon1.svg";
import icon2 from "../../assets/block4_icon2.svg";
import icon3 from "../../assets/block4_icon3.svg";
const Block4 = () => {
    return (
        <div className="content flex md:flex-row flex-col justify-between items-center">
            <div className="w-[100%] md:w-[55%]">
                <p className="text-[#5E6282] font-bold text-base lg:text-xl">
                    легко и быстро
                </p>
                <h2 className="text-[#14183E] font-semibold text-3xl lg:text-5xl mt-2 lg:mt-4">
                    Создай Свой <br /> Индивидуальный Тур
                </h2>
                <div className="flex mt-8">
                    <img className="w-10 lg:w-14" src={icon1} alt="" />
                    <div className="flex flex-col ml-4 justify-center">
                        <p className="text-[#5E6282] font-bold text-sm lg:text-lg">
                            Выбери место
                        </p>
                        <p className="text-[#5E6282] font-normal text-xs lg:text-lg">
                            Исследуй красоты нашей страны и обретай свое тихое
                            место.
                        </p>
                    </div>
                </div>
                <div className="flex mt-8">
                    <img className="w-10 lg:w-14" src={icon2} alt="" />
                    <div className="flex flex-col ml-4 justify-center">
                        <p className="text-[#5E6282] font-bold text-sm lg:text-lg">
                            Оплата
                        </p>
                        <p className="text-[#5E6282] font-normal text-xs lg:text-lg">
                            Visa, MasterCard,Amex, Discover.
                        </p>
                    </div>
                </div>
                <div className="flex mt-8">
                    <img className="w-10 lg:w-14" src={icon3} alt="" />
                    <div className="flex flex-col ml-4 justify-center">
                        <p className="text-[#5E6282] font-bold text-sm lg:text-lg">
                            Точка назначение
                        </p>
                        <p className="text-[#5E6282] font-normal text-xs lg:text-lg">
                            Предоставляется транспорт и вы сможете с легкостью
                            добраться до места назначения.
                        </p>
                    </div>
                </div>
            </div>
            <div className="-mt-14 sm:-mt-32 md:mt-0 w-[100%] md:w-[45%]">
                <img className="w-full" src={block4_img} alt="" />
            </div>
        </div>
    );
};

export default Block4;
