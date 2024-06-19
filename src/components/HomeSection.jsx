import React from 'react';
import homeBg from '../assets/homeBg.webp';

function HomeSection() {
    return (
        <section className="relative m-4 flex justify-around items-center h-[47rem] bg-gray-100 border  rounded-lg shadow text-6xl  font-extralight">
            <img
                className="absolute z-0 left-0 top-0 w-full h-full opacity-55"
                src={homeBg}
                alt={homeBg}
            />
            <span className="absolute z-10 top-0 left-0 w-full h-full bg-[#fcfcfc99]"></span>
            <h1 className="z-20">Welcome</h1>
        </section>
    );
}

export default HomeSection;
