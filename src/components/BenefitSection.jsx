import React from 'react'
import { ChevronUp, ChevronDown } from 'lucide-react'


export default function Benefits() {
  const benefits = [
    {
      title: ' Improvement Public Safety',
      description: 'Implementing predictive maintenance ensures timely intervention before equipment failures, reducing the risk of accidents and hazards. By continuously monitoring asset conditions and predicting issues, municipal corporations can address potential safety concerns proactively. This enhances the overall safety of public infrastructure, ensuring a safer environment for all residents.'
    },
    {
      title: 'Reduce Maintenance Cost',
      description: 'Predictive maintenance allows for early detection of potential issues, enabling targeted interventions before problems escalate. This proactive approach reduces the frequency and severity of breakdowns, leading to significant cost savings on emergency repairs and replacements. Efficient scheduling of maintenance activities also optimizes resource use, further cutting down expenses.'
    },
    {
      title: 'Enhanced Asset Lifespan',
      description: 'By addressing maintenance needs promptly and effectively, predictive maintenance extends the lifespan of assets. Regular upkeep based on accurate predictions prevents excessive wear and tear, ensuring that equipment and infrastructure remain in optimal condition for longer periods. This prolongs asset usability, delaying the need for costly replacements.'
    },
    {
      title: 'Better Resource Utilization',
      description: 'Predictive maintenance optimizes the allocation of maintenance resources, including personnel, tools, and budget. By accurately forecasting maintenance needs, municipal corporations can prioritize tasks, schedule activities efficiently, and allocate resources where they are most needed. This strategic approach ensures that resources are used effectively, enhancing overall operational efficiency.'
    }
  ]
  return (
    <section className="mx-auto max-w-7xl px-2 py-10 md:px-0">
      <div>
      

        {/* <div className="mx-auto max-w-2xl lg:text-center">
          
          <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-gray-600 lg:mx-auto">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere, assumenda
          </p> 
        </div> */}
        <div className="mx-auto mt-4 max-w-3xl space-y-4 md:mt-16">
        {benefits.map((benefit) => (
          <div className="cursor-pointer rounded-md border border-gray-400 shadow-lg transition-all duration-200">
            <button
              type="button"
              className="flex w-full items-center justify-between px-4 py-5 sm:p-6"
            >
              <span className="flex text-lg font-semibold text-black">{benefit.title}</span>

              
            </button>
            <div className="px-4 pb-5 sm:px-6 sm:pb-6">
              <p className="text-gray-500">
                {benefit.description}
              </p>
            </div>
          </div>
        ))}
        </div>
      
      </div>
    </section>
  )
}
