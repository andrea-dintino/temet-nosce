import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => {
  const blocks = useStaticQuery(graphql`
    query {
      allSawtoothBlock(filter: {id: {ne: "dummy"}}) {
        edges {
          node {
            id
            data {
              header_signature
              header {
                previous_block_id
                batch_ids
                block_num
                consensus
                state_root_hash
              }
              batches {
                transactions {
                  payload
                  header {
                    family_name
                    family_version
                    inputs
                    outputs
                  }
                }
              }
            }
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Home" keywords={[`sawtooth`, `blockhain`, `blockchain explorer`, `zenroom`, `dyne`, `decode`]} />
      <ol>
        {blocks.allSawtoothBlock.edges.map(node => {
          return node.node.data.map(block => {
            console.log(block.batches)
            return (
              <li key={block.header.block_num}><small>{block.batches.transactions}</small>{block.header_signature} => {block.header.previous_block_id}</li>
            )
          })
        })}
      </ol>
    </Layout>
  )
}


export default IndexPage
