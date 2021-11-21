import React, { useEffect, useState } from 'react'
import { API } from 'aws-amplify'
import { listPlants } from '../graphql/queries'
import { IPlant } from './model'

export const Plants = () => {
  const [plants, setPlants] = useState<IPlant[]>([])

  async function fetchNotes() {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const apiData: any = await API.graphql({
      query: listPlants,
    })

    setPlants(apiData.data?.listPlants.items)
  }

  useEffect(() => {
    fetchNotes()
  }, [])

  return (
    <section className="container flex flex-col mx-auto mt-24">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-transparent">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Name
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Description
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Family
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Day Watered
                  </th>
                </tr>
              </thead>
              <tbody className="bg-gray-mid divide-y divide-gray-200">
                {plants.map((plant) => (
                  <tr key={plant.id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        {/* <div className="flex-shrink-0 h-10 w-10">
                          <img
                            className="h-10 w-10 rounded-full"
                            src={plant.img}
                            alt=""
                          />
                        </div> */}
                        <div className="ml-4 text-sm font-medium text-gray-900">
                          {plant.name}
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {plant.description}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {plant.family.name}
                      </td>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {plant.dateWatered}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  )
}
