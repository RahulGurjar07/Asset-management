import React from "react";
import assetTrackingImage from "../components/User/bus.png";
import assetMaintenaceImage from "../components/User/main.png";
import assetResourceImage from "../components/User/res.png";
import assetDataImage from "../components/User/dataI.png";
import { Link } from "react-router-dom";

export default function Feature() {
  return (
    <>
      <div className="flex justify-around mt-11">
        <div className="w-[400px] bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl m-4 ">
          <Link to={"https://secure.fleetio.com/76f545caed/dashboard"}>
            <div className="p-8 flex flex-col items-center ">
              <div className="uppercase text-center tracking-wide text-sm text-indigo-500 font-semibold mb-4">
                <h1>Asset Tracking</h1>
                <img
                  src={assetTrackingImage}
                  alt="Asset Tracking"
                  className="w-12 object-cover mt-4 rounded-md "
                />
              </div>
              <ul className="space-y-3 ">
                <li className="flex items-center">
                  <span className="text-gray-700">
                    Real Time Tracking of Municiple Asset
                  </span>
                </li>
              </ul>
            </div>
          </Link>
        </div>

        <div className="w-[400px]  bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl m-4">
          <Link to={"/asset-prediction"}>
            <div className="p-8 flex flex-col items-center">
              <div className="uppercase text-center tracking-wide text-sm text-indigo-500 font-semibold mb-4">
                Predictive Maintanece
                <img
                  src={assetMaintenaceImage}
                  alt="Asset Tracking"
                  className="w-16 object-cover mt-4 rounded-md"
                />
              </div>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <span className="text-gray-700">
                    Ai-Driven Prediction for maintanece
                  </span>
                </li>
              </ul>
            </div>
          </Link>
        </div>

        <div className="w-[400px] bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl m-4">
          <Link to={"/resource-allowcation"}>
            <div className="p-8 flex flex-col items-center">
              <div className="uppercase text-center tracking-wide text-sm text-indigo-500 font-semibold mb-4">
                Resource Allocation
                <img
                  src={assetResourceImage}
                  alt="Asset Tracking"
                  className="w-12 object-cover mt-4 rounded-md"
                />
              </div>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <span className="text-gray-700">
                    Optimized resource for assets management
                  </span>
                </li>
              </ul>
            </div>
          </Link>
        </div>

        <div className="w-[400px] bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl m-4">
          <Link to={"/chart"}>
            <div className="p-8 flex flex-col items-center">
              <div className="uppercase text-center tracking-wide text-sm text-indigo-500 font-semibold mb-4">
                Data Integration
                <img
                  src={assetDataImage}
                  alt="Asset Tracking"
                  className="w-12 object-cover mt-4 rounded-md"
                />
              </div>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <span className="text-gray-700">
                    Centralized data and analytics
                  </span>
                </li>
              </ul>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
