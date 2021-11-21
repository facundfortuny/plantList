import React from 'react'
import { plantList } from './model'

export const Plant = () => {
  const plant = plantList[0]
  return (
    <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
      <div className="flex-shrink-0">
        <img className="h-12 w-12" src={`../${plant.img}`} />
      </div>
      <div>
        <div className="text-xl font-medium text-black">{plant.name}</div>
        <p className="text-gray-500">{plant.description}</p>
      </div>
    </div>
  )
}
