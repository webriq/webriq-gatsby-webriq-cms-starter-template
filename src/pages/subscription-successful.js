import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'
import SEO from '../components/seo'


class SubscriptionSuccessPage extends React.Component {
  render() {
    const siteTitle = "Successful"
    const siteDescription = this.props.data.site.siteMetadata.description

    return (
      <Layout location={this.props.location} title={`Thank You for Subscribing`}>
        <SEO title={siteTitle} description={siteDescription} />
        <section className="webriq-glue my-5 py-5">
              <div className="container">
                  <div className="row">
                    <div className="mx-auto col-md-8 col-sm-10">
                      <h3>Please check your email to confirm your subscription.</h3>
                      <p>NOTE: If you can't find it in the inbox check on the spam folder.</p>
                      <div className="d-flex mt-2"><Link to="/" className="btn btn-primary mt-3">RETURN HOME</Link></div>
                      
                    </div>
                  </div>
              </div>
      </section>
      </Layout>
    )
  }
}

export default SubscriptionSuccessPage


export const SubscriptionSuccessQuery = graphql`
  query SubscriptionSuccessQuery {
    site {
      siteMetadata {
        title
        author
        description
      }
    }
  }
`
