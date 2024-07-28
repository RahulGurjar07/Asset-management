import React, { useState } from 'react';

const UserForm = () => {
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
      <h1 className='text-center text-2xl font-bold '>Predict Maintenance Cost and Priority </h1>
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md">
        <div className="mb-4">
          <label className="block text-gray-700  font-bold mb-2" htmlFor="ConditionScore">
          Condition Score
          </label>
          <span className='text-sm font-semibold'>A rating indicating the current condition of the asset, typically on a scale from 1 to 10.</span>
          <input
            type="number"
            name="ConditionScore"
            id="ConditionScore"
            value={formData.ConditionScore}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
            
          
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="criticalityScore">
          Criticality Score
          </label>
          <span className='text-sm font-semibold'>A rating reflecting the importance of the asset, typically on a scale from 1 to 10.</span>
          <input
            type="number"
            name="criticalityScore"
            id="criticalityScore"
            value={formData.criticalityScore}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="Usage">
          Usage
          </label>
          <span className='text-sm font-semibold'>The amount of usage the asset has undergone, measured in hours or cycles.
          .</span>
          <input
            type="number"
            name="Usage"
            id="Usage"
            value={formData.Usage}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="FailureHistor">
          Failure History
          </label>
          <span className='text-sm font-semibold'>he number of times the asset has failed in the past.
          Age: The age of the asset in years.</span>
          <input
            type="number"
            name="Failure History"
            id="Failure History"
            value={formData.failurehistory}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="criticalityScore">
          Environment Factor
          </label>
          <span className='text-sm font-semibold'>A rating representing the impact of the environment on the asset, typically on a scale from 1 to 10.</span>
          <input
            type="number"
            name="criticalityScore"
            id="criticalityScore"
            value={formData.criticalityScore}
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

export default UserForm;
