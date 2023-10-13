import React from "react";
import { AiOutlineSearch } from "react-icons/ai";

const page = () => {
  return (
    <div className="w-full h-screen relative">
      <video
        src="/beachVid.mp4"
        className="w-full h-full object-cover"
        autoPlay
        loop
        muted
      />
      <div className="absolute w-full h-full top-0 left-0 bg-gray-900/40">
        <div className="absolute top-0 w-full h-full flex flex-col justify-center text-center p-4">
          <h1 className="text-white">First Class Travel</h1>
          <h2 className="text-white py-4">Top 1% Locations Worldwide</h2>
          <form
            className="flex justify-between items-center max-w-[700px] mx-auto
           w-full border p-1 rounded-md text-black bg-gray-100/90"
          >
            <div>
              <input
                className="bg-transparent w-[300px] sm:w-[400px] focus:outline-none"
                type="text"
                placeholder="Search Destinations"
              />
            </div>
            <div>
              <button>
                <AiOutlineSearch
                  size={20}
                  className="icon"
                  style={{ color: "white" }}
                />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default page;