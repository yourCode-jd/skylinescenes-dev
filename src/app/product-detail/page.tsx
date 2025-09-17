"use client";

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper";
import { Thumbs } from "swiper/modules";
import "swiper/css";
import "swiper/css/thumbs";
import Image from 'next/image'

export default function Page() {
    const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);
    const [selectedColor, setSelectedColor] = useState("Color");
    const [selectedType, setSelectedType] = useState("Digital Stock");
    const [selectedSize, setSelectedSize] = useState('7"x20"');
    const [selectedPaper, setSelectedPaper] = useState("Satin");
    const [selectedFinish, setSelectedFinish] = useState("Gloss"); // ✅ new state
    const [quantity, setQuantity] = useState(1);

    const colors = [
        { label: "Color", img: "/images/product-details/product01.png" },
        { label: "Black & White", img: "/images/product-details/product01.png" },
        { label: "Sepia", img: "/images/product-details/product01.png" },
    ];

    const productTypes = [
        { label: "Digital Stock", img: "/images/product-details/product01.png" },
        { label: "Unframed Prints", img: "/images/product-details/product01.png" },
        { label: "Framed & Matted", img: "/images/product-details/product01.png" },
        { label: "Mounted Canvas", img: "/images/product-details/product01.png" },
        { label: "Aluminum Metal Prints", img: "/images/product-details/product01.png" },
        { label: "Acrylic Prints", img: "/images/product-details/product01.png" },
    ];

    const sizes = [
        '7"x20"',
        '8"x22"',
        '10"x28"',
        '11"x30"',
        '12"x34"',
        '14"x40"',
        '16"x46"',
        '22"x60"',
        '26"x72"',
    ];
    const paperTypes = ["Satin", "Matte", "Glossy"];

    // new option section
    const finishTypes = ["Gloss", "Matte", "Textured"];

    const images = [
        "/images/product-details/product01.png",
        "/images/product-details/product01.png",
        "/images/product-details/product01.png",
        "/images/product-details/product01.png",
        "/images/product-details/product01.png",
        "/images/product-details/product01.png",
    ];

    const featureData = [
        {
            id: 1,
            image: "/images/home/feature1.png",
            width: 288,
            height: 290,
            title: "Aerial of Downtown Raleigh, North Carolina",
            priceText: "Started from $9",
            link: "#",
        },
        {
            id: 2,
            image: "/images/home/feature2.png",
            width: 288,
            height: 290,
            title: "The Faraglioni Rocks",
            priceText: "Started from $9.45",
            link: "#",
        },
        {
            id: 3,
            image: "/images/home/feature3.png",
            width: 288,
            height: 290,
            title: "Charlotte Skyline with Bank of America Stadium",
            priceText: "Started from $40",
            link: "#",
        },
        {
            id: 4,
            image: "/images/home/feature4.png",
            width: 288,
            height: 290,
            title: "Gateway Arch, Saint Louis, Missouri",
            priceText: "Started from $9.45",
            link: "#",
        },
        {
            id: 5,
            image: "/images/home/feature5.png",
            width: 288,
            height: 290,
            title: "Punta Carena Lighthouse on Isle of Capri",
            priceText: "Started from $9.45",
            link: "#",
        },
    ]

    return (
        <>
            <section className="sectionSpace">
                <div className="content-container">
                    <div className="grid grid-cols-1 lg:grid-cols-[600px_auto] xl:grid-cols-[840px_auto] gap-8 lg:gap-[50px] 2xl:gap-[100px]">
                        {/* Left Swiper */}
                        <div className="flex flex-col lg:flex-row gap-4">
                            {/* Thumbnails */}
                            <Swiper
                                onSwiper={(swiper) => setThumbsSwiper(swiper)}
                                spaceBetween={10}
                                slidesPerView={4}
                                freeMode={true}
                                watchSlidesProgress
                                className="thumbsSwiper order-2 lg:order-0 mt-0 
               h-auto lg:h-[655px] w-full lg:w-auto"
                                // Mobile → horizontal, Desktop → vertical
                                direction="horizontal"
                                breakpoints={{
                                    1024: {
                                        direction: "vertical",
                                        slidesPerView: 5,
                                    },
                                }}
                            >
                                {images.map((img, idx) => (
                                    <SwiperSlide key={idx} className="cursor-pointer">
                                        <img
                                            src={img}
                                            alt={`Thumb ${idx}`}
                                            className="w-full md:h-[110px] h-[60px] object-cover p-1 border"
                                        />
                                    </SwiperSlide>
                                ))}
                            </Swiper>

                            {/* Main slider */}
                            <Swiper
                                style={
                                    {
                                        "--swiper-navigation-color": "#000",
                                        "--swiper-pagination-color": "#000",
                                    } as React.CSSProperties
                                }
                                spaceBetween={10}
                                thumbs={{ swiper: thumbsSwiper }}
                                modules={[Thumbs]}
                                className="mainSwiper w-full"
                            >
                                {images.map((img, idx) => (
                                    <SwiperSlide key={idx}>
                                        <img src={img} alt={`Product ${idx}`} className="w-full" />
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>

                        {/* Right product description */}
                        <div className="mt-0 w-full">
                            <h2 className="mainHeading text-left mb-2">
                                Albany Skyline Panorama
                            </h2>
                            <p className="text-base font-normal text-[#808080]">
                                SKU: albany_100_0540_pano
                            </p>

                            {/* Price */}
                            <div className="md:mt-5 mt-4 md:pb-6 pb-4 border-b border-[#EDF1F3] flex items-center">
                                <span className="text-[26px] font-semibold text-[#343636]">
                                    $45.00
                                </span>
                                <span className="text-lg text-[#C2C3C3] line-through ml-1">
                                    $55.45
                                </span>
                                <span className="uppercase text-sm text-white font-semibold bg-[#73929B] py-1.5 px-3.5 ml-5 rounded-full">
                                    25% off
                                </span>
                            </div>

                            {/* Color selector */}
                            <div className="mt-4 md:mt-6 pb-4 md:pb-6 border-b border-[#EDF1F3]">
                                <label className="block text-lg font-medium text-[#343636] mb-4">
                                    Color
                                </label>
                                <div className="flex md:gap-6 gap-2">
                                    {colors.map((c) => (
                                        <button
                                            key={c.label}
                                            onClick={() => setSelectedColor(c.label)}
                                            className="flex flex-col items-center gap-2 focus:outline-none"
                                        >
                                            <div
                                                className={`cursor-pointer md:w-[95px] w-[65px] md:h-[95px] h-[65px] rounded-full overflow-hidden md:border-8 border-4 border-white
            ${selectedColor === c.label ? "ring-2 ring-[#73929B]" : ""}`}
                                            >
                                                <img
                                                    src={c.img}
                                                    alt={c.label}
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>
                                            <span
                                                className={`md:text-base text-sm font-normal ${selectedColor === c.label
                                                    ? "text-[#343636]"
                                                    : "text-[#808080]"
                                                    }`}
                                            >
                                                {c.label}
                                            </span>
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Product Type */}
                            <div className="mt-4 md:mt-6 pb-4 md:pb-6 border-b border-[#EDF1F3]">
                                <label className="block text-lg font-medium text-[#343636] mb-4">
                                    Product Type ($25.00)
                                </label>
                                <div className="flex md:gap-6 gap-4 flex-wrap overflow-x-auto p-2">
                                    {productTypes.map((type) => (
                                        <button
                                            key={type.label}
                                            onClick={() => setSelectedType(type.label)}
                                            className="flex flex-col items-center gap-2 w-[80px] focus:outline-none"
                                        >
                                            <div
                                                className={`md:w-[80px] w-[60px] md:h-[80px] h-[60px] overflow-hidden rounded-md p-2 cursor-pointer 
            ${selectedType === type.label
                                                        ? "ring-2 ring-[#73929B] rounded-none"
                                                        : ""
                                                    }`}
                                            >
                                                <img
                                                    src={type.img}
                                                    alt={type.label}
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>
                                            <span
                                                className={`md:text-base text-sm font-normal ${selectedType === type.label
                                                    ? "text-[#343636]"
                                                    : "text-[#808080]"
                                                    }`}
                                            >
                                                {type.label}
                                            </span>
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Size selector */}
                            <div className="mt-4 md:mt-6 pb-4 md:pb-6 border-b border-[#EDF1F3]">
                                <label className="block text-lg font-medium text-[#343636] mb-4">
                                    Size ($45.00)
                                </label>
                                <div className="flex flex-wrap gap-2 pt-1">
                                    {sizes.map((size) => (
                                        <button
                                            key={size}
                                            onClick={() => setSelectedSize(size)}
                                            className={`px-3 py-1.5 border rounded-full min-w-24 text-[15px] cursor-pointer  ${selectedSize === size
                                                ? "bg-[#73929B] text-white"
                                                : " text-[#808080] border-[#EAEAEA]"
                                                }`}
                                        >
                                            {size}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Paper Type */}
                            <div className="mt-4 md:mt-6 pb-4 md:pb-6 border-b border-[#EDF1F3]">
                                <label className="block text-lg font-medium text-[#343636] mb-4">
                                    Paper Type
                                </label>
                                <div className="flex flex-wrap gap-3">
                                    {paperTypes.map((paper) => (
                                        <button
                                            key={paper}
                                            onClick={() => setSelectedPaper(paper)}
                                            className={`px-3 py-1.5 border rounded-full min-w-24 text-[15px] cursor-pointer     ${selectedPaper === paper
                                                ? "bg-[#73929B] text-white"
                                                : "text-[#808080] border-[#EAEAEA]"
                                                }`}
                                        >
                                            {paper}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* New Finish Type Section */}
                            <div className="mt-4 md:mt-6 pb-4 md:pb-6 border-b border-[#EDF1F3]">
                                <label className="block text-lg font-medium text-[#343636] mb-4">
                                    Finish Type
                                </label>
                                <div className="flex flex-wrap gap-3">
                                    {finishTypes.map((finish) => (
                                        <button
                                            key={finish}
                                            onClick={() => setSelectedFinish(finish)}
                                            className={`px-3 py-1.5 border rounded-full min-w-24 text-[15px] cursor-pointer ${selectedFinish === finish
                                                ? "bg-[#73929B] text-white"
                                                : "text-[#808080] border-[#EAEAEA]"
                                                }`}
                                        >
                                            {finish}
                                        </button>
                                    ))}
                                </div>
                            </div>
                            <div className="md:mt-6 mt-4 ">
                                <label className="block text-lg font-medium text-[#343636] mb-4">
                                    Quantity
                                </label>
                                {/* Quantity (reused) */}
                                <div className="flex items-center border border-[#E8E8E8] w-max md:mb-7 mb-4">
                                    <button
                                        className="px-3 w-12 py-2 text-2xl cursor-pointer text-[#808080]"
                                        onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
                                    >
                                        −
                                    </button>
                                    <input
                                        // type="number"
                                        min="1"
                                        value={quantity}
                                        onChange={(e) => setQuantity(Number(e.target.value))}
                                        className="w-16 text-center focus:outline-none text-lg font-semibold text-[#343636]"
                                    />
                                    <button
                                        className="px-3 w-12 py-2 text-2xl cursor-pointer text-[#808080]"
                                        onClick={() => setQuantity((prev) => prev + 1)}
                                    >
                                        +
                                    </button>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 md:gap-7 gap-3">
                                    {/* Add to Cart (reused) */}
                                    <button className="bg-[#73929B] text-base font-semibold text-white px-4 py-2.5 uppercase hover:bg-[#5c7881] transition cursor-pointer">
                                        Add to Cart
                                    </button>

                                    {/* Wishlist (reused) */}
                                    <button className="border text-base font-semibold border-[#73929B] text-[#73929B] px-4 py-2.5 uppercase hover:bg-[#f9f9f9] transition cursor-pointer">
                                        Wishlist
                                    </button>
                                </div>
                                {/* info */}
                                <div className="md:mt-7 mt-4 md:text-base text-sm font-normal text-[#808080] md:py-5 p-3 flex justify-center border border-[#EDF1F3] items-center uppercase gap-2">
                                    <img src="/images/product-details/help-circle.svg" width={24} height={24} alt="info" />   Commercial Licensing or Custom Request, Ask Us!
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Sticky bottom action bar */}
                    <div className="fixed bottom-0 left-0 w-full bg-white shadow-[0_-2px_6px_rgba(0,0,0,0.08)] border-t border-[#EDF1F3] z-40">
                        <div className="content-container flex flex-col lg:flex-row items-center justify-between py-5 md:gap-4 gap-2">

                            {/* Product Info */}
                            <div>
                                <h3 className="md:text-[30px] text-[24px] font-semibold text-[#343636]">
                                    Albany Skyline Panorama
                                </h3>
                                <p className="text-center md:text-left md:text-base text-sm font-normal text-[#808080]">SKU: albany_100_0540_pano</p>
                            </div>

                            {/* Price + Actions */}
                            <div className="flex flex-col w-full md:w-auto md:flex-row items-center md:gap-7 gap-2">
                                <div className="flex  items-center gap-2">
                                    <span className="md:text-[26px] text-[22px] font-semibold text-[#343636]">$45.00</span>
                                    <span className="text-lg font-bold text-[#C2C3C3] line-through">$55.45</span>
                                </div>

                                {/* Add to Cart (reused) */}
                                <button className="bg-[#73929B] uppercase text-base font-semibold text-white px-4 py-2.5 md:min-w-48 min-w-full w-full md:w-auto hover:bg-[#5c7881] transition cursor-pointer">
                                    Add to Cart
                                </button>

                                {/* Wishlist (reused) */}
                                <button className="border border-[#73929B] uppercase text-base font-semibold text-[#73929B] px-4 py-2.5 md:min-w-48 min-w-full w-full md:w-auto hover:bg-[#f9f9f9] transition cursor-pointer">
                                    Wishlist
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
            <section className="bg-[#EDF1F3] sectionSpace">
                <div className="content-container">

                    <h2 className="mainHeading md:mb-8 mb-4 text-left">Description</h2>
                    <p className="md:text-lg text-base font-normal text-[#666666]">
                        A skyline image is more than just a photograph—it is a portrait of a city’s character and spirit. This stunning piece captures the perfect balance of architectural beauty, cultural identity, and modern energy, making it an ideal choice for anyone who admires urban landscapes. From soaring skyscrapers that symbolize progress to historic landmarks that reflect heritage, every structure within the frame tells its own unique story. The image is composed with remarkable detail, offering a sense of depth and perspective that draws the viewer in and makes them feel part of the city itself.
                        <br></br>
                        <br></br>
                        Depending on the time of day, the skyline transforms into an entirely new scene: mornings bring soft light and a fresh atmosphere, sunsets paint the sky in warm golden and crimson tones, and nighttime reveals a dazzling display of city lights against the dark horizon. Each version showcases the city in a new and inspiring way, making skyline photography timeless and versatile.
                        <br></br>
                        <br></br>
                        Whether displayed as fine art, canvas, or digital stock, this skyline image is perfect for adding sophistication and energy to homes, offices, or creative projects. It captures not just a view, but the heartbeat of the city.
                    </p>

                </div>
            </section>
            <section className='sectionSpace bg-White'>
                <div className='content-container'>
                    <h2 className='mainHeading'>Photos You May be Interested In</h2>
                    <p className='mainText max-w-2xl'>
                        Explore Skyline Scenes' most popular image galleries for breathtaking aerial photography, perfect for enhancing any space with stunning views.
                    </p>

                    <ul className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 md:gap-10 mt-[30px]  md:mt-[50px] lg:mt-[90px]'>
                        {featureData.map((item) => (
                            <li
                                key={item.id}
                                className="relative text-center"
                            >
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    width={item.width}
                                    height={item.height}
                                    className="w-full object-cover"
                                />
                                <h5 className='mt-4 mb-2 text-lg font-normal text-[#666666] leading-tight px-4'>
                                    {item.title}
                                </h5>
                                <p className='text-lg font-medium text-[#343636]'>{item.priceText}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </section >
        </>
    );
}
