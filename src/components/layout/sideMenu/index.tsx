"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

// Example navLinks
const navLinks = [
  { id: 1, label: "Home", href: "/" },
  { id: 2, label: "Store", href: "/store" },
  {
    id: 3,
    label: "Account",
    href: "/account",
    subMenu: [
      { id: 31, label: "Profile", href: "/account/profile" },
      { id: 32, label: "Orders", href: "/account/orders" },
    ],
  },
  { id: 4, label: "Cart", href: "/cart" },
];

const SideMenu = () => {
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <div className="h-full flex items-center">
      {/* Hamburger Button */}
      <button
        onClick={() => setOpen(true)}
        aria-label="Open menu"
        className="p-2 pr-0 focus:outline-none"
      >
        <Image
          src="/icons/hamburger.svg"
          alt="Menu"
          width={24}
          height={20}
          className="w-5 sm:w-auto"
        />
      </button>

      {/* Overlay + Side Menu (always mounted) */}
      <div
        className={`fixed inset-0 z-40 flex transition-opacity duration-300 ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
      >
        {/* Overlay */}
        <div
          className="fixed inset-0 bg-black/10 bg-opacity-50 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        />

        {/* Drawer */}
        <div
          className={`relative flex flex-col w-3/4 sm:w-1/3 lg:w-1/4 h-full 
          bg-white dark:bg-gray-900 text-gray-900 dark:text-white p-6 z-50 
          transform transition-transform duration-500 ease-in-out
          ${open ? "translate-x-0" : "-translate-x-full"}`}
        >
          {/* Close Button */}
          <div className="flex justify-end mb-6">
            <button
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className=""
            >
              <Image
                src="/icons/cross.svg"
                alt="Close"
                width={24}
                height={20}
              />
            </button>
          </div>

          {/* Navigation */}
          <ul className="flex flex-col gap-2 mb-auto">
            {navLinks.map((link, index) => (
              <li
                key={link.id}
                className="w-full"
                onMouseEnter={() => setActiveIndex(index)}
                onMouseLeave={() => setActiveIndex(null)}
              >
                <div className="flex items-center justify-between w-full">
                  <Link
                    href={link.href}
                    className="text-lg leading-10 hover:text-blue-600"
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </Link>

                  {/* Toggle sub menu on mobile */}
                  {link.subMenu && (
                    <button
                      type="button"
                      className="ml-2 sm:hidden"
                      onClick={() =>
                        setActiveIndex(activeIndex === index ? null : index)
                      }
                    >
                      <Image
                        src="/icons/downArrow-white.svg"
                        alt="Expand"
                        width={12}
                        height={12}
                        className={`transition-transform duration-300 ${activeIndex === index ? "rotate-180" : ""
                          }`}
                      />
                    </button>
                  )}
                </div>

                {/* Submenu */}
                {link.subMenu && (
                  <ul
                    className={`transition-all duration-500 ease-in-out overflow-hidden sm:group-hover:block ${activeIndex === index
                      ? "max-h-40 opacity-100"
                      : "max-h-0 opacity-0 sm:max-h-full sm:opacity-100"
                      }`}
                  >
                    {link.subMenu.map((sub) => (
                      <li key={sub.id} className="pl-4 py-2">
                        <Link
                          href={sub.href}
                          className="text-sm text-gray-700 dark:text-gray-300 hover:text-blue-600"
                          onClick={() => setOpen(false)}
                        >
                          {sub.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>

          {/* Footer */}
          <div className="mt-6 text-xs text-gray-500 dark:text-gray-400">
            © {new Date().getFullYear()} My Store. All rights reserved.
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideMenu;
