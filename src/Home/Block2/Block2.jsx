import React from "react";
import icon1 from "../../assets/block2_icon1.svg";
import icon2 from "../../assets/block2_icon2.png";
import icon3 from "../../assets/block2_icon3.svg";
import icon4 from "../../assets/block2_icon4.svg";
import "../Home.css";
const Block2 = () => {
    return (
        <div className="content mt-6 pb-16 sm:pb-32 flex flex-col items-center">
            <strong className="text-lg text-[#5E6282] font-semibold">
                Категория
            </strong>
            <h2 className="text-4xl text-[#14183E] font-bold">Лучший Сервис</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6">
                <div className="block2_card">
                    <img className="w-[50%] sm:w-[35%]" src={icon1} alt="" />
                    <h4 className="text-xl font-bold text-[#14183E]">Даты</h4>
                    <p className="text-sm sm:text-lg text-[#5E6282] font-normal">
                        Вы можете выбрать дни которые подходят вам.
                    </p>
                </div>
                <div className="block2_card">
                    <img className="w-[65%] sm:w-[45%]" src={icon2} alt="" />
                    <h4 className="font-bold text-[#14183E]">Транспорт</h4>
                    <p className="text-sm sm:text-lg text-[#5E6282] font-normal">
                        Выберите транспорт который вам подходит.
                    </p>
                </div>
                <div className="block2_card">
                    <img className="w-[50%] sm:w-[35%]" src={icon3} alt="" />
                    <h4 className="font-bold text-[#14183E]">
                        неповторимый тур
                    </h4>
                    <p className="text-sm sm:text-lg text-[#5E6282] font-normal">
                        Составьте свой личный тур.
                    </p>
                </div>
                <div className="block2_card">
                    <img className="w-[50%] sm:w-[35%]" src={icon4} alt="" />
                    <h4 className="font-bold text-[#14183E]">Гиды</h4>
                    <p className="text-sm sm:text-lg text-[#5E6282] font-normal">
                        Выберите себе наилучшего гида.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Block2;
