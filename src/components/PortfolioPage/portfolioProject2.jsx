import React, { useState, useEffect } from "react";
import img1 from "/assets/renu/hero1.jpg";
import img2 from "/assets/renu/hero2.jpg";
import img3 from "/assets/renu/hero3.jpg";

export default function Portfolioproj2() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            <div className="h-screen bg-center bg-cover" style={{ backgroundImage: `url(${img1})` }}>
                <div className="flex items-center justify-center h-full text-3xl font-bold text-neutral-50">
                    {/* Content */}
                </div>
            </div>

            <div className="h-screen bg-center bg-cover transform-flip-x" style={{ backgroundImage: `url(${img2})`, transform: 'scaleX(-1)' }}>
                <div className="flex flex-col items-start justify-center h-full font-Source text-3xl font-bold text-neutral-50 pl-20" style={{ transform: 'scaleX(-1)' }}>
                    {/* Content */}
                </div>
            </div>

            <div className="h-screen bg-center bg-cover" style={{ backgroundImage: `url(${img3})` }}>
                <div className="flex items-center justify-center h-full text-3xl font-bold text-white rounded-lg">
                    <button className="inline-block rounded-full border border-[#205C6C] p-3 text-[#205C6C] hover:bg-[#205C6C] hover:text-white focus:outline-none focus:ring active:bg-indigo-500" onClick={openModal}>
                        <span className="sr-only"> Download </span>
                        <svg className="h-10 w-10" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Modal Component */}
            {isModalOpen && (
                <div className="fixed top-0 left-0 w-full h-full bg-white flex items-center justify-center z-50">
                    <div className="bg-white p-5 rounded-lg shadow-lg text-center">
                        <p>Direct viewing options have been revoked from the website for copyright issues. If you are interested in viewing this work, please contact the studio or the artists.</p>
                        <button onClick={closeModal} className="mt-4 bg-gray-200 p-2 rounded">Close</button>
                    </div>
                </div>
            )}
        </>
    );
}
