import React from 'react'
// import { Link } from 'gatsby'
import { Container, Row, Col } from "react-bootstrap";
// import Sticky from 'react-sticky-el';
import Header from './Header'
import Footer from './Footer'
import Hero from './Hero'
import 'bootstrap/dist/css/bootstrap.css'
import './layout.css'
import stylesHero from './hero.module.css'
import "@fortawesome/fontawesome-free/css/all.css";

class Layout extends React.Component {
  render() {
    // const { location, title, children } = this.props
    const { location, title, children, customclass } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header

    if (location.pathname === rootPath) {
      header = (
        <Hero/>
      )
    } else {
      header = (
        <section>
          <div className={stylesHero.hero}>
              <div className={stylesHero.heroSub}>
                  <Container>
                      <Row>
                          <Col className="py-5 text-center">
                            <h1 className="my-4">{title}</h1>
                          </Col>
                      </Row>
                  </Container>
              </div>
          </div>
        </section>
      )
    }
    return (
      <div className={location.pathname === rootPath ? "homepage" : customclass || "mainpage"}>
        <Header/>
        {header}
        <main>
          {children}
        </main>
        <Footer/>
      </div>
    )
  }
}

export default Layout
