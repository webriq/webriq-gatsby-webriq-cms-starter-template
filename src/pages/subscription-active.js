import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'
import SEO from '../components/seo'
import './is-webriq-glue-for-you.css'


class SubscriptionActivePage extends React.Component {
  render() {
    const siteTitle = "Subscription Confirmation"
    const siteDescription = this.props.data.site.siteMetadata.description

    return (
      <Layout location={this.props.location} title={`Subscription had been confirm`}>
        <SEO title={siteTitle} description={siteDescription} />
        <section className="webriq-glue my-5 py-5">
              <div className="container">
                  <div className="row">
                    <div className="mx-auto col-md-8 col-sm-10">
                      <h3>Your subscription is now active.</h3>
                        <div className="d-flex mt-2"><Link to="/" className="btn btn-primary mt-3">RETURN HOME</Link></div>
                      
                    </div>
                  </div>
              </div>
      </section>
      </Layout>
    )
  }
}

export default SubscriptionActivePage


export const SubscriptionActiveQuery = graphql`
  query SubscriptionActiveQuery {
    site {
      siteMetadata {
        title
        author
        description
      }
    }
  }
`
