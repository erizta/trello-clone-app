"use client";

import Image from "next/image";
import { UserCircleIcon, MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import Avatar from "react-avatar";

const Header = () => {
  return (
    <header>
      <div className="flex flex-col items-center p-5 md:flex-row bg-gray-500/10 rounded-b-2xl">
        <div className="absolute left-0 top-0 w-full h-96 bg-gradient-to-br from-pink-300 to-[#0055D1] filter blur-3xl opacity-50 -z-50" />

        <Image
          src="https://links.papareact.com/c2cdd5"
          alt="Trello icon"
          width={300}
          height={100}
          className="object-contain pb-10 w-44 md:w-56 md:pb-0"
        />

        <div className="flex items-center justify-end flex-1 w-full space-x-5">
          {/* Search Box */}
          <form className="flex items-center flex-1 p-2 space-x-5 bg-white rounded-md shadow-md md:flex-initial">
            <MagnifyingGlassIcon className="w-6 h-6 text-gray-400" />
            <input
              type="text"
              placeholder="Search"
              className="flex-1 p-2 outline-none"
            />
            <button hidden type="submit">
              Search
            </button>
          </form>

          {/* Avatar */}
          <Avatar name="Erizta Alifa" round color="#0055D1" size="50" />
        </div>
      </div>

      <div className="flex items-center justify-center px-5 md:py-5 ">
        <p className="py-2 flex items-center text-sm font-light p-5 pr-5 shadow-xl rounded-xl w-fit bg-white italic max-w-3xl text-[#0055D1]">
          <UserCircleIcon className="inline-block w-10 h-10 mr-1 text-[#0055D1]" />
          GPT is summarising your tasks for the day...
        </p>
      </div>
    </header>
  );
};

export default Header;
