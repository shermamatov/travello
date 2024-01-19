import React from "react";
import { sliderTourArr } from "../../const";
import Card from "../../Cards/Card";

const Block3 = () => {
    return (
        <div>
            <div className="content pb-16 flex flex-col items-center">
                <strong className="text-lg text-[#5E6282] font-semibold">
                    Топ Туры
                </strong>
                <h2 className="text-4xl text-[#14183E] font-bold">
                    Лучшие Туры
                </h2>
                <div className="grid grid-cols-1 mob:grid-cols-2 md:grid-cols-3 gap-4 md:gap-10 mt-8">
                    {sliderTourArr.slice(0, 3).map((item) => (
                        <Card key={item.id} item={item} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Block3;
