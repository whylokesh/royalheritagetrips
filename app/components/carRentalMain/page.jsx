"use client"
import React from 'react';
import CarData from "@/car.json";

const CarRentalMain = () => {
    return (
        <>
            <div className="text-black-400 bg-black body-font mt-5">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-wrap -m-4">
                        {CarData.map((car, index) => (
                            <div key={index} className="lg:w-1/4 md:w-1/2 p-4 w-full">
                                <a className="block relative h-48 rounded overflow-hidden">
                                    <img alt="car" className="object-cover object-center w-full h-full block" src={car.image_url} />
                                </a>
                                <div className="mt-4">
                                    <h3 className="text-black-500 text-xs tracking-widest title-font mb-1">{car.category}</h3>
                                    <h2 className="text-white title-font text-lg font-medium">{car.name}</h2>
                                    <p className="mt-1">{` ${car.price} - INR`}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default CarRentalMain;
