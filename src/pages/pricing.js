import React from 'react'
import { Link } from 'gatsby'
import { Container, Row } from "react-bootstrap";
import Layout from '../components/Layout'
import SEO from '../components/seo'
import './pricing.css'


class PricingPage extends React.Component {
  render() {
    const siteTitle = "Pricing"
    const siteDescription = "Pricing description"



    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title={siteTitle} description={siteDescription} />
        <section className="pricing mt-5 pt-5">

              <Container>
                  <Row>
                      <div className="col-12 col-sm-10 mx-auto">
                        
                          <div className="pricing_content row">
                              <h4 className="mb-4 mx-3"><strong>WebriQ GLUE</strong> has a unit price of $3,000 per month, and includes</h4>
                              <div className="col-12 col-sm-6">
                                  <ul className="list-unstyled">
                                    <li>Dedicated team of designers, developers, content managers and devops</li>
                                    <li>Ongoing design, development and devops</li>
                                    <li>Ecommerce Development</li>
                                    <li>Serverless operation</li>
                                  </ul>
                              </div>
                              <div className="col-12 col-sm-6">
                                  <ul className="list-unstyled">
                                    <li>Level 1 and 2 technical support</li>
                                    <li>Level 1 and 2 user support</li>
                                    <li>Maintenance and updates</li>
                                    <li>Analytics </li>
                                    <li>Security</li>
                                  </ul>
                              </div>

                          </div>
                          <div className="pricing_content row">
                              <div className="col-12">
                                  <h4 className="mt-4 mb-3">How can we sustain this <strong>pricing model</strong></h4>
                                  <p>We have been designing and developing websites and web apps for a long time, and we have seen all the deficiencies of project based pricing, per hour pricing, unknowns in devops, unknowns in maintenance, overruns, delays
                                      etc.</p>
                                    <p>We have developed a very opinionated way of implementing websites, ecommerce carts and webapps</p>
                              </div>
                              <div className="col-12 col-sm-6">
                                  <ul className="list-unstyled">
                                      <li>We completely moved away from a monolithic and centralized approach </li>
                                      <li>We believe in a decentralized approach whereby each software component is chosen for it’s best in class, but at the same time replaceable with a newer best in class if needed. </li>
                                      <li>Where we can not find a best in class critical functionality that is open sourced, we develop it ourselves, i.e. WebriQ Forms.</li>
                                  </ul>
                              </div>
                              <div className="col-12 col-sm-6">
                                  <ul className="list-unstyled">
                                      <li>We are strong supporters of the API economy</li>
                                      <li>We strongly believe in microservices when it comes to functionality and automation </li>
                                      <li>We aim at 100% serverless operation, and we know how to do that.</li>
                                      <li>We aim at 100% uptime, and we know how to do that </li>
                                  </ul>
                              </div>
                              <div className="col-12">
                                  <h5>We are highly specialized, and opinionated when it comes to the technology stack used.</h5>
                              </div>
                          </div>
                      </div>
              </Row>
            </Container>
          <div className="cta mt-5" style={{ backgroundImage: `url(/img/cta-background.svg)` }}>
              <div className="container">
                  <div className="row">
                      <div className="col-12 col-sm-8 offset-sm-2 text-center">
                          <h3 className="text-center my-4">Want to know more, schedule a short 15 minute call with Alex Belding</h3>
                          <Link to="/" className="btn btn-primary btn-inverted">SCHEDULE A CALL</Link>
                      </div>
                  </div>
              </div>
          </div>

      </section>
      </Layout>
    )
  }
}

export default PricingPage
