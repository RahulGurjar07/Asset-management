
import { PlusCircle } from "lucide-react";
import  BudgetAllowcation  from "./BudgetAllocation";
import axios from 'axios';
import { useEffect, useState } from 'react';

const people = [
  {
    name: "John Doe",
    department: "Engineering",
    email: "john@devui.com",
    role: "Developer",
    edit: "Edit",
  },
  {
    name: "Jane Doe",
    department: "Engineering",
    email: "jane@devui.com",
    role: "CTO",
    edit: "Edit",
  },
  {
    name: "John Doe",
    department: "Engineering",
    email: "john@devui.com",
    role: "Developer",
    edit: "Edit",
  },
  {
    name: "Jane Doe",
    department: "Engineering",
    email: "jane@devui.com",
    role: "CTO",
    edit: "Edit",
  },
  {
    name: "John Doe",
    department: "Engineering",
    email: "john@devui.com",
    role: "Developer",
    edit: "Edit",
  },
  {
    name: "Jane Doe",
    department: "Engineering",
    email: "jane@devui.com",
    role: "CTO",
    edit: "Edit",
  },
  {
    name: "John Doe",
    department: "Engineering",
    email: "john@devui.com",
    role: "Developer",
    edit: "Edit",
  },
  {
    name: "Jane Doe",
    department: "Engineering",
    email: "jane@devui.com",
    role: "CTO",
    edit: "Edit",
  },
];




export function ResourseAllowcation() {
  const [showFilter, setShowFilter] = useState(false);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [name, setName] = useState('');

  useEffect(() => {
    getData();
  }, []); // Empty dependency array means this will run once when the component mounts

  const getData = async () => {
    try {
      const response = await axios.get('http://localhost:8000/api/assets/list');
      setData(Array.isArray(response.data) ? response.data : []);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  const getSearchData = async (query) => {
    setLoading(true);
    try {
      const response = await axios.get('http://localhost:8000/api/assets/list', {
        params: {
          name: query,
        },
      });
      setData(response.data);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };
  
  const handleSearch = () => {
    getSearchData(name);
  };
  

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;


  return (
    <>
      {/* <BudgetAllowcation /> */}
      <section className="mx-auto w-full max-w-7xl px-4 py-4">
        <p>

        </p>

        <div className="bg-gray-800 p-4">
          <div className="container mx-auto flex justify-between items-center">
            {/* Left side: Links */}
            <div className="flex space-x-4">
              <a href="#" className="text-white px-3 py-2 rounded-md text-sm font-medium">Assets Details</a>
              <a href="/asset" className="text-white px-3 py-2 rounded-md text-sm font-medium flex">Create Asset <PlusCircle className="mx-1 p-1"/></a>
            </div>

            {/* Center: Search Box */}
            <div className="relative flex">
              <input
                type="text"
                onChange={(e) => setName(e.target.value)}
                value={name}
                className="w-full px-3 py-2 rounded-md text-sm border-gray-300"
                placeholder="Search..."
              />
              <button className="bg-white rounded-lg mx-2 p-2 text-gray-600" onClick={handleSearch}>Search</button>
            </div>

          </div>
        </div>

        <div className="mt-6 flex flex-col">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div className="overflow-hidden border border-gray-200 md:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className="px-4 py-3.5 text-left text-sm font-normal text-gray-700"
                      >
                        Type
                      </th>
                      <th
                        scope="col"
                        className="px-12 py-3.5 text-left text-sm font-normal text-gray-700"
                      >
                        Name
                      </th>

                      <th
                        scope="col"
                        className="px-4 py-3.5 text-left text-sm font-normal text-gray-700"
                      >
                        Status
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-3.5 text-left text-sm font-normal text-gray-700"
                      >
                        Condition
                      </th>

                      <th
                        scope="col"
                        className="px-4 py-3.5 text-left text-sm font-normal text-gray-700"
                      >
                        location
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-3.5 text-left text-sm font-normal text-gray-700"
                      >
                        value in rs
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-3.5 text-left text-sm font-normal text-gray-700"
                      >
                        last maintance date
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 bg-white">
                    {data.map((asset) => (
                      <tr key={asset._id}>
                        <td className="whitespace-nowrap px-4 py-4">
                          <div className="flex items-center">
                            <div className="ml-4">
                              <div className="text-sm font-medium text-gray-900">
                                {asset.type}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="whitespace-nowrap px-12 py-4">
                          
                          <div className="text-sm text-gray-700">
                            {asset.name}
                          </div>
                        </td>
                        <td className="whitespace-nowrap px-4 py-4">
                          <span className="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800">
                            {asset.status}
                          </span>
                        </td>
                        <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-700">
                          {asset.condition}
                        </td>
                        <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-700">
                          {asset.location}
                        </td>

                        <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-700">
                          {asset.value}
                        </td>

                        <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-700">
                          {asset.lastMaintenanceDate}
                        </td>

                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

      </section>
    </>
  );
}
