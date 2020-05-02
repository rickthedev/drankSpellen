import React from "react"
import Header from "../components/Header"

import "./style.css"
import Card from "../components/Card"

export default () => (
  <div>
    <Header></Header>
    <div className="p-4 mx-auto container grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      <h2 className="text-3xl text-center my-4">Spellen</h2>
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
