"use client";

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper";
import { Thumbs } from "swiper/modules";
import "swiper/css";
import "swiper/css/thumbs";

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

    // ✅ new option section
    const finishTypes = ["Gloss", "Matte", "Textured"];

    const images = [
        "/images/product-details/product01.png",
        "/images/product-details/product01.png",
        "/images/product-details/product01.png",
        "/images/product-details/product01.png",
        "/images/product-details/product01.png",
        "/images/product-details/product01.png",
    ];

    return (
        <section className="sectionSpace">
            <div className="content-container">
                <div className="grid grid-cols-1 lg:grid-cols-[600px_auto] xl:grid-cols-[840px_auto] gap-8 lg:gap-[50px] xl:gap-[100px]">
                    {/* Left Swiper */}
                    <div className="flex lg:flex-row gap-4">
                        {/* Thumbnails */}
                        <Swiper
                            onSwiper={(swiper) => setThumbsSwiper(swiper)}
                            direction="vertical"
                            spaceBetween={10}
                            slidesPerView={5}
                            freeMode={true}
                            watchSlidesProgress
                            className="thumbsSwiper h-[655px]"
                        >
                            {images.map((img, idx) => (
                                <SwiperSlide key={idx} className="cursor-pointer">
                                    <img
                                        src={img}
                                        alt={`Thumb ${idx}`}
                                        className="w-full h-[110px] object-cover p-1 border"
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
                    <div className="mt-8 lg:mt-0 w-full">
                        <h2 className="mainHeading text-left mb-2">
                            Albany Skyline Panorama
                        </h2>
                        <p className="text-base font-normal text-[#808080]">
                            SKU: albany_100_0540_pano
                        </p>

                        {/* Price */}
                        <div className="mt-5 pb-6 border-b border-[#EDF1F3] flex items-center">
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
                        <div className="mt-6 pb-6 border-b border-[#EDF1F3]">
                            <label className="block text-lg font-medium text-[#343636] mb-4">
                                Color
                            </label>
                            <div className="flex gap-6">
                                {colors.map((c) => (
                                    <button
                                        key={c.label}
                                        onClick={() => setSelectedColor(c.label)}
                                        className="flex flex-col items-center gap-2 focus:outline-none"
                                    >
                                        <div
                                            className={`cursor-pointer w-[95px] h-[95px] rounded-full overflow-hidden border-8 border-white
            ${selectedColor === c.label ? "ring-2 ring-[#73929B]" : ""}`}
                                        >
                                            <img
                                                src={c.img}
                                                alt={c.label}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                        <span
                                            className={`text-base font-normal ${selectedColor === c.label
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
                        <div className="mt-6 pb-6 border-b border-[#EDF1F3]">
                            <label className="block text-lg font-medium text-[#343636] mb-4">
                                Product Type ($25.00)
                            </label>
                            <div className="flex gap-6 overflow-x-auto max-w-[655px] p-2">
                                {productTypes.map((type) => (
                                    <button
                                        key={type.label}
                                        onClick={() => setSelectedType(type.label)}
                                        className="flex flex-col items-center gap-2 min-w-[80px] focus:outline-none"
                                    >
                                        <div
                                            className={`w-[80px] h-[80px] overflow-hidden rounded-md p-2 cursor-pointer 
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
                                            className={`text-base font-normal ${selectedType === type.label
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
                        <div className="mt-6 pb-7 border-b border-[#EDF1F3]">
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
                        <div className="mt-6 pb-7 border-b border-[#EDF1F3]">
                            <label className="block text-lg font-medium text-[#343636] mb-4">
                                Paper Type
                            </label>
                            <div className="flex gap-3">
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
                        <div className="mt-6 pb-7 border-b border-[#EDF1F3]">
                            <label className="block text-lg font-medium text-[#343636] mb-4">
                                Finish Type
                            </label>
                            <div className="flex gap-3">
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
                        <div className="mt-6 ">
                            <label className="block text-lg font-medium text-[#343636] mb-4">
                                Quantity
                            </label>
                            {/* Quantity (reused) */}
                            <div className="flex items-center border border-[#E8E8E8] w-max mb-7">
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

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-7">
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
                            <div className="mt-7 text-base font-normal text-[#808080] py-5 p-6 flex justify-center border border-[#EDF1F3] items-center uppercase gap-2">
                                <img src="/images/product-details/help-circle.svg" width={24} height={24} alt="info" />   Commercial Licensing or Custom Request, Ask Us!
                            </div>
                        </div>
                    </div>
                </div>
                {/* Sticky bottom action bar */}
                <div className="fixed bottom-0 left-0 w-full bg-white shadow-[0_-2px_6px_rgba(0,0,0,0.08)] border-t border-[#EDF1F3] z-40">
                    <div className="content-container flex flex-col md:flex-row items-center justify-between py-5 gap-4">

                        {/* Product Info */}
                        <div>
                            <h3 className="text-[30px] font-semibold text-[#343636]">
                                Albany Skyline Panorama
                            </h3>
                            <p className="text-base font-normal text-[#808080]">SKU: albany_100_0540_pano</p>
                        </div>

                        {/* Price + Actions */}
                        <div className="flex items-center gap-7">
                            <div className="flex items-center gap-2">
                                <span className="text-[26px] font-semibold text-[#343636]">$45.00</span>
                                <span className="text-lg font-bold text-[#C2C3C3] line-through">$55.45</span>
                            </div>

                            {/* Add to Cart (reused) */}
                            <button className="bg-[#73929B] uppercase text-base font-semibold text-white px-4 py-2.5 min-w-48 hover:bg-[#5c7881] transition cursor-pointer">
                                Add to Cart
                            </button>

                            {/* Wishlist (reused) */}
                            <button className="border border-[#73929B] uppercase text-base font-semibold text-[#73929B] px-4 py-2.5 min-w-48 hover:bg-[#f9f9f9] transition cursor-pointer">
                                Wishlist
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
