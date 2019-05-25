import React from 'react'

import {graphql} from  "gatsby"
import Layout from "../components/layout"

export default ({ data }) => {
    const {header, batches, header_signature} = data.sawtoothBlock
    return (
        <Layout>
            <strong>{header_signature}</strong>
            <br/> <br/>
            <dl>
                <dt>previous_block_id</dt>
                <dd>{header.previous_block_id}</dd>

                <dt>batch_ids</dt>
                <dd>{header.batch_ids}</dd>

                <dt>block_num</dt>
                <dd>{header.block_num}</dd>

                <dt>consensus</dt>
                <dd>{header.consensus}}</dd>

                <dt>state_root_hash</dt>
                <dd>{header.state_root_hash}</dd>

                {batches.map(b => {
                    return (
                        <div className="batch">
                        {b.transactions.map(t => {
                            return (
                                <div className="transaction">
                                    {t.header.family_name}/{t.header.family_version}
                                    <dl>
                                        <dt>inputs</dt>
                                        {t.header.inputs.map(i=> {
                                            return (<dd>{i}</dd>)
                                        })}
        
                                        <dt>outputs</dt>
                                        {t.header.outputs.map(o=> {
                                            return (<dd>{o}</dd>)
                                        })}
                                    </dl>
        
                                    <h4>PAYLOAD</h4>
                                    {t.payload}
                                </div>
                            )
                        })}
                        </div>
                    )
                })}

            </dl>
        </Layout>
    )
}

export const query = graphql`
    query($block_id:String!) {
        sawtoothBlock(header_signature: {eq: $block_id}) {
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
`