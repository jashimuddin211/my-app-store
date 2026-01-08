import React, { use, useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { PiDownloadSimpleBold } from "react-icons/pi";
import { FaStar } from 'react-icons/fa';
import { AiFillLike } from 'react-icons/ai';
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from 'recharts';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const appPromise = fetch('/allApp.json').then(res => res.json());

const AppDetails = () => {
  const { id } = useParams();
  const appId = parseInt(id);

  const data = use(appPromise);
  const singleApp = data.find(app => app.id === appId);

  const {
    image,
    title,
    ratings,
    downloads,
    reviews,
    ratingAvg,
    size,
    description
  } = singleApp;

  const [installed, setInstalled] = useState(false);

  // localStorage on page load
  useEffect(() => {
    const installedApps =
      JSON.parse(localStorage.getItem("installedApps")) || [];

    if (installedApps.includes(appId)) {
      setInstalled(true);
    }
  }, [appId]);

  // Save appId to localStorage
  const handleInstall = () => {
    const installedApps =
      JSON.parse(localStorage.getItem("installedApps")) || [];

    if (!installedApps.includes(appId)) {
      installedApps.push(appId);
      localStorage.setItem(
        "installedApps",
        JSON.stringify(installedApps)
      );
    }

    setInstalled(true);
    toast.success("App download successful!!!");
  };

  return (
    <div className='bg-gray-200 mt-8'>
      <div className='max-w-[1280px] mx-auto p-7'>

        <div className='flex gap-5'>
          <img className='w-50' src={image} alt={title} />

          <div>
            <h1 className='text-2xl font-bold'>{title}</h1>
            <p className='border-b mb-6'>
              Developed by <span className='text-[#632EE3]'>productive.io</span>
            </p>

            <div className='flex gap-10'>
              <div>
                <PiDownloadSimpleBold />
                <p>Downloads</p>
                <h1 className='text-2xl font-bold'>{downloads}</h1>
              </div>

              <div>
                <FaStar />
                <p>Average Ratings</p>
                <h1 className='text-2xl font-bold'>{ratingAvg}</h1>
              </div>

              <div>
                <AiFillLike />
                <p>Total Reviews</p>
                <h1 className='text-2xl font-bold'>{reviews}</h1>
              </div>
            </div>

            <button
              onClick={handleInstall}
              disabled={installed}
              className='btn bg-[#00D390] text-white mt-4'
            >
              {installed ? 'Installed' : `Install Now (${size}) MB`}
            </button>

            <ToastContainer />
          </div>
        </div>

        <div className='border-b my-6'></div>

        <h1 className='font-bold text-2xl ml-7 mb-5'>Ratings</h1>

        <ResponsiveContainer width="100%" height={250}>
          <BarChart
            data={ratings}
            layout='vertical'
            margin={{ left: 20 }}
          >
            <XAxis type='number' />
            <YAxis type='category' dataKey="name" />
            <Bar dataKey="count" fill='#f97316' radius={[0, 4, 4, 0]} />
          </BarChart>
        </ResponsiveContainer>

        <h1 className='font-bold text-2xl mt-5'>Description</h1>
        <p>{description}</p>

      </div>
    </div>
  );
};

export default AppDetails;
