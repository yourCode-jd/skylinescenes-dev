import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Sell() {
    const aboutContent = [
        {
            id: 1,
            image: "/images/home/sell.png",
            width: 654,
            height: 434,
            title: "Sell Your Photos with Skyline Scenes",
            para: "Turn your passion for photography into profit! At Skyline Scenes, we welcome talented photographers to showcase and sell their cityscape and skyline images on our platform."

        },
    ]

    return (
        <section className="sectionSpace pb-0">
            <div className="content-container">
                <div className='md:p-10 p-6 pb-0 pr-0 xl:pr-0 lg:pb-20 xl:p-20  bg-[#EDF1F3] relative'>
                    {aboutContent.map((item) => (
                        <div
                            key={item.id}
                            className="grid grid-cols-1 lg:grid-cols-2 items-center gap-6 md:gap-12 lg:gap-24 "
                        >
                            {/* Left Side - Image */}
                            <div className='md:pr-10 pr-6 lg:pr-0 '>
                                <h3 className="leading-tight text-[26px] md:text-[40px] font-semibold text-[#343636] mb-4">
                                    {item.title}
                                </h3>
                                <p className="text-[16px] md:text-[18px] text-[#343636] mb-5">
                                    {item.para}
                                </p>
                                <button
                                    className="customBtn"
                                >
                                    Contact Us
                                </button>
                            </div>

                            {/* Right Side - Content */}
                            <div className='lg:absolute right-0 bottom-0'>
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    width={item.width}
                                    height={item.height}
                                    className="xl:w-full h-auto object-cover w-[550px] ml-auto lg:ml-unset"
                                />
                            </div>

                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
