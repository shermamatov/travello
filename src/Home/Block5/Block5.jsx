import React from "react";
import ReviewsCard from "../../Cards/ReviewsCard";
import { reviews } from "../../const";

const Block5 = () => {
    return (
        <div className="content pb-16 md:pb-32 flex flex-col">
            <div>
                <h2 className="text-[#14183E] font-semibold text-3xl lg:text-5xl mt-2 lg:mt-4">
                    Отзывы
                </h2>
                <button className="mt-5 px-10 py-4 bg-[#5157DF] rounded-lg text-white">
                    оставить отзыв
                </button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-4 md:gap-8">
                {reviews.map((item) => (
                    <ReviewsCard key={item.id} item={item} />
                ))}
            </div>
        </div>
    );
};

export default Block5;
