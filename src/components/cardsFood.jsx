import React from "react";

const CardsFood = ({title, description, image}) => { 
    return (
        <div className="w-[305px] h-[315px] bg-gray-100 shadow-md rounded-xl flex-col items-center justify-center content-center ml-30 mt-15">
            <div className="w-full h-[218px] bg-gray-500 shadow-md rounded-xl flex justify-center">
            </div>
            <p className="text-gray-500 ml-2 mt-4">Dairy Free</p>
            <h3 className="font-bold text-black ml-2">Russian Salad</h3>
            <p className="font-bold text-orange-500 ml-2">40 min</p>
        </div>
    );
};

export default CardsFood;