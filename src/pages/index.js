import React from 'react'
import { Link, graphql } from 'gatsby'
import { Container, Row, Col } from "react-bootstrap";
import Layout from '../components/Layout'
import SEO from '../components/seo'
import './index.css'
import gradient from "../../static/img/image-gradient.png";
import request from "../../static/img/request-access.svg";
import reacticon from "../../static/img/ra-react.png";
import gatsbyicon from "../../static/img/ra-gatsby.png";
import htmlicon from "../../static/img/ra-html.png";
import jsicon from "../../static/img/ra-js.png";
import giticon from "../../static/img/ra-git.png";
import githubicon from "../../static/img/ra-github.png";
import netlifyicon from "../../static/img/ra-netlify.png";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

class IndexPage extends React.Component {
  render() {
    const siteTitle = this.props.data.site.siteMetadata.title
    const siteDescription = this.props.data.site.siteMetadata.description
    const { data } = this.props
    const posts = data.allMarkdownRemark.edges

    console.log(posts)

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title={siteTitle} description={siteDescription} />
        <section className="comparison my-5 py-5">
              <div className="container">
                  <div className="row">
                      <div className="col-md-6 old">
                          <h2 className="mb-4">The Old Way</h2>
                          <div className="comparison_content p-5" style={{backgroundImage: `url(/img/comparison_old.svg)`}}>
                              <ul className="list-unstyled my-4">
                                  <li>Fixed Templates</li>
                                  <li>Endless expensive mockups</li>
                                  <li>Build and disappear</li>
                                  <li>Non-transparent invoices</li>
                                  <li>Drop a support ticket, see what happens</li>
                                  <li>Complicated devops</li>
                                  <li>Complicated plugin system</li>
                              </ul>
                          </div>
                      </div>
                      <div className="col-md-6 future">
                          <h2 className="mb-4">The WebriQ Way</h2>
                          <div className="comparison_content p-5" style={{backgroundImage: `url(/img/comparison_future.svg)`}}>
                              <ul className="list-unstyled my-4">
                                  <li>Purpose based design</li>
                                  <li>Component based design with content</li>
                                  <li>Analyze and improve continuously</li>
                                  <li>Simple and predictable monthly pricing</li>
                                  <li>Chat and speak to humans</li>
                                  <li>No devops and serverless</li>
                                  <li>No plugins, only API’s </li>
                              </ul>
                          </div>
                      </div>
                  </div>
              </div>
      </section>
        <section className="services">
            <Container className="mt-5 pt-5">
                <Row>
                    <Col xs={12}>
                        <div className="services_header mb-4 pb-4">
                            <h2>Don’t build websites with last decade’s technologies, build it with <strong>WebriQ Glue</strong></h2>
                        </div>
                    </Col>
                    <Col xs={12} sm={6} md={4}>
                        <h4 className="mb-3 mt-4">Future-proof your website</h4>
                        <p>The web is mobile, and every website is a web app and every web app is a website. Use a universal framework to build your future proof website and web app.</p>
                    </Col>
                    <Col xs={12} sm={6} md={4}>
                        <h4 className="mb-3 mt-4">Modern web tech without the headache</h4>
                        <p>Enjoy the power of the latest open-source web technologies – MongoDB, Javascript Content Framework, React.js, Webpack and CSS all glued together with API’s</p>
                    </Col>
                    <Col xs={12} sm={6} md={4}>
                        <h4 className="mb-3 mt-4">We build with the data that you want and need</h4>
                        <p>Through an embedded admin panel which has been built to be completely customizable to your data needs.</p>
                    </Col>
                    <Col xs={12} sm={6} md={4}>
                        <h4 className="mb-3 mt-4"><strong>Static</strong> Progressive Web APPS</h4>
                        <p>We only load the critical code and data so your site loads as fast as possible. Once loaded, we prefetch resources for other pages so clicking around sites feels incredibly fast.</p>
                    </Col>
                    <Col xs={12} sm={6} md={4}>
                        <h4 className="mb-3 mt-4">Speed past the competition</h4>
                        <p>We build the fastest possible websites. Instead of waiting to generate pages when requested, pre-build pages and lift them into a global cloud — ready to be delivered instantly to your users wherever they are.</p>
                    </Col>
                    <Col xs={12} sm={6} md={4}>
                        <h4 className="mb-3 mt-4">Scale to the entire internet</h4>
                        <p>Forget complicated deploys with databases and servers and their expensive, time-consuming setup costs, maintenance, and scaling fears. We build your sites as “static” files which can be deployed easily on a Content Delivery Network.</p>
                    </Col>
                </Row>
            </Container>
    </section>
        <section className="building-blocks my-5 py-5">
            <Container>
                <Row>
                <Col xs={12} className="text-center">
                        <div className="building-blocks_header mb-5 mx-auto">
                            <h2>Our Building Blocks</h2>
                        </div>
                    </Col>
                </Row>
                <Row className="justify-content-center">
                    <Col md={3}>
                        <div className="text-center blocks_content m-0"><LazyLoadImage effect="blur" src="../img/blocks-mongodb.png" className="img-fluid"/>
                            <p>A comprehensive Database (MongoDB) Service</p>
                        </div>
                    </Col>
                    <Col md={3}>
                        <div className="text-center blocks_content m-0"><LazyLoadImage effect="blur" src="../img/blocks-nodejs.png" className="img-fluid"/>
                            <p>A Javascript (Node.js) API Content Management Framework</p>
                        </div>
                    </Col>
                    <Col md={3}>
                        <div className="text-center blocks_content m-0"><LazyLoadImage effect="blur" src="../img/blocks-gatsby.png" className="img-fluid"/>
                            <p>A State of the Art Static Site Generator</p>
                        </div>
                    </Col>
                    <Col md={3}>
                        <div className="text-center blocks_content m-0"><LazyLoadImage effect="blur" src="../img/blocks-netlify.png" className="img-fluid"/>
                            <p>An ultra-redundant global CDN</p>
                        </div>
                    </Col>
                    <div className="col-6 col-sm-3">
                        <div className="text-center blocks_content m-0"><LazyLoadImage effect="blur" src="../img/blocks-git.png" className="img-fluid"/>
                            <p>An open-source GIT based CMS System</p>
                        </div>
                    </div>
                    <Col md={3}>
                        <div className="text-center blocks_content m-0"><LazyLoadImage effect="blur" src="../img/blocks-forms.png" className="img-fluid"/>
                            <p>Manage forms and form submissions serverless</p>
                        </div>
                    </Col>
                    <Col md={3}>
                        <div className="text-center blocks_content m-0"><LazyLoadImage effect="blur" src="../img/blocks-ecommerce.png" className="img-fluid"/>
                            <p>build enterprise-grade ecommerce websites</p>
                        </div>
                    </Col>
                </Row>
            </Container>
    </section>
        <section>
        <div className="pricing">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-sm-10 mx-auto">
                        <div className="pricing_header text-center">
                            <h2 className="my-5">Pricing</h2>
                        </div>
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
                                </ul>
                            </div>
                        </div>
                        <div className="pricing_content row">
                            <div className="col-12">
                                <h4 className="mt-4 mb-3">How can we sustain this <strong>pricing model</strong></h4>
                                <p>We have been designing and developing websites and web apps for a long time, and we have seen all the deficiencies of project based pricing, per hour pricing, unknowns in devops, unknowns in maintenance, overruns, delays
                                    etc.We have developed a very opinionated way of implementing websites, ecommerce carts and webapps</p>
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
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="cta mt-5" style={{ backgroundImage: `url(/img/cta-background.svg)` }}>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-sm-8 offset-sm-2 text-center">
                        <h2 className="text-center mb-4">Want to know more, schedule a short 15 minute call with Alex Belding</h2>
                        <Link to="/" className="btn btn-primary btn-inverted">SCHEDULE A CALL</Link>
                    </div>
                </div>
            </div>
        </div>
    </section>
        <section className="language my-5 py-5">
              <div className="container">
                  <div className="row">
                      <div className="col text-center">
                          <div className="language_header mb-5 mx-auto">
                              <h4>Beyond English and four other world languages, we also speak</h4>
                          </div>
                          <ul className="list-unstyled mt-4">

                              <li className="d-inline-block"><LazyLoadImage effect="blur" src="/img/lan-node.png"/></li>
                              <li className="d-inline-block"><LazyLoadImage effect="blur" src="/img/lan-react.png"/></li>
                              <li className="d-inline-block"><LazyLoadImage effect="blur" src="/img/lan-html.png"/></li>
                              <li className="d-inline-block"><LazyLoadImage effect="blur" src="/img/lan-css.png"/></li>
                              <li className="d-inline-block"><LazyLoadImage effect="blur" src="/img/lan-js.png"/></li>
                              <li className="d-inline-block"><LazyLoadImage effect="blur" src="/img/lan-npm.png"/></li>
                              <li className="d-inline-block"><LazyLoadImage effect="blur" src="/img/lan-slack.png"/></li>
                          </ul>
                          <ul className="list-unstyled mt-4">
                              <li className="d-inline-block"><LazyLoadImage effect="blur" src="/img/lan-coffeescript.png"/></li>
                              <li className="d-inline-block"><LazyLoadImage effect="blur" src="/img/lan-graphql.png"/></li>
                              <li className="d-inline-block"><LazyLoadImage effect="blur" src="/img/lan-webpack.png"/></li>
                              <li className="d-inline-block"><LazyLoadImage effect="blur" src="/img/lan-trello.png"/></li>
                          </ul>
                      </div>
                  </div>
          </div>
      </section>
        <section>
          <div className="request-access" style={{backgroundImage: `url("${request}")` }}>
              <div className="container">
                  <div className="row">
                      <div className="col text-center">
                          <h4>Request Access</h4>
                          <h2 className="display-4">Request Access</h2>
                          <Link to="/" className="btn btn-primary mt-3">REQUEST ACCESS</Link>
                          <ul className="list-unstyled mt-4">
                              <li className="d-inline-block"><LazyLoadImage effect="blur" src={reacticon}/></li>
                              <li className="d-inline-block"><LazyLoadImage effect="blur" src={gatsbyicon}/></li>
                              <li className="d-inline-block"><LazyLoadImage effect="blur" src={htmlicon}/></li>
                              <li className="d-inline-block"><LazyLoadImage effect="blur" src={jsicon}/></li>
                              <li className="d-inline-block"><LazyLoadImage effect="blur" src={giticon}/></li>
                              <li className="d-inline-block"><LazyLoadImage effect="blur" src={githubicon}/></li>
                              <li className="d-inline-block"><LazyLoadImage effect="blur" src={netlifyicon}/></li>
                          </ul>
                      </div>
                  </div>
              </div>
          </div>
      </section>
        <section className="my-5 py-5">
        <Container>
            <Row>
                <div className="col-12 text-center">
                    <h2 className="my-5">Latest Blog</h2>
                </div>
                <div className="col article-grid">
                     {posts.map(({ node }) => {
                      return (
                      <div className="article main" key={node.id}>
                        <div className="article-cover-image lazy" style={{
                            backgroundImage: `url("${node.frontmatter.banner}")`
                        }}/>
                        <Link to={node.fields.slug} className="article-action-trigger"/>
                        <div className="article-cover-gradient" style={{ backgroundImage: `url("${gradient}")`}}/>
                        <div className="article-content">
                            <h2 className="article-title">{node.frontmatter.title}</h2>
                            <div className="article-info">
                                <ul className="list-unstyled d-flex">
                                    <li className="mr-4">{node.frontmatter.author}</li>
                                    <li>{node.frontmatter.date}</li>
                                </ul>
                            </div>
                        </div>
                      </div>  
                      )
                      
                    })}
                </div>
            </Row>
        </Container>
      </section>
      </Layout>
    )
  }
}

export default IndexPage

export const indexPageQuery = graphql`
  query indexPageQuery {
    site {
      siteMetadata {
        title
        author
        description
      }
    }
    allMarkdownRemark (
    limit: 3,
    sort: {
      fields: [frontmatter___date]
      order: DESC
    }
  ) {
    edges {
      node {
        id
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
        }
        fields {
          slug
        }
        
      }
    }
  }
  }
`
