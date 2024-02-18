'use client';

import Link from 'next/link';
import { useState } from 'react';
import { RxHamburgerMenu as HamburgerMenu } from 'react-icons/rx';
import { IoMdClose } from 'react-icons/io';

export default function Header() {
  const [navbar, setNavbar] = useState(false);
  return (
    <header>
      <nav className="w-full bg-white fixed top-0 left-0 right-0 z-10">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
              {/* LOGO */}
              <Link href="/">
                <h2 className="text-2xl text-black font-bold ">FreebieCourier</h2>
              </Link>
              {/* HAMBURGER BUTTON FOR MOBILE */}
              <div className="md:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <IoMdClose
                      width={30}
                      height={30}
                      className="focus:border-none active:border-none fill-current text-black"
                    />
                  ) : (
                    <HamburgerMenu
                      width={30}
                      height={30}
                      className="focus:border-none active:border-none fill-current text-black"
                    />
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? 'p-12 md:p-0 block' : 'hidden'
              }`}
            >
              <ul className="h-screen md:h-auto items-center justify-center md:flex ">
                <li className="pb-6 text-xl text-black py-2 md:px-6 text-center border-b-2 md:border-b-0  hover:bg-purple-900  border-purple-900  md:hover:text-purple-600 md:hover:bg-transparent">
                  <Link href="/freebies" onClick={() => setNavbar(!navbar)}>
                    Freebies
                  </Link>
                </li>
                <li className="pb-6 text-xl text-black py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-purple-600  border-purple-900  md:hover:text-purple-600 md:hover:bg-transparent">
                  <Link href="/deals" onClick={() => setNavbar(!navbar)}>
                    🔥 Deals
                  </Link>
                </li>
                <li className="pb-6 text-xl text-black py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-purple-600  border-purple-900  md:hover:text-purple-600 md:hover:bg-transparent">
                  <Link href="/giveaways" onClick={() => setNavbar(!navbar)}>
                    Giveaways
                  </Link>
                </li>
                <li className="pb-6 text-xl text-black py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-purple-600  border-purple-900  md:hover:text-purple-600 md:hover:bg-transparent">
                  <Link href="/guides" onClick={() => setNavbar(!navbar)}>
                    Guides
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
