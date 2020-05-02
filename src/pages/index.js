import React from "react"
import Header from "../components/Header"

import "./style.css"
import Card from "../components/Card"
import { useStaticQuery, graphql } from "gatsby"

export default () => {
  const spellen = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              players
              difficulty
              image
              short
            }
          }
        }
      }
    }
  `)

  console.log(spellen)

  return (
    <div>
      <Header></Header>
      <h2 className="text-3xl text-center mb-4 mt-8">Spellen</h2>
      <div className="p-4 mx-auto container grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {spellen.allMarkdownRemark.edges.map(edge => {
          const {
            title,
            players,
            difficulty,
            image,
            short,
          } = edge.node.frontmatter

          return (
            <Card
              title={title}
              players={players}
              difficulty={difficulty}
              image={image}
              short={short}
            ></Card>
          )
        })}
      </div>
    </div>
  )
}
