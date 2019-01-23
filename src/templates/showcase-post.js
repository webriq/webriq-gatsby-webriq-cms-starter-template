import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'
import SEO from '../components/seo'
// import { rhythm } from '../utils/typography'
import { Container, Row, Col, Image, ListGroup } from "react-bootstrap";
import Swiper from 'swiper/dist/js/swiper.esm.bundle';
import 'swiper/dist/css/swiper.min.css'
import './showcasepost.css'

class ShowCaseTemplate extends React.Component {
  componentDidMount() {
      if (window) {
        new Swiper('.swiper-container', {
          slidesPerView: 1,
          centeredSlides: true,
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
        }); 
      }
      
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
        <Col sm={10} md={6} className="mx-auto">
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
        <h3 className="my-4 text-blue">Key features include:</h3>
        <ul className="list-unstyled features">
        {post.frontmatter.features.split(",").map((tag, index) =>(
          <li key={index}>{tag}</li>
        ))}
        </ul>
        </Col>
        <Col sm={10} md={4} className="mx-auto">
        <ListGroup>
        <ListGroup.Item>
        <svg className="mr-2" width="24" height="24" viewBox="0 0 299.997 299.997" xmlns="http://www.w3.org/2000/svg">
        <path d="m150 0c-82.839 0-150 67.158-150 150 0 82.837 67.156 150 150 150s150-67.163 150-150c0-82.841-67.161-150-150-150zm0.457 220.76v-2e-3h-64.988c0-46.856 41.152-46.845 50.284-59.097l1.045-5.587c-12.83-6.502-21.887-22.178-21.887-40.512 0-24.154 15.712-43.738 35.089-43.738s35.089 19.584 35.089 43.738c0 18.178-8.896 33.756-21.555 40.361l1.19 6.349c10.019 11.658 49.802 12.418 49.802 58.488h-64.069z" fill="#096ef7"/>
        </svg>{post.frontmatter.site}</ListGroup.Item>
        <ListGroup.Item>
        <svg className="mr-2" width="24" height="24" viewBox="-29 -19 617 617.335" xmlns="http://www.w3.org/2000/svg">
        <path d="m139.14 299.35c-55.532-0.055-105.81 32.8-128.04 83.683-22.239 50.883-12.192 110.11 25.574 150.81a99.226 99.226 0 0 0 7.55 7.562c45.88 42.606 114.5 49.492 167.92 16.844 53.425-32.652 78.601-96.86 61.605-157.11-16.988-60.262-71.996-101.86-134.6-101.79zm9.976 139.7c0 5.512-4.465 9.98-9.976 9.98h-59.872c-5.511 0-9.976-4.469-9.976-9.98 0-5.508 4.465-9.977 9.976-9.977h49.895v-89.808c0-5.508 4.465-9.977 9.977-9.977s9.976 4.469 9.976 9.977z" fill="#006DF0"/>
        <path d="M558.238 159.656H39.36V314.52c1.47-1.176 2.993-2.215 4.528-3.34 1.539-1.133 2.996-2.246 4.492-3.305a142.134 142.134 0 0 1 9.492-5.988c1.094-.649 2.14-1.364 3.25-1.992a159.483 159.483 0 0 1 13.352-6.692c1.238-.543 2.507-.992 3.761-1.504 3.414-1.406 6.856-2.742 10.356-3.922 1.7-.566 3.414-1.058 5.129-1.562 3.183-.961 6.398-1.813 9.652-2.57 1.785-.41 3.574-.805 5.375-1.165 3.426-.667 6.867-1.18 10.328-1.628 1.61-.2 3.192-.457 4.801-.618 5.063-.488 10.148-.796 15.27-.796 88.117.105 159.527 71.5 159.656 159.613 0 5.12-.313 10.207-.801 15.265-.16 1.61-.418 3.196-.617 4.79a186.8 186.8 0 0 1-1.63 10.34c-.358 1.808-.757 3.581-1.167 5.367a150.894 150.894 0 0 1-2.574 9.703c-.496 1.695-.996 3.39-1.555 5.066-1.187 3.57-2.547 7.074-3.992 10.547-.488 1.176-.906 2.383-1.43 3.555a159.602 159.602 0 0 1-6.734 13.46c-.551.997-1.2 1.915-1.774 2.895-1.996 3.363-4.05 6.664-6.277 9.867-.996 1.457-2.086 2.856-3.145 4.274-1.058 1.41-2.21 3.152-3.43 4.656h264.63c16.53 0 29.933-13.402 29.933-29.934zm0 0M558.238 89.805c0-16.532-13.402-29.934-29.933-29.934h-19.957v29.934c0 5.511-4.47 9.98-9.98 9.98-5.509 0-9.977-4.469-9.977-9.98V59.87h-79.828v29.934c0 5.511-4.47 9.98-9.977 9.98-5.512 0-9.98-4.469-9.98-9.98V59.87h-79.829v29.934c0 5.511-4.468 9.98-9.976 9.98-5.512 0-9.98-4.469-9.98-9.98V59.87h-79.829v29.934c0 5.511-4.465 9.98-9.976 9.98s-9.98-4.469-9.98-9.98V59.87H109.21v29.934c0 5.511-4.469 9.98-9.98 9.98s-9.977-4.469-9.977-9.98V59.87H69.297c-16.54 0-29.938 13.402-29.938 29.934v49.894h518.88zm0 0M298.8 0c-5.51 0-9.98 4.469-9.98 9.977V59.87h19.957V9.977c0-5.508-4.468-9.977-9.976-9.977zm0 0M398.586 0c-5.512 0-9.98 4.469-9.98 9.977V59.87h19.956V9.977c0-5.508-4.468-9.977-9.976-9.977zm0 0M508.348 9.977c0-5.508-4.47-9.977-9.98-9.977-5.509 0-9.977 4.469-9.977 9.977V59.87h19.957zm0 0M199.016 0c-5.512 0-9.98 4.469-9.98 9.977V59.87h19.956V9.977c0-5.508-4.465-9.977-9.976-9.977zm0 0M99.23 0c-5.511 0-9.976 4.469-9.976 9.977V59.87h19.957V9.977c0-5.508-4.469-9.977-9.98-9.977zm0 0" fill="#006DF0"/>
        </svg>{post.frontmatter.date}</ListGroup.Item>
        <ListGroup.Item>
        <svg className="mr-2" width="24" height="24" viewBox="0 0 44 44" xmlns="http://www.w3.org/2000/svg">
        <path d="M22 0C9.8 0 0 9.8 0 22s9.8 22 22 22 22-9.8 22-22S34.2 0 22 0zm-7.7 20.5l2.5 2.5c.4.4.4 1 0 1.4l-1.4 1.4c-.4.4-1 .4-1.4 0l-2.5-2.5c-1.6-1.6-2.5-3.7-2.5-6 0-4.6 3.8-8.4 8.4-8.4 2.2 0 4.4.9 6 2.5l2.5 2.5c.4.4.4 1 0 1.4l-1.4 1.4c-.4.4-1 .4-1.4 0l-2.5-2.5c-.8-.8-1.9-1.3-3.1-1.3-2.4 0-4.4 2-4.4 4.4-.1 1.3.4 2.4 1.2 3.2zM26.6 35c-2.2 0-4.4-.9-6-2.5L18.1 30c-.4-.4-.4-1 0-1.4l1.4-1.4c.4-.4 1-.4 1.4 0l2.5 2.5c.8.8 1.9 1.3 3.1 1.3 2.4 0 4.4-2 4.4-4.4 0-1.2-.5-2.3-1.3-3.1L27.1 21c-.4-.4-.4-1 0-1.4l1.4-1.4c.4-.4 1-.4 1.4 0l2.5 2.5c1.6 1.6 2.5 3.7 2.5 6 .1 4.5-3.7 8.3-8.3 8.3z" fill="#006DF0"/>
        </svg><a href={post.frontmatter.website} target="_blank" rel="noopener noreferrer" title={post.frontmatter.website}>{post.frontmatter.website}</a></ListGroup.Item>
        </ListGroup>
        </Col>
        </Row>
        <Row>
        <Col>
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
        <Link to="/showcase">Take Me Home</Link>
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
        website
      }
    }
  }
`
