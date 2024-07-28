import React, { useState } from 'react';

const PreditionCase = () => {
  const [formData, setFormData] = useState({
    type: '',
    name: '',
    identifier: '',
    location: '',
    value: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md">
        <div className="mb-6">
          <h1>Assets Predictive Mainenance Model</h1>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="Usage_hours">
          Usage Hours:
          </label>
          <input
            type="number"
            name="Usage_hours"
            id="Usage_hours"
            placeholder='Please enter the total number of hours this asset has been used'
            value={formData.Usage_hours}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="Maintenance_count">
          Maintenance Count:
          </label>
          <input
            type="number"
            name="Maintenance_count"
            id="Maintenance_count"
            value={formData.Maintenance_count}
            placeholder='Please enter the number of times this asset has undergone maintenance.'
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="Enviroment_temp">
          Environmental Temperature:
          </label>
          <input
            type="number"
            name="Enviroment_temp"
            id="Enviroment_temp"
            value={formData.Enviroment_temp}
            placeholder='Please enter the average environmental temperature (in Celsius) where this asset operates'
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="humidity">
          Humidity
          </label>
          <input
            type="number"
            name="humidity"
            id="humidity"
            value={formData.humidity}
            placeholder='Please enter the average humidity (in %) where this asset operates'
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="assetAgeDays">
          Asset Age Day
          </label>
          <input
            type="date"
            name="assetAgeDays"
            id="assetAgeDays"
            value={formData.assetAgeDays}
            placeholder='please enter the total number of days this asset has been in use'
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="lastMaintanance">
          Days Since Last Maintenance
          </label>
          <input
            type="date"
            name="lastMaintanance"
            id="lastMaintanance"
            value={formData.assetAgeDays}
            placeholder='Please enter the number of days since this assets last maintenance'
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default PreditionCase;
