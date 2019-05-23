import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => {
  const blocks = useStaticQuery(graphql`
    query {
      allSawtoothBlock(filter: { id: { ne: "dummy" } }) {
        edges {
          node {
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
  `)

  return (
    <Layout>
      <SEO
        title="Temet Noscet - Blockchain Explorer"
        keywords={[
          `sawtooth`,
          `blockhain`,
          `blockchain explorer`,
          `zenroom`,
          `dyne`,
          `decode`,
        ]}
      />
      <ol>
        {blocks.allSawtoothBlock.edges.map(node => {
          return (
            <li key={node.node.header.block_num}>
              <Link to={`/block/${node.node.header.block_num}`}>
                {node.node.header_signature}
              </Link>
            </li>
          )
        })}
      </ol>
    </Layout>
  )
}

export default IndexPage
