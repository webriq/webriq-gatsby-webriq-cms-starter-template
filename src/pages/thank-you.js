import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'
import SEO from '../components/seo'


class ThankYouPage extends React.Component {
  render() {
    const siteTitle = "Thank You"
    const siteDescription = this.props.data.site.siteMetadata.description

    return (
      <Layout location={this.props.location} title={`Thank You!`}>
        <SEO title={siteTitle} description={siteDescription} />
        <section className="webriq-glue my-5 py-5">
              <div className="container">
                  <div className="row">
                    <div className="mx-auto col-md-8 col-sm-10">
                      <h3>Thanks for your interest in WebriQ JAM Stack Early Bird.</h3>
                      <div className="d-flex mt-2"><Link to="/" className="btn btn-primary mt-3">RETURN HOME</Link></div>
                      
                    </div>
                  </div>
              </div>
      </section>
      </Layout>
    )
  }
}

export default ThankYouPage


export const ThankYouQuery = graphql`
  query ThankYouQuery {
    site {
      siteMetadata {
        title
        author
        description
      }
    }
  }
`
