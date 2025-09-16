"use client";

import { navLinks } from "./navLinks";
import SideMenu from "../sideMenu";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Nav() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <section className="sticky top-0 inset-x-0 z-50 group">
      {/* Top bar */}
      <div className="h-10 flex justify-center items-center text-white text-xs sm:text-sm text-center md:text-base font-medium uppercase bg-[#343636] leading-tight px-5">
        <p>Summer is here! Sale!! use code spring15 for 15% off canvas and prints</p>
      </div>

      {/* Main navbar */}
      <div
        className={`relative  mx-auto duration-200 bg-white ${isHome ? "" : "shadow-sm"
          }`}
      >
        <nav className="content-container flex items-center justify-between w-full h-full">
          {/* SideMenu */}
          <div className="h-full flex items-center lg:hidden order-1 md:ml-2 ml-1">
            <SideMenu />
          </div>

          {/* Logo */}
          <div className="flex mr-auto items-center h-full">
            <Link href="/" data-testid="nav-store-link">
              <Image
                src="/images/logo/logo.svg"
                alt="Logo"
                width={266}
                height={68}
                className="w-44 md:w-52 xl:w-auto"
              />
            </Link>
          </div>

          {/* Navigation links */}
          <div className="hidden lg:flex items-center gap-x-6 xl:gap-x-12 h-full flex-1 basis-0 justify-center mx-auto">
            {navLinks.map((link) => (
              <li key={link.id} className="list-none relative">
                <Link
                  href={link.href}
                  className="flex items-center capitalize text-base xl:text-lg text-[#333] font-normal lg:py-8"
                >
                  {link.label}
                  {link.subMenu && (
                    <span className="ml-2 transition-transform duration-300">
                      <Image src="/icons/downArrow.svg" alt="down" width={12} height={12} />
                    </span>
                  )}
                </Link>

                {/* Dropdown */}
                {link.subMenu && (
                  <ul className="absolute top-full left-0 w-40 mt-2 bg-white shadow-lg opacity-0 invisible duration-300 z-10">
                    {link.subMenu.map((sub) => (
                      <li key={sub.id} className="px-4 py-2 hover:bg-gray-100">
                        <Link href={sub.href} className="text-sm text-[#343636] block">
                          {sub.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </div>

          {/* Right icons */}
          <div className="flex items-center gap-x-2 sm:gap-x-4 xl:gap-x-6 h-full">
            <ul><li><Link href="#"><Image className="w-5 sm:w-auto" src="/icons/Search.svg" alt="" width={24} height={24} /></Link></li></ul>
            <ul><li><Link href="#"><Image className="w-5 sm:w-auto" src="/icons/user.svg" alt="" width={24} height={24} /></Link></li></ul>
            <ul><li><Link href="#"><Image className="w-5 sm:w-auto" src="/icons/shopping-cart.svg" alt="" width={24} height={24} /></Link></li></ul>
          </div>
        </nav>
      </div>
    </section>
  );
}
