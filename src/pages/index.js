import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import * as sections from "../components/sections"
import Fallback from "../components/fallback"
import SEOHead from "../components/head"

export default function Homepage(props) {
  //const {  } = props.data
  console.log(props.data)

  return (
    <Layout>
      <h1>Carleton University Biology Graduate Student Association</h1>
    </Layout>
  )
}
//export const Head = (props) => {
//  const { homepage } = props.data
//  return <SEOHead {...homepage} />
//}
export const query = graphql`
  query {
    allContentfulMember {
      edges {
        node {
          name
          role
          program
          advisor
          researchTopic
          biography {
            raw
          }
        }
      }
    }
  }
`
