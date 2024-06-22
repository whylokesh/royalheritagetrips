"use client";
import React from "react";
import ToursData from "@/csvjson.json";

const ProductMain = () => {
    const [tour, setTour] = React.useState(null);
    const [currentImageIndex, setCurrentImageIndex] = React.useState(0);
    React.useEffect(() => {
        let params;
        if (global?.window !== undefined) {
            params = new URLSearchParams(global.window.location.search);
        }
        const id = params?.get("id");

        if (id) {
            const matchedTour = ToursData.find(tour => tour.id == id);
            if (matchedTour) {
                setTour(matchedTour);
                console.log(matchedTour);
            }
        }
    }, []);

    const handleWhatsAppMessage = () => {
        if (tour) {
            const tourName = encodeURIComponent(tour.name);
            const whatsappLink = `https://wa.me/917976358709?text=hello+I+want+to+know+more+about+${tourName}`;
            global?.window?.location.assign(whatsappLink);
        }
    };

    const handleNextImage = () => {
        if (tour) {
            setCurrentImageIndex((currentImageIndex + 1) % tour.image_url.length);
        }
    };

    const handlePrevImage = () => {
        if (tour) {
            setCurrentImageIndex((currentImageIndex - 1 + tour.image_url.length) % tour.image_url.length);
        }
    };
    return (
        <>
            <div className="text-black-400 bg-black-900 body-font overflow-hidden lg:mt-5">
                <div className="container px-5 py-24 mx-auto">
                    <div className="lg:w-full mx-auto flex flex-wrap">
                        <div id="default-carousel" className="relative w-full" data-carousel="slide">
                            <div className="relative overflow-hidden rounded-lg lg:h-[35rem] md:h-[35rem] h-[20rem]">
                                {tour && tour.image_url.length > 0 && (
                                    <img
                                        src={tour.image_url[currentImageIndex]}
                                        className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 object-fit object-cover "
                                        alt={`Slide ${currentImageIndex + 1}`}
                                    />
                                )}
                            </div>

                            <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
                                {tour && tour.image_url.map((_, index) => (
                                    <button
                                        key={index}
                                        type="button"
                                        className={`w-3 h-3 rounded-full ${index === currentImageIndex ? 'bg-indigo-500' : 'bg-gray-500'}`}
                                        aria-current={index === currentImageIndex ? 'true' : 'false'}
                                        aria-label={`Slide ${index + 1}`}
                                        onClick={() => setCurrentImageIndex(index)}
                                    ></button>
                                ))}
                            </div>

                            <button
                                type="button"
                                className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                                onClick={handlePrevImage}
                            >
                                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                                    <svg className="w-6 h-6 text-white dark:text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4" />
                                    </svg>
                                    <span className="sr-only">Previous</span>
                                </span>
                            </button>
                            <button
                                type="button"
                                className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                                onClick={handleNextImage}
                            >
                                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                                    <svg className="w-6 h-6 text-white dark:text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
                                    </svg>
                                    <span className="sr-only">Next</span>
                                </span>
                            </button>
                        </div>

                        <div className="lg:w-full w-full lg:pl-10 lg:py-20 mt-6 lg:mt-0">

                            <h1 className="text-white text-3xl title-font font-medium mb-1">
                                {tour ? tour.name : ""}
                            </h1>

                            <h2 className="font-thin text-slate-300 text-xl">
                                {tour ? tour.sub_title : ""}
                            </h2>


                            <div className="flex mt-2">
                                <span className="flex items-center">
                                    <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6 text-indigo-400" viewBox="0 0 24 24">
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                    </svg>
                                    <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6 text-indigo-400" viewBox="0 0 24 24">
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                    </svg>
                                    <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6 text-indigo-400" viewBox="0 0 24 24">
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                    </svg>
                                    <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6 text-indigo-400" viewBox="0 0 24 24">
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                    </svg>
                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6 text-indigo-400" viewBox="0 0 24 24">
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                    </svg>
                                    <span className="ml-3">4 Reviews</span>
                                </span>
                            </div>

                            <div className="flex mb-6 items-center pb-5 border-b-2 border-black-800"></div>

                            <div className="flex flex-wrap w-full">
                                <pre className="w-full overflow-x-auto break-all whitespace-pre-wrap max-w-full text-white font-sans">
                                    {tour ? tour.description : ""}
                                </pre>
                            </div>

                            <div className="flex mt-6 items-center pb-5 border-b-2 border-black-800 mb-5"></div>
                            <div className="flex">
                                {/* <span className="title-font font-medium text-2xl text-white">
                                    {tour ? tour.price : ""}
                                </span> */}

                                <div class="flex ml-1 items-center">
                                    <span class="mr-3">Cars Available</span>
                                    <div class="relative">
                                        <select class="rounded border border-gray-700 focus:ring-2 focus:ring-indigo-900 bg-transparent appearance-none py-2 focus:outline-none focus:border-indigo-500 text-white pl-3 pr-10">
                                            {tour && tour.cars && tour.cars.split(",").map((carOption, index) => (
                                                <option key={index} className="bg-black">{carOption.trim()}</option>
                                            ))}
                                        </select>
                                        <span class="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4" viewBox="0 0 24 24">
                                                <path d="M6 9l6 6 6-6"></path>
                                            </svg>
                                        </span>
                                    </div>
                                </div>
                                <button className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded" onClick={handleWhatsAppMessage}>
                                    Book Now
                                </button>
                                <button className="rounded-full w-10 h-10 bg-black-800 p-0 border-0 inline-flex items-center justify-center text-black-500 ml-4">
                                    <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                        <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78L12 21.23l9.84-9.84a5.5 5.5 0 000-7.78z"></path>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProductMain;
