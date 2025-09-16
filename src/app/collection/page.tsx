"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

// Reusable Filter Section
const FilterSection = ({
    title,
    children,
}: {
    title: string;
    children: React.ReactNode;
}) => {
    const [open, setOpen] = useState(true);

    return (
        <div className="mb-6 border-b border-gray-200 pb-7">
            <button
                onClick={() => setOpen(!open)}
                className="flex items-center justify-between w-full text-lg font-semibold text-[#343636] mb-3"
            >
                {title}
                <span
                    className={`transform transition-transform cursor-pointer ${open ? "rotate-180" : "rotate-0"
                        }`}
                >
                    <Image src="/icons/downArrow-black.svg" alt="Arrow" width={12} height={12} />
                </span>
            </button>
            {open && <div className="space-y-2">{children}</div>}
        </div>
    );
};

export default function Collection() {
    const [filters, setFilters] = useState({
        orientation: "Landscape",
        size: "Panoramic",
        gallery: "Albany, NY",
    });

    const [currentPage, setCurrentPage] = useState(1);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false); // 🔥 NEW STATE
    const itemsPerPage = 6;

    const galleryData = [
        { id: 1, image: "/images/home/gallery1.png", width: 370, height: 290, title: "Albany, NY", link: "#" },
        { id: 2, image: "/images/home/gallery2.png", width: 370, height: 290, title: "Chicago, IL", link: "#" },
        { id: 3, image: "/images/home/gallery3.png", width: 370, height: 290, title: "Belgium", link: "#" },
        { id: 4, image: "/images/home/gallery4.png", width: 370, height: 290, title: "Birmingham, UK", link: "#" },
        { id: 5, image: "/images/home/gallery5.png", width: 370, height: 290, title: "Dallas, TX", link: "#" },
        { id: 6, image: "/images/home/gallery6.png", width: 370, height: 290, title: "Gold Coast, AU", link: "#" },
        { id: 7, image: "/images/home/gallery7.png", width: 370, height: 290, title: "Greenville, SC", link: "#" },
        { id: 8, image: "/images/home/gallery8.png", width: 370, height: 290, title: "Denver, CO", link: "#" },
        { id: 9, image: "/images/home/gallery9.png", width: 370, height: 290, title: "Columbus, OH", link: "#" },
        { id: 10, image: "/images/home/gallery10.png", width: 370, height: 290, title: "Indianapolis, IN", link: "#" },
        { id: 11, image: "/images/home/gallery11.png", width: 370, height: 290, title: "New York City, NY", link: "#" },
        { id: 12, image: "/images/home/gallery12.png", width: 370, height: 290, title: "Pittsburgh, PA", link: "#" },
    ];

    // Pagination
    const totalPages = Math.ceil(galleryData.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const paginatedData = galleryData.slice(startIndex, startIndex + itemsPerPage);

    const handlePageChange = (page: number) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
        }
    };

    const handleFilterChange = (key: string, value: string) => {
        setFilters((prev) => ({ ...prev, [key]: value }));
    };

    return (
        <section className="sectionSpace">
            <div className="content-container">
                <div className="grid grid-cols-1 lg:grid-cols-[250px_auto] xl:grid-cols-[300px_auto] gap-6 xl:gap-[80px]">

                    {/* Sidebar Filters */}
                    <aside
                        className={`fixed sm:top-[125px] top-[112px] left-0 h-full w-72 lg:w-full bg-white z-40 p-6 pr-2 transform transition-transform duration-300 ease-in-out
    ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}
    lg:static lg:translate-x-0 lg:block
  `}
                    >
                        <div className="h-full overflow-y-auto max-h-screen pb-20 pr-3">
                            {/* Close (Mobile Only) */}
                            <div className="flex items-center justify-between lg:hidden mb-6">
                                <h3 className="text-lg font-semibold text-[#333333]">Filters</h3>
                                <button onClick={() => setIsSidebarOpen(false)}>
                                    <Image src="/icons/crossBlack.svg" alt="Close" width={20} height={20} />
                                </button>
                            </div>

                            <h3 className="hidden lg:flex text-lg font-semibold text-[#333333] mb-7 pb-7 border-b border-[#EDF1F3] items-center gap-4">
                                <Image src="/icons/filter-icon.svg" alt="Filter" width={20} height={20} />
                                Hide Filters
                            </h3>

                            {/* Orientation */}
                            <FilterSection title="Orientation">
                                <label className="flex items-center gap-3 text-base font-normal text-[#808080] cursor-pointer select-none">
                                    <input
                                        type="checkbox"
                                        checked={filters.orientation === "Landscape"}
                                        onChange={() => handleFilterChange("orientation", "Landscape")}
                                        className="sr-only peer"
                                    />
                                    <span className="w-5 h-5  rounded-sm flex items-center justify-center 
                                    peer-checked:bg-[#73929B] bg-[#EDF1F3] transition-colors">
                                        <svg
                                            className="w-3 h-3 text-white opacity-0 peer-checked:opacity-100 transition-opacity"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="3"
                                            viewBox="0 0 24 24"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                        </svg>
                                    </span>
                                    Landscape
                                </label>
                            </FilterSection>

                            {/* Size Group */}
                            <FilterSection title="Size Group">
                                <label className="flex items-center gap-3 text-base font-normal text-[#808080] cursor-pointer select-none">
                                    <input
                                        type="checkbox"
                                        checked={filters.size === "Panoramic"}
                                        onChange={() => handleFilterChange("size", "Panoramic")}
                                        className="sr-only peer"
                                    />
                                    <span className="w-5 h-5 rounded-sm flex items-center justify-center 
                       peer-checked:bg-[#73929B] bg-[#EDF1F3] transition-colors">
                                        <svg
                                            className="w-3 h-3 text-white opacity-0 peer-checked:opacity-100 transition-opacity"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="3"
                                            viewBox="0 0 24 24"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                        </svg>
                                    </span>
                                    Panoramic
                                </label>

                                <label className="flex items-center gap-3 text-base font-normal text-[#808080] cursor-pointer select-none">
                                    <input
                                        type="checkbox"
                                        checked={filters.size === "Standard"}
                                        onChange={() => handleFilterChange("size", "Standard")}
                                        className="sr-only peer"
                                    />
                                    <span className="w-5 h-5 rounded-sm flex items-center justify-center 
                       peer-checked:bg-[#73929B] bg-[#EDF1F3] transition-colors">
                                        <svg
                                            className="w-3 h-3 text-white opacity-0 peer-checked:opacity-100 transition-opacity"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="3"
                                            viewBox="0 0 24 24"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                        </svg>
                                    </span>
                                    Standard
                                </label>
                            </FilterSection>

                            {/* Image Galleries */}
                            <FilterSection title="Image Galleries">
                                <ul className="max-h-[200px] overflow-y-auto text-base font-normal text-[#808080] space-y-2">
                                    {[
                                        "Best Sellers",
                                        "Albany, NY",
                                        "Amsterdam, NL",
                                        "Chicago, IL",
                                        "Belgium",
                                        "Birmingham, UK",
                                    ].map((city) => (
                                        <li key={city}>
                                            <label className="flex items-center gap-3 cursor-pointer select-none">
                                                <input
                                                    type="checkbox"
                                                    checked={filters.gallery === city}
                                                    onChange={() => handleFilterChange("gallery", city)}
                                                    className="sr-only peer"
                                                />
                                                <span className="w-5 h-5 rounded-sm flex items-center justify-center 
                             peer-checked:bg-[#73929B] bg-[#EDF1F3] transition-colors">
                                                    <svg
                                                        className="w-3 h-3 text-white opacity-0 peer-checked:opacity-100 transition-opacity"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        strokeWidth="3"
                                                        viewBox="0 0 24 24"
                                                    >
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                                    </svg>
                                                </span>
                                                {city}
                                            </label>
                                        </li>
                                    ))}
                                </ul>
                            </FilterSection>

                            {/* Secure Shopping */}
                            <FilterSection title="Secure Shopping">
                                <div >
                                    <Image src="/images/collection/secure.svg" alt="secure" width={90} height={72} />
                                </div>
                            </FilterSection>
                        </div>
                    </aside>

                    {/* Overlay for Mobile */}
                    {isSidebarOpen && (
                        <div
                            className="fixed inset-0 bg-black/60 bg-opacity-40 z-30 lg:hidden"
                            onClick={() => setIsSidebarOpen(false)}
                        />
                    )}

                    {/* Filter Toggle Button (Mobile Only) */}
                    <button
                        onClick={() => setIsSidebarOpen(true)}
                        className="fixed top-1/2 left-0 z-40 flex items-center justify-center ms:w-12 w-10 ms:h-12 h-10 bg-[#73929B] text-white rounded-r-md shadow-lg lg:hidden focus:outline-none"
                    >
                        <Image src="/icons/filter-icon-white.svg" alt="Filter" width={20} height={20} />
                    </button>

                    {/* Product Collection */}
                    <div>
                        <div className="flex items-center justify-between md:mb-10 mb-6 flex-col gap-4 sm:flex-row">
                            <h2 className="mainHeading mb-0">Albany, NY Skyline Photos</h2>
                            <Image src="/icons/plus.svg" alt="Sort" width={36} height={28} className="cursor-pointer" />
                        </div>
                        {/* Gallery Grid */}
                        <ul className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-10 sm:mb-[30px]">
                            {paginatedData.map((item) => (
                                <li key={item.id} className="relative">
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        width={item.width}
                                        height={item.height}
                                        className="w-full object-cover"
                                    />
                                    <Link href={item.link} className="mt-3 md:mt-5 block text-center">
                                        <h3 className="leading-tight text-base md:text-lg font-normal text-[#666666] hover:text-black">
                                            {item.title}
                                        </h3>
                                    </Link>
                                </li>
                            ))}
                        </ul>

                        {/* Pagination */}
                        <div className="flex justify-center items-center gap-2 mt-6">
                            <button
                                onClick={() => handlePageChange(currentPage - 1)}
                                disabled={currentPage === 1}
                                className="text-lg font-medium px-3 py-1 border border-[#EAEAEA] rounded disabled:opacity-50 cursor-pointer w-10 h-10"
                            >
                                <Image src="/icons/downArrow-black.svg" className="-rotate-90" alt="Previous" width={12} height={12} />
                            </button>

                            {[...Array(totalPages)].map((_, index) => (
                                <button
                                    key={index + 1}
                                    onClick={() => handlePageChange(index + 1)}
                                    className={`text-lg font-medium px-3 py-1 border border-[#EAEAEA] rounded cursor-pointer w-10 h-10 ${currentPage === index + 1 ? "bg-[#73929B] border-[#73929B] text-white w-10 h-10" : "hover:bg-gray-100"
                                        }`}
                                >
                                    {index + 1}
                                </button>
                            ))}

                            <button
                                onClick={() => handlePageChange(currentPage + 1)}
                                disabled={currentPage === totalPages}
                                className="text-lg font-medium px-3 py-1 border border-[#EAEAEA] rounded disabled:opacity-50 cursor-pointer w-10 h-10"
                            >
                                <Image src="/icons/downArrow-black.svg" className="rotate-90" alt="Previous" width={12} height={12} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
}
