"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import SearchBar from "./SearchBar";
import { CiShoppingCart } from "react-icons/ci";

type Props = {};

export default function Navbar({}: Props) {
  const [showProfile, setShowProfile] = useState<boolean>(false);
  const [showNav, setShowNav] = useState<boolean>(false);
  const toggleProfile = () => {
    setShowProfile(!showProfile);
  };
  return (
    <div>
      <div className="flex items-center justify-between py-4 relative">
        <div className="flex items-center md:space-x-10 lg:space-x-20">
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
            <div className="flex item-center space-x-4">
              <SearchBar />

              <div className="relative cursor-pointer">
                <Image
                  src="https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?w=740&t=st=1695325508~exp=1695326108~hmac=725b590ed34ab92a42d36ff7c9ea3f3fa7cb6600b5194dbae65dfb4942352bbb"
                  className="w-10 h-10 rounded-full object-cover"
                  alt=""
                  onClick={toggleProfile}
                />
                <div
                  className={`absolute right-0 mt-2 bg-white text-gray-900 z-10 rounded-lg shadow-lg ${
                    showProfile ? "block" : "hidden"
                  }`}
                >
                  <Link href="/signin">
                    <div className="block px-4 py-2 cursor-pointer">
                      Sign In
                    </div>
                  </Link>
                </div>
              </div>

              <Link href="/cart">
                <div className="p-2 bg-gray-100 rounded-full">
                  <CiShoppingCart size={20} />
                </div>
              </Link>
            </div>
          </ul>
        </nav>
      </div>
    </div>
  );
}
