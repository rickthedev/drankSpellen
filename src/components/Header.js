import React from "react"

export default function Header() {
  return (
    <div
      className="w-full bg-gray-800 flex justify-center items-center bg-center bg-cover py-20"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,.5)), url(https://images.unsplash.com/photo-1436076863939-06870fe779c2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80)",
      }}
    >
      <h1 className="text-white text-4xl font-bold">DrankSpellen</h1>
    </div>
  )
}
