const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    // const fileNode = getNode(node.parent)
    // console.log(`\n`, fileNode.relativePath)
    // console.log(createFilePath({ node, getNode, basePath: `showcase`}))

    const value = createFilePath({ node, getNode, basePath: `posts`})
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
  if (node.internal.type === `MarkdownRemark`) {
    const value2 = createFilePath({ node, getNode, basePath: `showcase`})
    createNodeField({
      name: `sslug`,
      node,
      value: `/showcase${value2}`,
    })
  }
}

const makeRequest = (graphql, request) => new Promise((resolve, reject) => { 
  // Query for nodes to use in creating pages.
  resolve(
    graphql(request).then(result => {
      if (result.errors) {
        reject(result.errors)
      }

      return result;
    })
  )
});


exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  const blogPost = path.resolve(`./src/templates/blog-post.js`)
  const getMarkdownRemark = makeRequest(graphql, `
    {
        allMarkdownRemark(
          filter:{fileAbsolutePath:{regex: "/(posts)/"}} 
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 1000
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
              }
            }
          }
        }
      }
  `).then(result => {
    // Create blog posts pages.
    const posts = result.data.allMarkdownRemark.edges
    posts.forEach((post, index) => {
      const previous = index === posts.length - 1 ? null : posts[index + 1].node
      const next = index === 0 ? null : posts[index - 1].node
      createPage({
        path: post.node.fields.slug,
        component: blogPost,
        context: {
          slug: post.node.fields.slug,
          previous,
          next,
        },
      })
    }); 
  });//result end

  const showCase = path.resolve(`./src/templates/showcase-post.js`)
  const getMarkdownRemarkShowcase = makeRequest(graphql, `
    {
        allMarkdownRemark(
          filter:{fileAbsolutePath:{regex: "/(showcase)/"}} 
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 1000
        ) {
          edges {
            node {
              fields {
                sslug
              }
              frontmatter {
                title
              }
            }
          }
        }
      }
  `).then(result => {
    // Create blog posts pages.
    const posts = result.data.allMarkdownRemark.edges
    posts.forEach((post, index) => {
      const previous = index === posts.length - 1 ? null : posts[index + 1].node
      const next = index === 0 ? null : posts[index - 1].node
      createPage({
        path: post.node.fields.sslug,
        component: showCase,
        context: {
          slug: post.node.fields.sslug,
          previous,
          next,
        },
      })
    }); 
  });//result end

  return Promise.all([
    getMarkdownRemark,
    getMarkdownRemarkShowcase
  ])
}

