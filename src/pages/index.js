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
import Popup from '../components/Popup'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';


class IndexPage extends React.Component {
  render() {
    const siteTitle = this.props.data.site.siteMetadata.title
    const siteDescription = this.props.data.site.siteMetadata.description
    const { data } = this.props
    const posts = data.allMarkdownRemark.edges

    // console.log(posts)

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title={`Home`} description={siteDescription} />
        <section className="comparison pt-5">
              <Container>
                  <Row>
                      <Col md={6} className="mb-4 old">
                          <h2 className="mb-md-4">The Old Way</h2>
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
                      </Col>
                      <Col md={6} className="future">
                          <h2 className="mb-md-4">The WebriQ Way</h2>
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
                      </Col>
                      <Col xs={12} className="text-center">
                        <Link to="/is-webriq-glue-for-you" className="btn btn-primary mt-3" title="is webriq glue for you">MORE</Link>
                      </Col>
                  </Row>
                  
              </Container>
      </section>
        <section className="services">
            <Container className="mt-5 pt-5">
                <Row>
                    <Col xs={12}>
                        <div className="services_header mb-4 pb-4">
                            <h2>Build websites with <strong>WebriQ GLUE</strong>, a future proof Technology Stack</h2>
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
        <section className="building-blocks my-md-5 py-5">
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
        <div className="pricing cta-home">
            <Container>
                <Row>
                    <Col sm={10} className="mx-auto">
                        <div className="pricing_header text-center">
                            <h2 className="my-5">Pricing</h2>
                        </div>
                        <div className="pricing_content text-center row">
                            <h4 className="mb-4 mx-auto">WebriQ GLUE has a unit price of $3,000 per month</h4>
                            <div className="col-12">
                                <ul className="list-unstyled list-inline">
                                    <li className="mx-3 list-inline-item">No upfront Fees</li>
                                    <li className="mx-3 list-inline-item">Scale up or down your units </li>
                                    <li className="mx-3 list-inline-item">Cancel at any moment </li>
                                </ul>
                            </div>
                            <Link to="/pricing" className="d-block d-sm-inline-block btn btn-primary btn-inverted mx-auto">READ MORE</Link>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    </section>
        <section className="language my-5 py-5">
              <Container>
                  <Row>
                      <Col className="text-center">
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
                      </Col>
                  </Row>
          </Container>
      </section>
        <section>
          <div className="request-access" style={{backgroundImage: `url("${request}")` }}>
              <Container>
                  <Row>
                      <div className="col text-center">
                          <h4>Request Access</h4>
                          <h2>WebriQ GLUE</h2>
                          {/*<Link to="/" className="btn btn-primary mt-3" onClick={this.handleShow}>REQUEST ACCESS</Link>*/}
                          <Popup classname="btn btn-primary mt-3">REQUEST ACCESS</Popup>
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
                  </Row>
              </Container>
          </div>
      </section>
        <section className="mb-5 pb-5">
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
                              backgroundImage: `url("https://res.cloudinary.com/dnla85pdq/image/upload/w_840,h_480,c_thumb/v1540269241/webriq/images/${node.frontmatter.banner}")`
                          }}/>
                          <Link to={node.fields.slug} className="article-action-trigger"/>
                          <div className="article-cover-gradient" style={{ backgroundImage: `url("${gradient}")`}}/>
                          <div className="article-content">
                              <h2 className="article-title">{node.frontmatter.title}</h2>
                              <div className="article-info">
                                  <ul className="list-unstyled d-flex flex-wrap">
                                    <li className="mr-3"><i className="far fa-user-circle mr-2"/>{node.frontmatter.author}</li>
                                    <li><i className="far fa-clock mr-2"/>{node.frontmatter.date}</li>
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
    filter:{fileAbsolutePath:{regex: "/(posts)/"}} 
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
