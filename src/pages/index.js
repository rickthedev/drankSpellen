import React from "react"
import Header from "../components/Header"

import "./style.css"
import Card from "../components/Card"

export default () => (
  <div>
    <Header></Header>
    <h2 className="text-3xl text-center mb-4 mt-8">Spellen</h2>
    <div className="p-4 mx-auto container grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      <Card
        title="Bier Pong"
        players="2-4 spelers"
        difficulty="makkelijk"
      ></Card>
      <Card
        title="Kingsen"
        players="4-12 spelers"
        difficulty="gemiddeld"
      ></Card>
    </div>
  </div>
)
