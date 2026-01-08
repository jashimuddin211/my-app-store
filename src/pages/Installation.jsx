import React, { use, useState } from 'react';
import installapp from '../assets/demo-app (3).webp';
import { PiDownloadSimpleBold } from 'react-icons/pi';
import { FaStar } from 'react-icons/fa';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const allAppData = fetch('/allApp.json').then(res => res.json());

const Installation = () => {
  const appData = use(allAppData);

  
  const [installedApps, setInstalledApps] = useState(
    JSON.parse(localStorage.getItem("installedApps")) || []
  );

  
  const [sortBy, setSortBy] = useState("");
  const [sizeOrder, setSizeOrder] = useState(""); 

 
  let installedAppList = appData.filter(app =>
    installedApps.includes(app.id)
  );

  // Apply sort
  if (sortBy === "Name") {
    installedAppList.sort((a, b) => a.companyName.localeCompare(b.companyName));
  } else if (sortBy === "Size") {
    if (sizeOrder === "asc") {
      installedAppList.sort((a, b) => a.size - b.size);
    } else if (sizeOrder === "desc") {
      installedAppList.sort((a, b) => b.size - a.size);
    }
  } else if (sortBy === "Rating") {
    installedAppList.sort((a, b) => b.ratingAvg - a.ratingAvg);
  }

  
  const handleUninstall = (id) => {
    const updatedApps = installedApps.filter(appId => appId !== id);
    localStorage.setItem("installedApps", JSON.stringify(updatedApps));
    setInstalledApps(updatedApps);

    // Toast message
    toast.success("App uninstalled successfully!");
  };

  return (
    <div className='bg-gray-200 mt-8'>
      <div className='max-w-[1280px] mx-auto p-7'>

        
        <div className='flex justify-center items-center gap-2 pt-8'>
          <h1 className='text-3xl font-bold text-blue-400'>Your Installed Apps</h1>
          <img className='h-5' src={installapp} alt="" />
        </div>

        <h1 className='text-center'>Explore all the apps on the market Developed by us</h1>

        {/* Sort  */}
        <div className='flex justify-between mt-5 items-center'>
          <h1 className='font-bold text-xl'>{installedApps.length} Apps Found</h1>

          <div className="flex items-center gap-2">
            <select
              value={sortBy}
              onChange={(e) => {
                const value = e.target.value;
                if (value === "Size") {
                  setSortBy("Size");
                  setSizeOrder("asc"); 
                } else {
                  setSortBy(value);
                  setSizeOrder(""); 
                }
              }}
              className="select appearance-none"
            >
              <option value="" disabled>Sort</option>
              
              <option value="Size">Size</option>
            
            </select>

            {sortBy === "Size" && (
              <button
                className="btn bg-gray-300 text-black"
                onClick={() => setSizeOrder(sizeOrder === "asc" ? "desc" : "asc")}
              >
                {sizeOrder === "asc" ? "Low → High" : "High → Low"}
              </button>
            )}
          </div>
        </div>

        <div className='border my-5'></div>

        {/* Installed apps list */}
        {installedAppList.map(app => (
          <div key={app.id} className='mb-5'>
            <div className='flex justify-between items-center bg-white p-2'>

              <div className='flex gap-4'>
                <img className='h-10 w-10' src={app.image} alt={app.companyName} />
                <div>
                  <h1>{app.companyName}</h1>
                  <div className='flex gap-4'>
                    <div className='flex items-center gap-1'>
                      <PiDownloadSimpleBold />
                      <h1>{app.downloads}</h1>
                    </div>
                    <div className='flex items-center gap-1'>
                      <FaStar />
                      <h1>{app.ratingAvg}</h1>
                    </div>
                    <h1>{app.size} MB</h1>
                  </div>
                </div>
              </div>

              <button
                onClick={() => handleUninstall(app.id)}
                className='btn bg-red-500 text-white'
              >
                Uninstall
              </button>

            </div>
          </div>
        ))}

        {/* Toast container */}
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          closeOnClick
          pauseOnHover
          draggable
          theme="colored"
        />

      </div>
    </div>
  );
};

export default Installation;
