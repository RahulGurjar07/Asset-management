import React from "react";
import { Link } from "react-router-dom";

export default function Prediction() {
  return (
    <section>
      <div className="px-4 py-16">
        <h2 className="text-2xl font-bold tracking-tight text-gray-800 xl:text-4xl">
          Try something really different right now.
        </h2>
        <p className="mt-4 block max-w-4xl text-gray-500">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse iure
          tenetur commodi ipsam error voluptate magni. Adipisci repudiandae
          ullam commodi iusto reprehenderit suscipit facere voluptatem, eaque
          maiores minima. Neque, officiis.
        </p>

        <div className="mt-16">
          <Link
            to={"/asset"}
            className="inline-flex w-full items-center justify-center overflow-hidden rounded-lg bg-gray-900 px-4 py-2.5 text-sm text-white shadow transition-colors duration-300 hover:bg-gray-700 focus:ring focus:ring-gray-300 focus:ring-opacity-80 sm:mx-2 sm:w-auto"
          >
            <span className="mx-2">Get it on the App Store</span>
          </Link>

          <Link
            to={"/asset"}
            className="mt-4 inline-flex w-full items-center justify-center overflow-hidden rounded-lg bg-blue-600 px-4 py-2.5 text-sm text-white shadow transition-colors duration-300 hover:bg-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-80 sm:mx-2 sm:mt-0 sm:w-auto"
          >
            <span className="mx-2">Get it on Google Play</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
