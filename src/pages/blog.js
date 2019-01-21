import React from 'react'
import { Link, graphql } from 'gatsby'
import { Container, Row, Col } from "react-bootstrap";
import Layout from '../components/Layoutpost'
import SEO from '../components/seo'
// import { rhythm } from '../utils/typography'
import { LazyLoadComponent } from 'react-lazy-load-image-component';

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = `Blog`
    const posts = data.allMarkdownRemark.edges
    const lists = data.allMarkdownRemark.edges.map(list => list.node)

    return (
      <Layout location={this.props.location} title={siteTitle} lists={lists}>
        <SEO
          title= {siteTitle}
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        <section className="article-list py-5">
        <Container style={{ maxWidth: '1192px'}}>
        <h3 className="text-blue mb-4">All stories in blogs</h3>
        <Row>
          {posts.slice(4).map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          return (
              <Col md={4} lg={3} key={node.id}>
                <LazyLoadComponent>
                <div className="article-list-banner mb-2" 
                  style={{ 
                    backgroundImage: `url("${node.frontmatter.banner}")`,
                    backgroundPosition: `center center`,
                    backgroundSize:`cover`,
                    height: `180px`
                
                }}/>
                <h5>
                  <Link className="article-list-link" style={{ boxShadow: `none` }} to={node.fields.slug} title={title}>
                    {title}
                  </Link>
                </h5>
                {/*<small>{node.frontmatter.date}</small>*/}
                <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
                </LazyLoadComponent>
              </Col>
            )
          })}
        </Row>
        </Container>
        </section>
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      filter:{fileAbsolutePath:{regex: "/(posts)/"}} 
      sort: { fields: [frontmatter___date], order: DESC }
      ) {
      edges {
        node {
          id
          excerpt(pruneLength: 80)
          fields {
            slug
          }
          frontmatter {
            date(fromNow: true)
            title
            banner
            author
          }
        }
      }
    }
  }
`
