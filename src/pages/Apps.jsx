import React, { Suspense, use, useState } from "react";
import TrandingCard from "../Compnent/TrandingCard.jsx/TrandingCard";
import { Link } from "react-router";

const trendingData = fetch("/allApp.json").then((res) => res.json());

const Apps = () => {
  const data = use(trendingData);

  const [search, setSearch] = useState("");

  // Filter apps based on title, companyName, or description
  const filteredData = data?.filter((app) =>
    app.title.toLowerCase().includes(search.toLowerCase()) ||
    app.companyName.toLowerCase().includes(search.toLowerCase()) ||
    app.description.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <div className="bg-gray-200">
        <div className="max-w-[1280px] mx-auto pt-8">
          <h1 className="font-bold text-3xl text-center">
            Our All Applications
          </h1>
          <p className="text-center pb-8">
            Explore All Apps on the Market developed by us. We code for Millions
          </p>

          <div className="flex justify-between mb-7">
            <h2 className="font-bold">({filteredData?.length}) Apps Found</h2>

            {/* SEARCH BAR */}
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered w-24 md:w-auto"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
{/* filters no apps found */}
{filteredData && filteredData.length > 0 ? (
<div className="grid grid-cols-4 gap-6 rounded-xl">
            <Suspense>
              {filteredData?.map((e) => (
                <TrandingCard key={e.id} e={e} />
              ))}
            </Suspense>
          </div>
) : (
  
    <div className='flex justify-center  '>
      <div>
        <h1 className="text-gray-500 font-bold text-5xl text-center mt-10 ">no apps found</h1>
          <div className="flex justify-center mt-7 mb-20">
             
            <Suspense fallback={<span className="loading loading-bars loading-xl"></span>}>
                <button onClick={() =>setSearch("")} className='bg-gradient-to-r from-[#632EE3] to-[#9F62F2] p-1 rounded-sm text-white w-30'>
                Show All
            </button></Suspense>
          </div>
      </div>
        </div>
)}
          
        </div>
      </div>
    </div>
  );
};

export default Apps;
