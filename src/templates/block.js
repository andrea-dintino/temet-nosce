import React from 'react'

import {graphql} from  "gatsby"
import Layout from "../components/layout"

export default ({ data }) => {
    console.log(data)
    return (
        <Layout>
            ciao
        </Layout>
    )
}

export const query = graphql`
    query($block_id:String!) {
        sawtoothBlock(header_signature: {eq: $block_id}) {
            header {
                block_num
            }
        }
    }
`