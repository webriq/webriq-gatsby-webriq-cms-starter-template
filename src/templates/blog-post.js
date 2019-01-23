import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'
import SEO from '../components/seo'
// import { rhythm } from '../utils/typography'
import { Container, Row, Col } from "react-bootstrap";
import './blogpost.css'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = post.frontmatter.title
    const siteDesc = post.frontmatter.metadesc || post.excerpt
    const { previous, next } = this.props.pageContext


    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title={post.frontmatter.title} description={siteDesc} banner={`https://res.cloudinary.com/dnla85pdq/image/upload/w_840,h_480,c_thumb/v1540269241/webriq/images/${post.frontmatter.banner}`} metakeywords={post.frontmatter.metakeywords}/>
        <section className="insight-page">
        <Container className="py-5">
        <Row>
        <Col sm={10} md={8} className="mx-auto">
        {/*<h1>{post.frontmatter.title}</h1>*/}
        <ul className="list-unstyled d-flex align-items-center" >
          <li className="mr-3"><i className="far fa-user-circle mr-1"/>by <span className="text-blue">{post.frontmatter.author}</span></li>
          <li><i className="far fa-clock mr-1"/>{post.frontmatter.date}</li>
        </ul>
        <LazyLoadImage effect="blur" className="img-fluid mb-4" src={`https://res.cloudinary.com/dnla85pdq/image/upload/w_840,h_480,c_thumb/v1540269241/webriq/images/${post.frontmatter.banner}`} alt={siteTitle}/>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
        <hr/>
        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
        <Link to="/blog">Take Me Home</Link>
        <br />
        <br />
        </Col>
        </Row>
        </Container>
        </section>
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        author
        banner
        shortdesc
        updatedDate
        cmsUserSlug
        date(fromNow: true)
        categories
        leadtag
        metadesc
        metakeywords
        features
        slider
        slider_folder
        site
        website
      }
    }
  }
`
