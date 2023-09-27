"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import SearchBar from "./SearchBar";
import { BiSearch } from "react-icons/bi";
import { BsChevronCompactUp } from "react-icons/bs";

import { CiShoppingCart } from "react-icons/ci";

type Props = {};

export default function Navbar({}: Props) {
  const [showProfile, setShowProfile] = useState<boolean>(false);
  const [showNav, setShowNav] = useState<boolean>(false);
  const toggleProfile = () => {
    setShowProfile(!showProfile);
  };
  const toggleNavBar = () => {
    setShowNav(!showNav);
  };
  return (
    <div>
      <div className="flex items-center justify-between py-4 relative">
        <div className="flex items-center md:space-x-10 lg:space-x-20">
          <div className="font-semibold text-2x1">
            <a href="/">OYA</a>
          </div>
          <nav className="max-md:hidden">
            <ul className="flex item-center lg:space-x-10 space-x-10 space-x-7 opacity-70 text-[15px]">
              <li>
                <a href="/" className="py-3 inline-block w-full">
                  Shop
                </a>
              </li>
              <li>
                <a href="filters" className="py-3 inline-block w-full">
                  Filters
                </a>
              </li>
              <li>
                <a href="myproducts" className="py-3 inline-block w-full">
                  My Products
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="flex item-center space-x-4">
          <SearchBar />

          <div className="relative cursor-pointer">
            <Image
              src="https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?w=740&t=st=1695325508~exp=1695326108~hmac=725b590ed34ab92a42d36ff7c9ea3f3fa7cb6600b5194dbae65dfb4942352bbb"
              alt="User Profile"
              width={36} // Specify the desired width
              height={36} // Specify the desired height
              className="rounded-full object-cover"
              onClick={toggleProfile}
            />
            <div
              className={`absolute right-0 mt-2 bg-white text-gray-900 z-10 rounded-lg shadow-lg ${
                showProfile ? "block" : "hidden"
              }`}
            >
              <Link href="/signin">
                <div className="block px-4 py-2 cursor-pointer">Sign In</div>
              </Link>
            </div>
          </div>

          <Link href="/cart">
            <div className="p-2 bg-gray-100 rounded-full">
              <CiShoppingCart size={20} />
            </div>
          </Link>
          <span
            onClick={toggleNavBar}
            className="p-[9px] bg-gray-100 rounded-full md:hidden"
          >
            <BsChevronCompactUp
              className={`transition ease-in duration-150 ${
                showNav ? "rotate-180" : "0"
              }`}
            />
          </span>
        </div>
      </div>
      <div
        className={`md:hidden ${
          showNav ? "pb-4 px-5" : "h-0 invisible opacity-0"
        }`}
      >
        <ul className="flex flex-col text-[15px] opacity-75 px-2">
          <li>
            <a href="/shop" className="py-3 inline-block w-full">
              Shop
            </a>
          </li>
          <li>
            <a href="/filters" className="py-3 inline-block w-full">
              Filters
            </a>
          </li>
          <li>
            <a href="/myproducts" className="py-3 inline-block w-full">
              My Product
            </a>
          </li>
        </ul>
        <div className="flex items-center bg-gray-100 p-2 rounded-lg my-4 py-3">
          <input
            type="text"
            className="outline-none w-full bg-transparent ml-2 caret-blue-500 placeholder:font-light placeholder:text-gray-600 text-[15px]"
            placeholder="Search"
            autoComplete="false"
          />
          <button>
            <BiSearch size={20} className="opacity-50" />
          </button>
        </div>
      </div>
    </div>
  );
}
