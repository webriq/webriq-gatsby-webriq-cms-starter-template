import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'
import SEO from '../components/seo'
import { rhythm } from '../utils/typography'
import { Container, Row, Col, Image } from "react-bootstrap";
import Swiper from 'swiper/dist/js/swiper.esm.bundle';
import 'swiper/dist/css/swiper.min.css'
import './showcasepost.css'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

class ShowCaseTemplate extends React.Component {
  componentDidMount() {
      const swiper = new Swiper('.swiper-container', {
        slidesPerView: 1,
        spaceBetween: 30,
        centeredSlides: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      });  
  }
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = post.frontmatter.title
    const { previous, next } = this.props.pageContext

    return (
      <Layout location={this.props.location} title={siteTitle} customclass="showcasepage">
        <SEO title={post.frontmatter.title} description={post.excerpt} banner={post.frontmatter.banner} />
        <section className="showcase-page">
        <div className="showcase-slider-wrapper w-100">
          <div className="showcase-slider">
          <div className="swiper-container text-center">
          <div className="swiper-wrapper">
            {post.frontmatter.slider.split(",").map((slide, index) => (
              <div className="swiper-slide" key={index}
              ><Image className="mb-0" src={`https://res.cloudinary.com/dnla85pdq/image/upload/v1545123802/webriq-services/showcase/${post.frontmatter.slider_folder}/${slide}`} alt={post.frontmatter.title}/></div>
            ))}
          </div>
          <div className="swiper-button-prev"></div>
          <div className="swiper-button-next"></div>
        </div>
          </div>
        </div>
        <Container className="py-5">
        <Row>
        <Col sm={10} md={8} className="mx-auto">
        {/*<h1>{post.frontmatter.title}</h1>*/}
        <ul className="list-unstyled d-flex align-items-center" >
          <li className="mr-3"><i className="far fa-user-circle mr-1"/>by <span className="text-blue">{post.frontmatter.author}</span></li>
          <li><i className="far fa-clock mr-1"/>{post.frontmatter.date}</li>
        </ul>
        <LazyLoadImage effect="blur" src={post.frontmatter.banner} alt={siteTitle}/>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
        <hr
          style={{
            marginBottom: rhythm(1),
          }}
        />

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
              <Link to={previous.fields.sslug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.sslug} rel="next">
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

export default ShowCaseTemplate

export const pageQuery = graphql`
  query ShowCaseBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { sslug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(fromNow: true)
        banner
        slider
        site
        slider_folder
        features
      }
    }
  }
`
