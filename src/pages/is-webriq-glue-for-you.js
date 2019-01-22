import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'
import SEO from '../components/seo'
import './is-webriq-glue-for-you.css'


class GluePage extends React.Component {
  render() {
    const siteTitle = "Is WebriQ GLUE for YOU"
    const siteDescription = this.props.data.site.siteMetadata.description

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title={siteTitle} description={siteDescription} />
        <section className="webriq-glue my-5 py-5">
              <div className="container">
                  <div className="row">
                      <div className="col-md-6 old">
                         <div className="webriq-glue_content noborder py-sm-3 py-lg-5">
                           <p>We have built hundreds of sites on Content Management Systems like WordPress, generically called monolithic Content Management Systems (CMS), and we had done so for many years, up until we stopped. </p>
                         </div>
                      </div>
                      <div className="col-md-6 old">
                         <div className="webriq-glue_content noborder py-sm-3 py-lg-5">
                           <p>One of our customers, Blinds Wholesale, is on our legacy platform (similar to WordPress) for many years now. And although the site really looks professional, is fully secured, has a shopping cart and many returning visitors and customers - it basically lacks the performance it should have, especially on mobile devices. The thing we needed to change was the monolithic approach that was the standard years ago. This approach was all about thinking that all websites were equal and they should all have the same features.    Change content TO Blinds Wholesale, is on our legacy platform (similar to WordPress) for many years now. And although the site really looks professional, is fully secured, has a shopping cart and many returning visitors and customers - it basically lacks the performance it should have, especially on mobile devices.</p>
                         </div>
                      </div>
                      <div className="col-md-6 old">
                         <div className="webriq-glue_content py-lg-5">
                           <p>Websites, and web apps should only contain features that are beneficial to the business and to your customers. Any other unneeded functionality tacked on will just be a waste of time and will detract from an effective and customer-centric designed websites.</p>
                         </div>
                      </div>
                      <div className="col-md-6 old">
                         <div className="webriq-glue_content py-sm-3 py-lg-5">
                           <p><strong>WebriQ GLUE</strong> is a basic single file or single page application approach, that will be impressively fast to load, will scale easily, will be completely secured and unhackable, and will work on slow mobile networks and offline if needed.</p>
                         </div>
                      </div>
                      <div className="col-md-6 old">
                         <div className="webriq-glue_content py-sm-3 py-lg-5">
                           <p><strong>WebriQ GLUE</strong> is no longer a monolithic, one-CMS-fit-for-all approach. We are now using the best-in-class technologies and gluing them together as a single page or single page application rendered by a Content Delivery Network (CDN) and we are no longer using a single web server. </p>
                         </div>
                      </div>
                      <div className="col-md-6 old">
                         <div className="webriq-glue_content py-sm-3 py-lg-5">
                           <p>Feel the pain of scaling and securing your Web Publishing tools, and feel the need to publish your content beyond a website, then WebriQ GLUE is for you.</p>
                         </div>
                      </div>
                  </div>
                  <Link to="/" className="btn btn-primary">Go Back</Link>
              </div>
      </section>
      </Layout>
    )
  }
}

export default GluePage


export const GluePageQuery = graphql`
  query GluePageQuery {
    site {
      siteMetadata {
        title
        author
        description
      }
    }
  }
`
