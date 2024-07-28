

export default function BudgetAllocation() {
  const assets = [
    {
      assetType: "Bridge",
      usageHours: 5050.9,
      maintenanceCount: 9.28,
      environmentalTemperature: 16.4,
      humidity: 62.4,
      conditionScore: 54.08,
      criticalityScore: 4.75,
      cost: 149993.68,
      priority: 6.95,
    },
    {
      assetType: "Bus",
      usageHours: 5541.54,
      maintenanceCount: 8.99,
      environmentalTemperature: 16.33,
      humidity: 60.51,
      conditionScore: 52.83,
      criticalityScore: 4.85,
      cost: 226022.31,
      priority: 7.33,
    },
    {
      assetType: "Construction Equipment",
      usageHours: 5609.47,
      maintenanceCount: 8.97,
      environmentalTemperature: 15.85,
      humidity: 66.80,
      conditionScore: 55.38,
      criticalityScore: 5.07,
      cost: 365523.40,
      priority: 7.33,
    },
    {
      assetType: "Emergency Vehicle",
      usageHours: 5444.29,
      maintenanceCount: 8.37,
      environmentalTemperature: 16.72,
      humidity: 59.25,
      conditionScore: 52.69,
      criticalityScore: 4.53,
      cost: 213694.88,
      priority: 6.88,
    },
    {
      assetType: "Garbage Truck",
      usageHours: 5721.96,
      maintenanceCount: 10.10,
      environmentalTemperature: 13.73,
      humidity: 58.05,
      conditionScore: 55.03,
      criticalityScore: 5.01,
      cost: 171151.31,
      priority: 7.30,
    },
    {
      assetType: "IT Equipment",
      usageHours: 5561.35,
      maintenanceCount: 10.88,
      environmentalTemperature: 16.38,
      humidity: 64.69,
      conditionScore: 45.15,
      criticalityScore: 5.25,
      cost: 108760.62,
      priority: 8.10,
    },
    {
      assetType: "Maintenance Equipment",
      usageHours: 5440,
      maintenanceCount: 9.92,
      environmentalTemperature: 12.91,
      humidity: 57.40,
      conditionScore: 45.62,
      criticalityScore: 4.96,
      cost: 133692.61,
      priority: 7.61,
    },
    {
      assetType: "Maintenance Vehicle",
      usageHours: 4832.65,
      maintenanceCount: 9.55,
      environmentalTemperature: 15.71,
      humidity: 60.49,
      conditionScore: 49.65,
      criticalityScore: 5.41,
      cost: 168346.18,
      priority: 8.14,
    },
    {
      assetType: "Park",
      usageHours: 4838.62,
      maintenanceCount: 9.61,
      environmentalTemperature: 15.35,
      humidity: 56.33,
      conditionScore: 59.84,
      criticalityScore: 5.46,
      cost: 93831.14,
      priority: 7.62,
    },
    {
      assetType: "Public Building",
      usageHours: 5769.73,
      maintenanceCount: 8.49,
      environmentalTemperature: 14.26,
      humidity: 60.76,
      conditionScore: 52.96,
      criticalityScore: 5.15,
      cost: 283913.80,
      priority: 7.54,
    },
    {
      assetType: "Public Utility Equipment",
      usageHours: 5574.87,
      maintenanceCount: 9.2,
      environmentalTemperature: 14.93,
      humidity: 59.7,
      conditionScore: 48.6,
      criticalityScore: 5.21,
      cost: 288359.21,
      priority: 7.94,
    },
    {
      assetType: "Road",
      usageHours: 5527.11,
      maintenanceCount: 9.19,
      environmentalTemperature: 14.46,
      humidity: 61.14,
      conditionScore: 51.79,
      criticalityScore: 5.24,
      cost: 79575.69,
      priority: 7.88,
    },
    {
      assetType: "Streetlight",
      usageHours: 5665.21,
      maintenanceCount: 9.5,
      environmentalTemperature: 13.10,
      humidity: 60.57,
      conditionScore: 48.07,
      criticalityScore: 5.03,
      cost: 42764.40,
      priority: 7.53,
    },
  ];

  return (
    <>
      <section className="mx-auto w-full max-w-7xl px-4 py-4">
        <div className="flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0">
          <div>
            <h2 className="text-lg font-semibold">Budget Allocation</h2>
            <p className="mt-1 text-sm text-gray-700">
              This is a list of all assets. You can view their details, including usage hours,
              maintenance count, and associated costs.
            </p>
          </div>
          <div>
            <button
              type="button"
              className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              Add new asset
            </button>
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
                        <span>Asset Type</span>
                      </th>
                      <th
                        scope="col"
                        className="px-12 py-3.5 text-left text-sm font-normal text-gray-700"
                      >
                        Usage Hours
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-3.5 text-left text-sm font-normal text-gray-700"
                      >
                        Maintenance Count
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-3.5 text-left text-sm font-normal text-gray-700"
                      >
                        Environmental Temperature
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-3.5 text-left text-sm font-normal text-gray-700"
                      >
                        Humidity
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-3.5 text-left text-sm font-normal text-gray-700"
                      >
                        Condition Score
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-3.5 text-left text-sm font-normal text-gray-700"
                      >
                        Criticality Score
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-3.5 text-left text-sm font-normal text-gray-700"
                      >
                        Cost
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-3.5 text-left text-sm font-normal text-gray-700"
                      >
                        Priority
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 bg-white">
                    {assets.map((asset, index) => (
                      <tr key={index}>
                        <td className="whitespace-nowrap px-4 py-4">
                          <div className="text-sm font-medium text-gray-900">
                            {asset.assetType}
                          </div>
                        </td>
                        <td className="whitespace-nowrap px-12 py-4">
                          <div className="text-sm text-gray-900">{asset.usageHours.toFixed(2)}</div>
                        </td>
                        <td className="whitespace-nowrap px-4 py-4">
                          <div className="text-sm text-gray-900">{asset.maintenanceCount.toFixed(2)}</div>
                        </td>
                        <td className="whitespace-nowrap px-4 py-4">
                          <div className="text-sm text-gray-900">{asset.environmentalTemperature.toFixed(2)}</div>
                        </td>
                        <td className="whitespace-nowrap px-4 py-4">
                          <div className="text-sm text-gray-900">{asset.humidity.toFixed(2)}</div>
                        </td>
                        <td className="whitespace-nowrap px-4 py-4">
                          <div className="text-sm text-gray-900">{asset.conditionScore.toFixed(2)}</div>
                        </td>
                        <td className="whitespace-nowrap px-4 py-4">
                          <div className="text-sm text-gray-900">{asset.criticalityScore.toFixed(2)}</div>
                        </td>
                        <td className="whitespace-nowrap px-4 py-4">
                          <div className="text-sm text-gray-900">{asset.cost.toFixed(2)}</div>
                        </td>
                        <td className="whitespace-nowrap px-4 py-4">
                          <div className="text-sm text-gray-900">{asset.priority.toFixed(2)}</div>
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



/**
import React from 'react'

const people = [
  {
    name: 'John Doe',
    department: 'Engineering',
    email: 'john@devui.com',
    role: 'Developer',
  },
  {
    name: 'Jane Doe',
    department: 'Engineering',
    email: 'jane@devui.com',
    role: 'CTO',
  },
]

export function BudgetAllowcation() {
  return (
    <>
      <section className="mx-auto w-full max-w-7xl px-4 py-4">
        <div className="flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0">
          <div>
            <h2 className="text-lg font-semibold">Employees</h2>
            <p className="mt-1 text-sm text-gray-700">
              This is a list of all employees. You can add new employees, edit or delete existing
              ones.
            </p>
          </div>
          <div>
            <button
              type="button"
              className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              Add new employee
            </button>
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
                        <span>Employee</span>
                      </th>
                      <th
                        scope="col"
                        className="px-12 py-3.5 text-left text-sm font-normal text-gray-700"
                      >
                        Title
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
                        Role
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-3.5 text-left text-sm font-normal text-gray-700"
                      >
                        Role
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-3.5 text-left text-sm font-normal text-gray-700"
                      >
                        Role
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-3.5 text-left text-sm font-normal text-gray-700"
                      >
                        Role
                      </th>
                      
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 bg-white">
                    {people.map((person) => (
                      <tr key={person.name}>
                        <td className="whitespace-nowrap px-4 py-4">
                          <div className="flex items-center">
                            
                            <div className="ml-4">
                              <div className="text-sm font-medium text-gray-900">{person.name}</div>
                            </div>
                          </div>
                        </td>
                        <td className="whitespace-nowrap px-12 py-4">
                          <div className="text-sm text-gray-900 ">{person.title}</div>
                          <div className="text-sm text-gray-700">{person.department}</div>
                        </td>
                        <td className="whitespace-nowrap px-4 py-4">
                          <span className="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800">
                            Active
                          </span>
                        </td>
                        <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-700">
                          {person.role}
                        </td>
                        <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-700">
                          {person.role}
                        </td>
                        <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-700">
                          {person.role}
                        </td>
                        <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-700">
                          {person.role}
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
  )
}
 */