import React from 'react'
// import { Link } from 'gatsby'
import { Container, Row, Col } from "react-bootstrap";
import Layout from '../components/Layout'
import SEO from '../components/seo'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import './showcase.css'


class ShowcasePage extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = `Showcase`
    const showcase = data.allMarkdownRemark.edges
    const siteDescription = "Showcase description"

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title={siteTitle} description={siteDescription} />
        <section className="pricing mt-5 py-5">

      <Container>
        <Row>
          {showcase.map(({ node }) => {
            return (
              <Col md={6} className="py-3" key={node.id}>
              <a href={node.fields.sslug}>
                <div className="showcase-wrapper">
                <LazyLoadImage className="img-fluid" effect="blur" src={`https://res.cloudinary.com/dnla85pdq/image/upload/w_720,h_500,c_thumb/v1546942589/webriq-services/showcase/${node.frontmatter.slider_folder}/${node.frontmatter.banner}`} data-was-processed="true"/>
                <div className="showcase-overlay"></div>
                <div className="showcase-featured d-flex align-items-center">
                  <ul className="list-unstyled">
                      {node.frontmatter.features.split(",").map((tag, index) =>(
                        <li key={index}>{tag}</li>
                      ))}
                  </ul>
                </div>
                <h5 className="showcase-client mt-3">{node.frontmatter.title}</h5>
              </div></a>
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

export default ShowcasePage

export const pageQuery = graphql`
  query {
  allMarkdownRemark (
     filter:{fileAbsolutePath:{regex: "/(showcase)/"}} 
     sort: { fields: [frontmatter___date], order: DESC }
    ){
    group (field: frontmatter___features) {
      fieldValue
      totalCount
    }
    edges {
      node {
        id
        frontmatter {
          title
          banner
          date
          features
          slider_folder
          site
          website
        }
        fields {
          sslug
        }
      }
    }
    }
  }
`
