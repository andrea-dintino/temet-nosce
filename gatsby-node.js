const path = require(`path`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return graphql(`
    {
      allSawtoothBlock(filter: { id: { ne: "dummy" } }) {
        edges {
          node {
            header_signature
            header {
                block_num
            }
          }
        }
      }
    }
  `).then(result => {
    result.data.allSawtoothBlock.edges.forEach(({ node }) => {
      createPage({
        path: `/block/${node.header.block_num}`,
        component: path.resolve(`./src/templates/block.js`),
        context: {
            block_id: node.header_signature
        },
      })
    })
  })
}
