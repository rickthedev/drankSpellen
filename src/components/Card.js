import React from "react"

export default function Card({ players, title, difficulty, image, short }) {
  return (
    <div className="border shadow rounded-lg flex flex-col overflow-hidden">
      <div
        className="h-40 bg-center bg-cover"
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      <div className="flex-grow px-4 py-3 flex flex-col">
        <div className="flex items-center border-b pb-3">
          <h3 className="text-2xl font-thin capitalize">{title}</h3>
          <p className="ml-auto text-gray-600 lowercase">{players}</p>
        </div>
        <p className="text-sm my-3">{short}</p>
        <p className="mt-auto text-gray-600 font-thin capitalize">
          {difficulty}
        </p>
      </div>
    </div>
  )
}
